import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  collectionPagesDataScheme,
  collectionScheme,
  collectionsPageScheme,
  mutateCollectionScheme,
} from "@/lib/api/collection";
import { errorScheme } from "@/lib/error";
import { useSession } from "next-auth/react";
import { useErrorToast, useToast } from "@/hooks/use-toast";
import { z } from "zod";

export function useCollectionData(subject_id: number) {
  const { data: session } = useSession();
  const errorToast = useErrorToast();

  const { data, isSuccess } = useQuery({
    queryKey: ["collection", subject_id, session?.user.name],
    queryFn: async () => {
      if (!session?.user.name) {
        return null;
      }
      try {
        const response = await fetch(
          `https://api.bgm.tv/v0/users/${session.user.name}/collections/${subject_id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data = await response.json();
        const collectionResult = collectionScheme.safeParse(data);
        if (!collectionResult.success) {
          const errorResult = errorScheme.safeParse(data);
          if (errorResult.success) {
            if (response.status === 404) {
              return null;
            }
            throw new Error(JSON.stringify(errorResult.data, null, 2));
          } else {
            throw new Error(
              `FROM ERROR:\n${errorResult.error.message}\n\nFROM COLLECTION:\n${collectionResult.error.message}`
            );
          }
        } else {
          return collectionResult.data;
        }
      } catch (e) {
        if (e instanceof Error) {
          const message = e.message;
          errorToast("获取收藏信息失败", message);
        }
      }
    },
    staleTime: 1000,
  });

  return { data, isSuccess };
}

export function useCollectionsPageData(
  subject_type: number,
  collection_type: number,
  limit = 30
) {
  const { data: session } = useSession();
  const errorToast = useErrorToast();

  const { data, isSuccess, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [
        "collections",
        subject_type,
        collection_type,
        session?.user.name,
      ],
      queryFn: async ({ pageParam = 0 }) => {
        if (!session?.user.name) {
          return null;
        }
        try {
          const page = z.number().parse(pageParam);
          const response = await fetch(
            `https://api.bgm.tv/v0/users/${session.user.name}/collections?subject_type=${subject_type}&type=${collection_type}&limit=${limit}&offset=${page}`,
            {
              headers: {
                Authorization: `Bearer ${session.accessToken}`,
              },
            }
          );
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const data = await response.json();
          const collectionsPageResult = collectionsPageScheme.safeParse(data);
          if (!collectionsPageResult.success) {
            const errorResult = errorScheme.safeParse(data);
            if (errorResult.success) {
              throw new Error(JSON.stringify(errorResult.data, null, 2));
            } else {
              throw new Error(
                `FROM ERROR:\n${errorResult.error.message}\n\nFROM COLLECTIONS_PAGE:\n${collectionsPageResult.error.message}`
              );
            }
          } else {
            return collectionsPageResult.data;
          }
        } catch (e) {
          if (e instanceof Error) {
            const message = e.message;
            errorToast("获取收藏信息失败", message);
          }
        }
      },
      getNextPageParam: (lastPage) => {
        if (lastPage) {
          if (lastPage.data.length < limit) {
            return undefined;
          } else {
            return lastPage.offset + limit;
          }
        }
      },
    });

  return { data, isSuccess, fetchNextPage, hasNextPage, isFetchingNextPage };
}

export function useCollectionMutation() {
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const toast = useToast();
  const errorToast = useErrorToast();

  return useMutation({
    mutationFn: z
      .function()
      .args(
        z.object({
          mutateCollection: mutateCollectionScheme,
          description: z.string(),
          subject_id: z.number().int(),
          subject_type: z.number().int(),
          collection_type: z.number().int(),
        })
      )
      .implement(({ mutateCollection, subject_id }) => {
        if (!session) {
          throw new Error("请先登录！");
        }
        return fetch(
          `https://api.bgm.tv/v0/users/-/collections/${subject_id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session.accessToken}`,
            },
            body: JSON.stringify(mutateCollection),
          }
        ).catch((e) => {
          if (e instanceof Error) {
            throw new Error(e.message);
          }
        });
      }),
    onMutate: async ({ mutateCollection, subject_id }) => {
      await queryClient.cancelQueries(["collection", subject_id]);
      const previousCollectionData = collectionScheme.parse(
        queryClient.getQueryData(["collection", subject_id, session?.user.name])
      );
      const newCollectionData = {
        ...previousCollectionData,
        ...mutateCollection,
      };
      queryClient.setQueryData(
        ["collection", subject_id, session?.user.name],
        newCollectionData
      );
      return { previousCollectionData, newCollectionData };
    },
    onSuccess: async (
      data,
      {
        subject_id,
        description,
        subject_type,
        collection_type,
        mutateCollection,
      }
    ) => {
      if (data) {
        if (data.status !== 204) {
          const errorResult = errorScheme.safeParse(await data.json());
          if (errorResult.success) {
            throw new Error(JSON.stringify(errorResult.data, null, 2));
          } else {
            throw new Error(errorResult.error.message);
          }
        }
      }

      queryClient.setQueryData(
        ["collections", subject_type, collection_type, session?.user.name],
        (oldData) => {
          if (!oldData) {
            return oldData;
          }
          const oldDataParsed = collectionPagesDataScheme.parse(oldData);
          const targetPage = oldDataParsed.pages.find((collectionsPage) => {
            return collectionsPage.data.find((collection) => {
              return collection.subject_id === subject_id;
            });
          });

          if (targetPage) {
            if (mutateCollection.type) {
              targetPage.data = targetPage.data.filter((collection) => {
                return collection.subject_id !== subject_id;
              });
            } else {
              targetPage.data = targetPage.data.map((collection) => {
                if (collection.subject_id === subject_id) {
                  collection = {
                    ...collection,
                    ...mutateCollection,
                  };
                }
                return collection;
              });
            }
          }
          return oldDataParsed;
        }
      );
      await queryClient.invalidateQueries(
        [
          "collections",
          subject_type,
          mutateCollection.type,
          session?.user.name,
        ],
        { refetchType: "all" }
      );

      toast({
        type: "success",
        title: "修改收藏状态成功",
        description: `已将条目的收藏状态修改为 ${description}`,
      });
    },
    onError: (error, { subject_id }, context) => {
      if (error instanceof Error) {
        errorToast("修改收藏状态失败", error.message);
      }

      context &&
        queryClient.setQueryData(
          ["collection", subject_id, session?.user.name],
          context.previousCollectionData
        );
    },
    onSettled: async (data, error, { subject_id }) => {
      await queryClient.invalidateQueries({
        queryKey: ["collection", subject_id, session?.user.name],
        exact: true,
      });
    },
  });
}

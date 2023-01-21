import { useSession } from "next-auth/react";
import { useErrorToast, useToast } from "@/hooks/use-toast";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { z } from "zod";
import { errorScheme, ToastError } from "@/lib/error";
import type { mutateEpisodesScheme } from "@/lib/episode";
import { episodesPageScheme } from "@/lib/episode";
import { collectionPagesDataScheme, collectionScheme } from "@/lib/collection";

export function useEpisodesData(
  subject_id: number,
  limit: number,
  offset = 0,
  type = 0
) {
  const { data: session } = useSession();
  const openErrorToast = useErrorToast();

  const { data, isSuccess } = useQuery({
    queryKey: ["episodes", subject_id, offset, limit, type, session?.user.name],
    queryFn: async () => {
      try {
        if (offset === -1) {
          return null;
        }
        const response = await fetch(
          `https://api.bgm.tv/v0/episodes?subject_id=${subject_id}&type=${type}&offset=${offset}&limit=${limit}`,
          {
            headers:
              session === null
                ? {}
                : {
                    Authorization: `Bearer ${session.accessToken}`,
                  },
          }
        );
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data = await response.json();
        const episodesResult = episodesPageScheme.safeParse(data);
        if (!episodesResult.success) {
          const errorResult = errorScheme.safeParse(data);
          if (errorResult.success) {
            throw new Error(JSON.stringify(errorResult.data, null, 2));
          } else {
            throw new Error(
              `FROM ERROR:\n${errorResult.error.message}\n\nFROM EPISODES:\n${episodesResult.error.message}`
            );
          }
        } else {
          if (episodesResult.data.data[0]?.ep !== offset + 1) {
            return null;
          }
          return episodesResult.data;
        }
      } catch (e) {
        if (e instanceof Error) {
          const message = e.message;
          openErrorToast("获取剧集信息失败", message);
        }
      }
    },
    staleTime: Infinity,
    keepPreviousData: true,
  });
  return { data, isSuccess };
}

export function useEpisodesPageData(subject_id: number, limit = 100, type = 0) {
  const { data: session } = useSession();
  const openErrorToast = useErrorToast();

  const { data, isSuccess, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["episodes", subject_id, session?.user.name],
      queryFn: async ({ pageParam = 0 }) => {
        try {
          const page = z.number().parse(pageParam);
          const response = await fetch(
            `https://api.bgm.tv/v0/episodes?subject_id=${subject_id}&type=${type}&limit=${limit}&offset=${page}`,
            {
              headers:
                session === null
                  ? {}
                  : {
                      Authorization: `Bearer ${session.accessToken}`,
                    },
            }
          );
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const data = await response.json();
          const episodesPageResult = episodesPageScheme.safeParse(data);
          if (!episodesPageResult.success) {
            const errorResult = errorScheme.safeParse(data);
            if (errorResult.success) {
              throw new Error(JSON.stringify(errorResult.data, null, 2));
            } else {
              throw new Error(
                `FROM ERROR:\n${errorResult.error.message}\n\nFROM EPISODES_PAGE:\n${episodesPageResult.error.message}`
              );
            }
          } else {
            return episodesPageResult.data;
          }
        } catch (e) {
          if (e instanceof Error) {
            const message = e.message;
            openErrorToast("获取剧集信息失败", message);
          }
        }
      },
      getNextPageParam: (lastPage) => {
        if (lastPage) {
          if (lastPage.data.length < limit) {
            return undefined;
          } else {
            return lastPage.data[lastPage.data.length - 1].ep;
          }
        }
      },
    });

  return { data, isSuccess, fetchNextPage, hasNextPage, isFetchingNextPage };
}

export function useEpisodeMutation() {
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const openToast = useToast();
  const openErrorToast = useErrorToast();

  return useMutation({
    mutationFn: z
      .function()
      .args(
        z.object({
          currentEp: z.number().int(),
          targetEp: z.number().int(),
          subject_id: z.number().int(),
          subject_type: z.number().int(),
          collection_type: z.number().int(),
        })
      )
      .implement(({ currentEp, targetEp, subject_id }) => {
        if (!session) {
          throw new Error("请先登录！");
        }
        if (targetEp - currentEp > 100) {
          throw new ToastError({
            description: "单次最多更新 100 集。建议前往主站更新",
            action: {
              label: "前往主站",
              onClick: () => {
                window.open(`https://bgm.tv/subject/${subject_id}`, "_blank");
              },
            },
          });
        }
        const limit = targetEp - currentEp;

        return fetch(
          `https://api.bgm.tv/v0/episodes?subject_id=${subject_id}&type=0&offset=${
            limit > 0 ? currentEp : targetEp
          }&limit=${Math.abs(limit)}`,
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            const episodes = episodesPageScheme.parse(data);
            if (
              episodes.data[0]?.ep !==
              (limit > 0 ? currentEp : targetEp) + 1
            ) {
              throw new ToastError({
                description: "该章节 api 未按顺序排列，请前往主站更新",
                action: {
                  label: "前往主站",
                  onClick: () => {
                    window.open(
                      `https://bgm.tv/subject/${subject_id}`,
                      "_blank"
                    );
                  },
                },
              });
            }
            const episodes_id = episodes.data.map((episode) => episode.id);
            const mutateEpisodes: z.infer<typeof mutateEpisodesScheme> = {
              episode_id: episodes_id,
              type: targetEp - currentEp > 0 ? 2 : 0,
            };
            return fetch(
              `https://api.bgm.tv/v0/users/-/collections/${subject_id}/episodes`,
              {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${session.accessToken}`,
                },
                body: JSON.stringify(mutateEpisodes),
              }
            );
          })
          .catch((e) => {
            if (e instanceof Error) {
              if (e instanceof ToastError) {
                throw e;
              }
              throw new Error(e.message);
            }
          });
      }),
    onMutate: async ({ targetEp, subject_id }) => {
      await queryClient.cancelQueries(["collection", subject_id]);
      const previousCollectionData = collectionScheme.parse(
        queryClient.getQueryData(["collection", subject_id, session?.user.name])
      );
      const newCollectionData: z.infer<typeof collectionScheme> = {
        ...previousCollectionData,
        ep_status: targetEp,
      };
      queryClient.setQueryData(
        ["collection", subject_id, session?.user.name],
        newCollectionData
      );
      return { previousCollectionData, newCollectionData };
    },
    onSuccess: async (
      data,
      { targetEp, subject_type, collection_type, subject_id }
    ) => {
      if (data) {
        if (data.status !== 204) {
          const errorResult = errorScheme.safeParse(await data.json());
          if (errorResult.success) {
            throw new Error(JSON.stringify(errorResult.data));
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
            targetPage.data = targetPage.data.map((collection) => {
              if (collection.subject_id === subject_id) {
                return {
                  ...collection,
                  ep_status: targetEp,
                };
              } else {
                return collection;
              }
            });
          }

          return oldDataParsed;
        }
      );

      openToast({
        type: "success",
        title: "修改收藏进度成功",
        description: `已将条目的收藏进度修改为观看至第 ${targetEp} 集`,
      });
    },
    onError: (error, { subject_id }, context) => {
      if (error instanceof Error) {
        if (error instanceof ToastError) {
          openToast({
            type: "error",
            title: "修改收藏进度失败",
            description: error.description,
            action: error.action,
          });
        } else {
          openErrorToast("修改收藏进度失败", error.message);
        }
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

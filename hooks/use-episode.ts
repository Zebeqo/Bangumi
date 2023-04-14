import { useSession } from "next-auth/react";
import { useErrorToast, useToast } from "@/hooks/use-toast";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { z } from "zod";
import { ToastError } from "@/lib/error";
import type { mutateEpisodesScheme } from "@/lib/api/episode";
import { episodesPageScheme } from "@/lib/api/episode";
import {
  collectionPagesDataScheme,
  collectionScheme,
} from "@/lib/api/collection";
import { handleMutationResponse, handleResponse } from "@/lib/api/utils";

export function useEpisodesData(
  subject_id: number,
  limit: number,
  offset = 0,
  type = 0
) {
  const { data: session } = useSession();
  const toast = useToast();
  const errorToast = useErrorToast();

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

        const episodesResult = episodesPageScheme.safeParse(
          await response.clone().json()
        );
        if (
          episodesResult.success &&
          episodesResult.data.data[0]?.ep !== offset + 1
        ) {
          toast({
            type: "info",
            title: "无法获取剧集",
            description: "该条目剧集数据不符合格式。",
          });
          return null;
        }

        return await handleResponse(response, episodesPageScheme);
      } catch (e) {
        if (e instanceof Error) {
          const message = e.message;
          errorToast("获取剧集信息失败", message);
          return null;
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
  const errorToast = useErrorToast();

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
          return await handleResponse(response, episodesPageScheme);
        } catch (e) {
          if (e instanceof Error) {
            const message = e.message;
            errorToast("获取剧集信息失败", message);
            return null;
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
  const toast = useToast();
  const errorToast = useErrorToast();

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
      toast({
        type: "info",
        title: "正在修改收藏进度...",
      });
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
        await handleMutationResponse(data);
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

      toast({
        type: "success",
        title: "修改收藏进度成功",
        description: `已将条目的收藏进度修改为观看至第 ${targetEp} 集`,
      });
    },
    onError: (error, { subject_id }, context) => {
      if (error instanceof Error) {
        if (error instanceof ToastError) {
          toast({
            type: "error",
            title: "修改收藏进度失败",
            description: error.description,
            action: error.action,
          });
        } else {
          errorToast("修改收藏进度失败", error.message);
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

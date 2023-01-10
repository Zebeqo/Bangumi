import { useSession } from "next-auth/react";
import { useErrorToast } from "@/hooks/use-toast";
import { useInfiniteQuery } from "@tanstack/react-query";
import { z } from "zod";
import { errorScheme } from "@/lib/error";
import { episodesScheme } from "@/lib/episode";

export function useEpisodesData(subject_id: number, limit = 100, type = 0) {
  const { data: session } = useSession();
  const openErrorToast = useErrorToast();

  const { data, isSuccess, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["episodes", subject_id, limit, type, session?.user.id],
      queryFn: async ({ pageParam = 0 }) => {
        if (!subject_id || !session?.user.id) {
          return null;
        }
        try {
          const page = z.number().parse(pageParam);
          const response = await fetch(
            `https://api.bgm.tv/v0/episodes?subject_id=${subject_id}&type=${type}&limit=${limit}&offset=${page}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${session.accessToken}`,
              },
            }
          );
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const data = await response.json();
          const episodesResult = episodesScheme.safeParse(data);
          if (!episodesResult.success) {
            const errorResult = errorScheme.safeParse(data);
            if (errorResult.success) {
              return null;
            } else {
              throw new Error(
                `FROM ERROR:\n${errorResult.error.message}\n\nFROM EPISODES:\n${episodesResult.error.message}`
              );
            }
          } else {
            return episodesResult.data;
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

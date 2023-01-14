import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { collectionScheme, mutateCollectionScheme } from "@/lib/collection";
import { errorScheme } from "@/lib/error";
import { useSession } from "next-auth/react";
import { useErrorToast, useToast } from "@/hooks/use-toast";
import { z } from "zod";

export function useCollectionData(subject_id?: number) {
  const { data: session } = useSession();
  const openErrorToast = useErrorToast();

  const { data, isSuccess } = useQuery({
    queryKey: ["collection", subject_id, session?.user.id],
    queryFn: async () => {
      if (!subject_id || !session?.user.id) {
        return null;
      }
      try {
        const response = await fetch(
          `https://api.bgm.tv/v0/users/${session.user.id}/collections/${subject_id}`,
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
          openErrorToast("获取收藏信息失败", message);
        }
      }
    },
  });

  return { data, isSuccess };
}

export function useCollectionMutation() {
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const openToast = useToast();
  const openErrorToast = useErrorToast();

  return useMutation({
    mutationFn: z
      .function()
      .args(
        z.object({
          mutateCollection: mutateCollectionScheme,
          description: z.string(),
          subject_id: z.number(),
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
        queryClient.getQueryData(["collection", subject_id, session?.user.id])
      );
      const newCollectionData = {
        ...previousCollectionData,
        ...mutateCollection,
      };
      queryClient.setQueryData(
        ["collection", subject_id, session?.user.id],
        newCollectionData
      );
      return { previousCollectionData, newCollectionData };
    },
    onSuccess: async (data, { description }) => {
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

      openToast({
        type: "success",
        title: "修改收藏状态成功",
        description: `已将条目的收藏状态修改为 ${description}`,
      });
    },
    onError: (error, { subject_id }, context) => {
      if (error instanceof Error) {
        openErrorToast("修改收藏状态失败", error.message);
      }

      context &&
        queryClient.setQueryData(
          ["collection", subject_id, session?.user.id],
          context.previousCollectionData
        );
    },
    onSettled: async (data, error, { subject_id }) => {
      await queryClient.invalidateQueries({
        queryKey: ["collection", subject_id, session?.user.id],
        exact: true,
      });
    },
  });
}

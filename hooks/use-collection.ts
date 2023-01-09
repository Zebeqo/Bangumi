import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CollectionType } from "@/lib/collection";
import { collectionScheme, collectionTypeMap } from "@/lib/collection";
import { errorScheme } from "@/lib/error";
import { useSession } from "next-auth/react";
import { useErrorToast, useToast } from "@/hooks/use-toast";

export function useCollectionData(subject_id?: number) {
  const { data: session } = useSession();
  const openErrorToast = useErrorToast();

  const { data } = useQuery({
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
            return null;
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

  return data;
}

export function useCollectionTypeMutation() {
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const openToast = useToast();
  const openErrorToast = useErrorToast();

  return useMutation({
    mutationFn: ({
      collection_type,
      subject_id,
    }: {
      subject_id: number;
      collection_type: CollectionType;
    }) => {
      if (!session) {
        throw new Error("请先登录！");
      }
      return fetch(`https://api.bgm.tv/v0/users/-/collections/${subject_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.accessToken}`,
        },
        body: JSON.stringify({
          type: collection_type,
        }),
      }).catch((e) => {
        if (e instanceof Error) {
          throw new Error(e.message);
        }
      });
    },
    onSuccess: async (data, variables) => {
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

      await queryClient.invalidateQueries({
        queryKey: ["collection", variables.subject_id, session?.user.id],
        exact: true,
      });
      openToast({
        type: "success",
        title: "修改收藏状态成功",
        description: `已将条目的收藏状态修改为 ${
          collectionTypeMap[variables.collection_type]
        }`,
      });
    },
    onError: (error) => {
      if (error instanceof Error) {
        openErrorToast("修改收藏状态失败", error.message);
      }
    },
  });
}

export function useMutateCollectionType() {
  const collectionTypeMutation = useCollectionTypeMutation();
  return (value: string) => {
    const collection_type = Object.keys(collectionTypeMap).find(
      (key) => collectionTypeMap[Number(key) as CollectionType] === value
    );
    collectionTypeMutation.mutate({
      collection_type: Number(collection_type) as CollectionType,
      subject_id: 302286,
    });
  };
}

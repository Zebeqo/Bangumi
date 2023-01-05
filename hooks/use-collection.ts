import { useQuery } from "@tanstack/react-query";
import { collectionScheme } from "@/lib/collection";
import { errorScheme } from "@/lib/error";
import { useSession } from "next-auth/react";
import { useErrorToast } from "@/hooks/use-toast";

export function useCollectionData(id?: number) {
  const { data: session } = useSession();
  const openErrorToast = useErrorToast();

  const { data } = useQuery({
    queryKey: ["collection", id, session?.user.id],
    queryFn: async () => {
      if (!id || !session?.user.id) {
        return null;
      }
      try {
        const response = await fetch(
          `https://api.bgm.tv/v0/users/${session.user.id}/collections/${id}`,
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

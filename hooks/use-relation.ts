import { useErrorToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { subjectRelationsScheme } from "@/lib/api/relation";
import { handleResponse } from "@/lib/api/utils";

export function useSubjectRelationsData(subject_id: number) {
  const errorToast = useErrorToast();
  const { data: session } = useSession();

  const { data, isSuccess } = useQuery({
    queryKey: ["relations", subject_id],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://api.bgm.tv/v0/subjects/${subject_id}/subjects`,
          {
            headers:
              session === null
                ? {}
                : {
                    Authorization: `Bearer ${session.accessToken}`,
                  },
          }
        );
        return await handleResponse(response, subjectRelationsScheme);
      } catch (e) {
        if (e instanceof Error) {
          const message = e.message;
          errorToast("获取相关条目信息失败", message);
        }
      }
    },
    staleTime: Infinity,
  });

  return { data, isSuccess };
}

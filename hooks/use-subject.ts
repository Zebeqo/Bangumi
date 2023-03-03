import { useQuery } from "@tanstack/react-query";
import { subjectScheme } from "@/lib/api/subject";
import { useErrorToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import { handleResponse } from "@/lib/api/utils";

export function useSubjectData(subject_id: number) {
  const { data: session } = useSession();
  const errorToast = useErrorToast();
  const { data, isSuccess } = useQuery({
    queryKey: ["subject", subject_id, session?.user.name],
    queryFn: async () => {
      if (subject_id === -1) return null;
      try {
        const response = await fetch(
          `https://api.bgm.tv/v0/subjects/${subject_id}`,
          {
            headers:
              session === null
                ? {}
                : {
                    Authorization: `Bearer ${session.accessToken}`,
                  },
          }
        );

        return await handleResponse(response, subjectScheme);
      } catch (e) {
        if (e instanceof Error) {
          const message = e.message;
          errorToast("获取条目信息失败", message);
        }
      }
    },
    staleTime: Infinity,
  });
  return { data, isSuccess };
}

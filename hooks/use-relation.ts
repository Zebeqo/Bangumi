import { useErrorToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { errorScheme } from "@/lib/error";
import { subjectRelationsScheme } from "@/lib/relation";

export function useSubjectRelationsData(subject_id: number) {
  const openErrorToast = useErrorToast();
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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data = await response.json();
        const subjectRelationsResult = subjectRelationsScheme.safeParse(data);
        if (!subjectRelationsResult.success) {
          const errorResult = errorScheme.safeParse(data);
          if (errorResult.success) {
            throw new Error(JSON.stringify(errorResult.data, null, 2));
          } else {
            throw new Error(
              `FROM ERROR:\n${errorResult.error.message}\n\nFROM SUBJECT_RELATIONS:\n${subjectRelationsResult.error.message}`
            );
          }
        } else {
          return subjectRelationsResult.data;
        }
      } catch (e) {
        if (e instanceof Error) {
          const message = e.message;
          openErrorToast("获取相关条目信息失败", message);
        }
      }
    },
    staleTime: Infinity,
  });

  return { data, isSuccess };
}

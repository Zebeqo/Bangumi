import { useQuery } from "@tanstack/react-query";
import { subjectScheme } from "@/lib/subject";
import { useErrorToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import { errorScheme } from "@/lib/error";

export function useSubjectData(subject_id: number) {
  const { data: session } = useSession();
  const openErrorToast = useErrorToast();
  const { data, isSuccess } = useQuery({
    queryKey: ["subject", Number(subject_id), session?.user.id],
    queryFn: async () => {
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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data = await response.json();
        const subjectResult = subjectScheme.safeParse(data);
        if (!subjectResult.success) {
          const errorResult = errorScheme.safeParse(data);
          if (errorResult.success) {
            throw new Error(JSON.stringify(errorResult.data, null, 2));
          } else {
            throw new Error(
              `FROM ERROR:\n${errorResult.error.message}\n\nFROM SUBJECT:\n${subjectResult.error.message}`
            );
          }
        } else {
          return subjectResult.data;
        }
      } catch (e) {
        if (e instanceof Error) {
          const message = e.message;
          openErrorToast("获取条目信息失败", message);
        }
      }
    },
    staleTime: Infinity,
  });
  return { data, isSuccess };
}

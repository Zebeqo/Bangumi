import { useErrorToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { errorScheme } from "@/lib/error";
import { personScheme, subjectPersonScheme } from "@/lib/api/person";

export function usePersonData(person_id: number) {
  const errorToast = useErrorToast();

  const { data, isSuccess } = useQuery({
    queryKey: ["person", person_id],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://api.bgm.tv/v0/persons/${person_id}`
        );
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data = await response.json();
        const personResult = personScheme.safeParse(data);
        if (!personResult.success) {
          const errorResult = errorScheme.safeParse(data);
          if (errorResult.success) {
            throw new Error(JSON.stringify(errorResult.data, null, 2));
          } else {
            throw new Error(
              `FROM ERROR:\n${errorResult.error.message}\n\nFROM PERSON:\n${personResult.error.message}`
            );
          }
        } else {
          return personResult.data;
        }
      } catch (e) {
        if (e instanceof Error) {
          const message = e.message;
          errorToast("获取制作人员信息失败", message);
        }
      }
    },
    staleTime: Infinity,
  });

  return { data, isSuccess };
}

export function useSubjectPersonsData(subject_id: number) {
  const errorToast = useErrorToast();
  const { data: session } = useSession();

  const { data, isSuccess } = useQuery({
    queryKey: ["persons", subject_id],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://api.bgm.tv/v0/subjects/${subject_id}/persons`,
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
        const subjectPersonResult = subjectPersonScheme.safeParse(data);
        if (!subjectPersonResult.success) {
          const errorResult = errorScheme.safeParse(data);
          if (errorResult.success) {
            throw new Error(JSON.stringify(errorResult.data, null, 2));
          } else {
            throw new Error(
              `FROM ERROR:\n${errorResult.error.message}\n\nFROM SUBJECT_PERSONS:\n${subjectPersonResult.error.message}`
            );
          }
        } else {
          return subjectPersonResult.data;
        }
      } catch (e) {
        if (e instanceof Error) {
          const message = e.message;
          errorToast("获取条目制作人员信息失败", message);
        }
      }
    },
    staleTime: Infinity,
  });

  return { data, isSuccess };
}

import { useErrorToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import { useQueries, useQuery } from "@tanstack/react-query";
import { personScheme, subjectPersonsScheme } from "@/lib/api/person";
import { handleResponse } from "@/lib/api/utils";

export function usePersonData(person_id: number) {
  const errorToast = useErrorToast();

  const { data, isSuccess } = useQuery({
    queryKey: ["person", person_id],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://api.bgm.tv/v0/persons/${person_id}`
        );

        return await handleResponse(response, personScheme);
      } catch (e) {
        if (e instanceof Error) {
          const message = e.message;
          errorToast("获取制作人员信息失败", message);
          return null;
        }
      }
    },
    staleTime: Infinity,
  });

  return { data, isSuccess };
}

export function usePersonsData(personIds: number[], length?: number) {
  const errorToast = useErrorToast();

  return useQueries({
    queries: personIds
      .slice(0, length === undefined ? personIds.length : length)
      .map((person_id) => ({
        queryKey: ["person", person_id],
        queryFn: async () => {
          try {
            const response = await fetch(
              `https://api.bgm.tv/v0/persons/${person_id}`
            );

            return await handleResponse(response, personScheme);
          } catch (e) {
            if (e instanceof Error) {
              const message = e.message;
              errorToast("获取制作人员信息失败", message);
              return null;
            }
          }
        },
        staleTime: Infinity,
      })),
  });
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
        return await handleResponse(response, subjectPersonsScheme);
      } catch (e) {
        if (e instanceof Error) {
          const message = e.message;
          errorToast("获取条目制作人员信息失败", message);
          return null;
        }
      }
    },
    staleTime: Infinity,
  });

  return { data, isSuccess };
}

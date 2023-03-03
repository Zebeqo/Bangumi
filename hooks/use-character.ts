import { useQuery } from "@tanstack/react-query";
import { characterScheme, subjectCharactersScheme } from "@/lib/api/character";
import { useSession } from "next-auth/react";
import { useErrorToast } from "@/hooks/use-toast";
import { handleResponse } from "@/lib/api/utils";

export function useCharacterData(character_id: number) {
  const errorToast = useErrorToast();

  const { data, isSuccess } = useQuery({
    queryKey: ["character", character_id],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://api.bgm.tv/v0/characters/${character_id}`
        );
        return await handleResponse(response, characterScheme);
      } catch (e) {
        if (e instanceof Error) {
          const message = e.message;
          errorToast("获取角色信息失败", message);
        }
      }
    },
    staleTime: Infinity,
  });

  return { data, isSuccess };
}

export function useSubjectCharactersData(subject_id: number) {
  const errorToast = useErrorToast();
  const { data: session } = useSession();

  const { data, isSuccess } = useQuery({
    queryKey: ["characters", subject_id],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://api.bgm.tv/v0/subjects/${subject_id}/characters`,
          {
            headers:
              session === null
                ? {}
                : {
                    Authorization: `Bearer ${session.accessToken}`,
                  },
          }
        );
        return await handleResponse(response, subjectCharactersScheme);
      } catch (e) {
        if (e instanceof Error) {
          const message = e.message;
          errorToast("获取条目角色信息失败", message);
        }
      }
    },
    staleTime: Infinity,
  });

  return { data, isSuccess };
}

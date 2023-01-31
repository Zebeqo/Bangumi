import { useQuery } from "@tanstack/react-query";
import { characterScheme, subjectCharactersScheme } from "@/lib/api/character";
import { errorScheme } from "@/lib/error";
import { useSession } from "next-auth/react";
import { useErrorToast } from "@/hooks/use-toast";

export function useCharacterData(character_id: number) {
  const openErrorToast = useErrorToast();

  const { data, isSuccess } = useQuery({
    queryKey: ["character", character_id],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://api.bgm.tv/v0/characters/${character_id}`
        );
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data = await response.json();
        const characterResult = characterScheme.safeParse(data);
        if (!characterResult.success) {
          const errorResult = errorScheme.safeParse(data);
          if (errorResult.success) {
            throw new Error(JSON.stringify(errorResult.data, null, 2));
          } else {
            throw new Error(
              `FROM ERROR:\n${errorResult.error.message}\n\nFROM CHARACTER:\n${characterResult.error.message}`
            );
          }
        } else {
          return characterResult.data;
        }
      } catch (e) {
        if (e instanceof Error) {
          const message = e.message;
          openErrorToast("获取角色信息失败", message);
        }
      }
    },
    staleTime: Infinity,
  });

  return { data, isSuccess };
}

export function useSubjectCharactersData(subject_id: number) {
  const openErrorToast = useErrorToast();
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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data = await response.json();
        const subjectCharactersResult = subjectCharactersScheme.safeParse(data);
        if (!subjectCharactersResult.success) {
          const errorResult = errorScheme.safeParse(data);
          if (errorResult.success) {
            throw new Error(JSON.stringify(errorResult.data, null, 2));
          } else {
            throw new Error(
              `FROM ERROR:\n${errorResult.error.message}\n\nFROM SUBJECT_CHARACTERS:\n${subjectCharactersResult.error.message}`
            );
          }
        } else {
          return subjectCharactersResult.data;
        }
      } catch (e) {
        if (e instanceof Error) {
          const message = e.message;
          openErrorToast("获取条目角色信息失败", message);
        }
      }
    },
    staleTime: Infinity,
  });

  return { data, isSuccess };
}

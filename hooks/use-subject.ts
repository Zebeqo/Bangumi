import { useQuery } from "@tanstack/react-query";
import { subjectScheme } from "@/lib/subject";
import { useErrorToast } from "@/hooks/use-toast";

export function useSubjectData(id?: number) {
  const openErrorToast = useErrorToast();
  const { data, isSuccess } = useQuery({
    queryKey: ["subject", id],
    queryFn: async () => {
      if (!id) {
        return null;
      }
      try {
        const response = await fetch(`https://api.bgm.tv/v0/subjects/${id}`);
        return subjectScheme.parse(await response.json());
      } catch (e) {
        if (e instanceof Error) {
          const message = e.message;
          openErrorToast("获取条目信息失败", message);
        }
      }
    },
  });
  return { data, isSuccess };
}

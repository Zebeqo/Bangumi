import { useToast } from "@/hooks/useToast";
import { useDialog } from "@/hooks/useDialog";

export function useErrorToast() {
  const openToast = useToast();
  const openDialog = useDialog();

  const openErrorToast = (title: string, description: string) => {
    openToast({
      type: "error",
      title: title,
      action: {
        label: "查看详情",
        onClick: () => {
          openDialog({
            title: "问题详情",
            description: description,
            action: {
              label: "提交 issue",
              onClick: () => {
                return;
              },
            },
          });
        },
      },
    });
  };

  return openErrorToast;
}

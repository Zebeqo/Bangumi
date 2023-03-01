import { useSetAtom } from "jotai";
import { toastAtom } from "@/lib/toast";
import { useDialog } from "@/hooks/use-dialog";

export function useToast() {
  return useSetAtom(toastAtom);
}

export function useErrorToast() {
  const toast = useToast();
  const openDialog = useDialog();

  return (
    title: string,
    description: string,
    action = {
      label: "提交 issue",
      onClick: () => {
        window.open("https://github.com/Zebeqo/Bangumi/issues/new", "_blank");
      },
    }
  ) => {
    toast({
      type: "error",
      title: title,
      action: {
        label: "查看详情",
        onClick: () => {
          openDialog({
            title: "问题详情",
            description: description,
            action: {
              label: action.label,
              onClick: action.onClick,
            },
          });
        },
      },
    });
  };
}

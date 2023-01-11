import { useAtom, useSetAtom } from "jotai/react";
import type { Toast } from "@/lib/toast";
import { isOpenToastAtom, toastAtom } from "@/lib/toast";
import { flushSync } from "react-dom";
import { useDialog } from "@/hooks/use-dialog";

export function useToast() {
  const setToast = useSetAtom(toastAtom);
  const [isOpenToast, setIsOpenToast] = useAtom(isOpenToastAtom);

  const openToast = (toast: Toast) => {
    if (isOpenToast) {
      flushSync(() => {
        setIsOpenToast(false);
      });
      setIsOpenToast(true);
    } else {
      setIsOpenToast(true);
    }

    setToast(toast);
  };

  return openToast;
}

export function useErrorToast() {
  const openToast = useToast();
  const openDialog = useDialog();

  const openErrorToast = (
    title: string,
    description: string,
    action = {
      label: "提交 issue",
      onClick: () => {
        window.open(
          "https://github.com/Zebeqo/bangumi-dashboard/issues/new",
          "_blank"
        );
      },
    }
  ) => {
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
              label: action.label,
              onClick: action.onClick,
            },
          });
        },
      },
    });
  };

  return openErrorToast;
}

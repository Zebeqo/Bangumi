import { useAtom, useSetAtom } from "jotai/react";
import type { Toast } from "@/lib/toast";
import { isOpenToastAtom, toastAtom } from "@/lib/toast";
import { flushSync } from "react-dom";

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

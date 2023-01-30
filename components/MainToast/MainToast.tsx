"use client";

import { useAtom, useAtomValue } from "jotai/react";
import { isOpenToastAtom, toastAtom } from "@/lib/toast";
import {
  Toast,
  ToastAction,
  ToastDescription,
  ToastTitle,
} from "@/ui/primitive/Toast";

export function MainToast() {
  const toast = useAtomValue(toastAtom);
  const [isOpenToast, setIsOpenToast] = useAtom(isOpenToastAtom);

  return (
    toast && (
      <Toast
        toastType={toast.type}
        open={isOpenToast}
        onOpenChange={(open) => {
          if (!open) {
            setIsOpenToast(false);
          }
        }}
      >
        <ToastTitle>{toast.title}</ToastTitle>
        {toast.description && (
          <ToastDescription>{toast.description}</ToastDescription>
        )}
        {toast.action && (
          <ToastAction
            altText={toast.action.label}
            onClick={toast.action.onClick}
          >
            {toast.action.label}
          </ToastAction>
        )}
      </Toast>
    )
  );
}

"use client";

import { useAtomValue } from "jotai";
import { toastAtom } from "@/lib/toast";
import {
  Toast as ToastRoot,
  ToastAction,
  ToastDescription,
  ToastTitle,
} from "@/ui/primitive/Toast";
import { memo, useEffect } from "react";
import { useResetAtom } from "jotai/utils";

export const Toast = memo(function Toast() {
  const resetToast = useResetAtom(toastAtom);
  const toast = useAtomValue(toastAtom);

  useEffect(() => {
    return () => {
      resetToast();
    };
  }, [resetToast]);

  return (
    toast && (
      <ToastRoot toastType={toast.type}>
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
      </ToastRoot>
    )
  );
});

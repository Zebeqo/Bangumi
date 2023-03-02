"use client";

import { useAtomValue } from "jotai";
import { toastAtom } from "@/lib/toast";
import {
  Toast as ToastRoot,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle,
} from "@/ui/primitive/Toast";
import { memo, useRef } from "react";

export const Toast = memo(function Toast() {
  const toast = useAtomValue(toastAtom);
  const ref = useRef(0);
  ref.current = ref.current + 1;

  return (
    toast && (
      <ToastProvider>
        <ToastRoot key={ref.current} toastType={toast.type}>
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
      </ToastProvider>
    )
  );
});

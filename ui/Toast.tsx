"use client";

import * as ToastPrimitive from "@radix-ui/react-toast";
import { useAtom, useAtomValue } from "jotai/react";
import { isOpenToastAtom, toastAtom } from "@/lib/toast";
import { cn } from "@/lib/utils";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";

export function Toast() {
  const toast = useAtomValue(toastAtom);
  const [isOpenToast, setIsOpenToast] = useAtom(isOpenToastAtom);

  return (
    <>
      <ToastPrimitive.Root
        open={isOpenToast}
        onOpenChange={(open) => {
          if (!open) {
            setIsOpenToast(false);
          }
        }}
        className={cn(
          "fixed bottom-8 right-8 z-50 flex w-full max-w-sm items-start justify-between rounded-lg p-4 shadow-lg",
          "bg-neutral-2 outline-none ring-1 ring-neutral-6",
          "radix-state-open:animate-toast-slide-in-right",
          "radix-state-closed:animate-toast-hide",
          "radix-swipe-direction-right:radix-swipe-end:animate-toast-swipe-out-x",
          "radix-swipe-direction-right:translate-x-radix-toast-swipe-move-x",
          "radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]"
        )}
      >
        {/*Toast.Content*/}
        <div className="flex space-x-1">
          {/*Toast.TypeIcon*/}
          {toast?.type === "success" ? (
            <CheckCircleIcon className="h-6 w-6 text-success-9" />
          ) : toast?.type === "error" ? (
            <ExclamationCircleIcon className="h-6 w-6 text-error-9" />
          ) : toast?.type === "info" ? (
            <InformationCircleIcon className="h-6 w-6 text-blue-9" />
          ) : null}
          {/*div*/}
          <div className="flex flex-col space-y-2 px-2 py-0.5">
            {/*Toast.Title*/}
            <ToastPrimitive.Title className="text-sm font-medium text-neutral-12">
              {toast?.title}
            </ToastPrimitive.Title>
            {/*Toast.Description*/}
            {toast?.description && (
              <ToastPrimitive.Description className="text-sm text-neutral-11">
                {toast.description}
              </ToastPrimitive.Description>
            )}
            {/*Toast.Action*/}
            {toast?.action && (
              <ToastPrimitive.Action
                altText={toast.action.label}
                onClick={toast.action.onClick}
                className="inline-flex w-fit text-sm text-accent-11"
              >
                {toast.action.label}
              </ToastPrimitive.Action>
            )}
          </div>
        </div>
        {/*Toast.CloseButton*/}
        <ToastPrimitive.Close>
          <XMarkIcon className="h-5 w-5 text-neutral-11" />
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport />
    </>
  );
}

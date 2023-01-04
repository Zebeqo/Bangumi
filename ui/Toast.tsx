"use client";

import * as ToastPrimitive from "@radix-ui/react-toast";
import { useAtom, useAtomValue } from "jotai/react";
import { isOpenToastAtom, toastAtom } from "@/lib/toast";
import { cn } from "@/lib/utils";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
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
        {/* <div className="flex">
          <div className="flex w-0 flex-1 items-center py-4 pl-5">
            <div className="radix w-full">
              <ToastPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {toast?.title}
              </ToastPrimitive.Title>
              <ToastPrimitive.Description className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                Someone requested your review on{" "}
                <span className="font-medium">repository/branch</span>
              </ToastPrimitive.Description>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col space-y-1 px-3 py-2">
              <div className="flex h-0 flex-1">
                <ToastPrimitive.Action
                  altText="view now"
                  className="flex w-full items-center justify-center rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-purple-600 hover:bg-gray-50 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:text-purple-500 dark:hover:bg-gray-900"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com");
                  }}
                >
                  Review
                </ToastPrimitive.Action>
              </div>
              <div className="flex h-0 flex-1">
                <ToastPrimitive.Close className="flex w-full items-center justify-center rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 dark:text-gray-100 dark:hover:bg-gray-900">
                  Dismiss
                </ToastPrimitive.Close>
              </div>
            </div>
          </div>
        </div> */}
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport />
    </>
  );
}

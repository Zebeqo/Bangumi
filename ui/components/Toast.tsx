"use client";

import * as ToastPrimitive from "@radix-ui/react-toast";
import { forwardRef } from "react";
import type { WithRequired } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { XMarkIcon } from "@heroicons/react/20/solid";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { useResetAtom } from "jotai/utils";
import { toastAtom } from "@/lib/toast";
import { classed } from "@/classed.config";

const ToastProvider = (
  props: React.ComponentProps<typeof ToastPrimitive.ToastProvider>
) => (
  <ToastPrimitive.ToastProvider
    swipeDirection="right"
    duration={3000}
    {...props}
  />
);

interface ToastProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> {
  toastType: "success" | "error" | "info";
}
const Toast = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  WithRequired<ToastProps, "children">
>(({ className, toastType, children, ...props }, ref) => {
  const resetToast = useResetAtom(toastAtom);

  return (
    <>
      <ToastPrimitive.Root
        ref={ref}
        onOpenChange={(open) => {
          if (!open) {
            resetToast();
          }
        }}
        className={cn(
          "fixed bottom-8 right-8 z-50 flex w-full max-w-sm items-start justify-between rounded-lg p-4 shadow-lg",
          "bg-neutral-2 outline-none ring-1 ring-neutral-6",
          "radix-state-open:animate-toast-slide-in-right",
          "radix-state-closed:animate-toast-hide",
          "radix-swipe-direction-right:radix-swipe-end:animate-toast-swipe-out-x",
          "radix-swipe-direction-right:translate-x-radix-toast-swipe-move-x",
          "radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-out",
          className
        )}
        {...props}
      >
        <div className="flex space-x-1">
          {toastType === "success" ? (
            <CheckCircleIcon className="h-6 w-6 text-success-9" />
          ) : toastType === "error" ? (
            <ExclamationCircleIcon className="h-6 w-6 text-error-9" />
          ) : (
            <InformationCircleIcon className="h-6 w-6 text-blue-9" />
          )}
          <div className="flex flex-col space-y-2 px-2 py-0.5">{children}</div>
        </div>
        <ToastClose />
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className="z-50" />
    </>
  );
});
Toast.displayName = ToastPrimitive.Root.displayName;

const ToastClose = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Close>,
  Omit<React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>, "children">
>(({ ...props }, ref) => (
  <ToastPrimitive.Close aria-label="Close" ref={ref} {...props}>
    <XMarkIcon className="h-5 w-5 text-neutral-11" />
  </ToastPrimitive.Close>
));
ToastClose.displayName = ToastPrimitive.Close.displayName;

const ToastTitle = classed(
  ToastPrimitive.Title,
  "text-sm font-medium text-neutral-12"
);

const ToastDescription = classed(
  ToastPrimitive.Description,
  "text-sm text-neutral-11"
);

const ToastAction = classed(
  ToastPrimitive.Action,
  "inline-flex w-fit text-sm text-accent-11"
);

export {
  ToastProvider,
  Toast,
  ToastClose,
  ToastTitle,
  ToastDescription,
  ToastAction,
};

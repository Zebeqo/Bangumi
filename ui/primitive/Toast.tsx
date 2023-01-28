"use client";

import * as ToastPrimitive from "@radix-ui/react-toast";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { XMarkIcon } from "@heroicons/react/20/solid";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

interface ToastProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> {
  toastType: "success" | "error" | "info";
}
const Toast = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  ToastProps
>(({ className, toastType, children, ...props }, ref) => (
  <>
    <ToastPrimitive.Root
      ref={ref}
      className={cn(
        "fixed bottom-8 right-8 z-50 flex w-full max-w-sm items-start justify-between rounded-lg p-4 shadow-lg",
        "bg-neutral-2 outline-none ring-1 ring-neutral-6",
        "radix-state-open:animate-toast-slide-in-right",
        "radix-state-closed:animate-toast-hide",
        "radix-swipe-direction-right:radix-swipe-end:animate-toast-swipe-out-x",
        "radix-swipe-direction-right:translate-x-radix-toast-swipe-move-x",
        "radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]",
        className
      )}
      {...props}
    >
      <div className="flex space-x-1">
        {toastType === "success" ? (
          <CheckCircleIcon className="h-6 w-6 text-success-9" />
        ) : toastType === "error" ? (
          <ExclamationCircleIcon className="h-6 w-6 text-error-9" />
        ) : toastType === "info" ? (
          <InformationCircleIcon className="h-6 w-6 text-blue-9" />
        ) : null}
        <div className="flex flex-col space-y-2 px-2 py-0.5">{children}</div>
      </div>
      <ToastClose />
    </ToastPrimitive.Root>
    <ToastPrimitive.Viewport className="z-50" />
  </>
));
Toast.displayName = ToastPrimitive.Root.displayName;

const ToastClose = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(({ children, ...props }, ref) => (
  <ToastPrimitive.Close aria-label="Close" ref={ref} {...props}>
    {children ?? <XMarkIcon className="h-5 w-5 text-neutral-11" />}
  </ToastPrimitive.Close>
));
ToastClose.displayName = ToastPrimitive.Close.displayName;

const ToastTitle = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    className={cn("text-sm font-medium text-neutral-12", className)}
    ref={ref}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitive.Title.displayName;

const ToastDescription = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    className={cn("text-sm text-neutral-11", className)}
    ref={ref}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitive.Description.displayName;

const ToastAction = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    className={cn("inline-flex w-fit text-sm text-accent-11", className)}
    ref={ref}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitive.Action.displayName;

export { Toast, ToastClose, ToastTitle, ToastDescription, ToastAction };

"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { ReactNode } from "react";
import { forwardRef } from "react";
import type { WithRequired } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/ui/primitive/Button";
import { useInView } from "react-intersection-observer";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;

export type DialogContentProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
>;
const DialogContent = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  WithRequired<DialogContentProps, "children">
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay
      id="panel-overlay"
      className="fixed inset-0 z-40 grid place-items-center overflow-y-auto bg-blackA9 pb-16 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out data-[state=open]:duration-200 data-[state=closed]:duration-200 data-[state=open]:ease-out"
    >
      <DialogPrimitive.Content
        ref={ref}
        onPointerDownOutside={(e) => {
          if (
            e.detail.originalEvent.which === 2 ||
            e.detail.originalEvent.button === 4
          ) {
            e.preventDefault();
          }

          // https://github.com/radix-ui/primitives/issues/1280#issuecomment-1198248523
          const currentTarget = e.currentTarget as HTMLElement;

          if (e.detail.originalEvent.offsetX > currentTarget.clientWidth) {
            e.preventDefault();
          }
        }}
        className={cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-90 data-[state=closed]:zoom-out-90 data-[state=open]:slide-in-from-bottom-0 data-[state=closed]:slide-out-to-bottom-0 data-[state=open]:duration-200 data-[state=closed]:duration-200 data-[state=open]:ease-out",
          "z-40 mt-16 flex w-full max-w-lg flex-col items-center items-stretch rounded-lg bg-neutral-1 pb-6 shadow-lg outline-none",
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Overlay>
  </DialogPrimitive.Portal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogContentHeader = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "-1px",
  });

  return (
    <div
      ref={ref}
      className={cn(
        "sticky top-0 z-50 flex w-full items-center justify-between py-4 px-6",
        className,
        inView ? "" : "border-b border-neutral-6 bg-neutral-1"
      )}
    >
      {children}
      <DialogClose />
    </div>
  );
};
DialogContentHeader.displayName = "DialogContentHeader";

const DialogTitle = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  WithRequired<
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>,
    "children"
  >
>(({ children, className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-bold text-neutral-12", className)}
    {...props}
  >
    {children}
  </DialogPrimitive.Title>
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  WithRequired<
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>,
    "children"
  >
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      "w-full whitespace-pre-wrap break-words px-6 text-neutral-11",
      className
    )}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const DialogClose = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  Omit<
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>,
    "children" | "asChild"
  >
>(({ ...props }, ref) => (
  <DialogPrimitive.Close ref={ref} asChild {...props}>
    <Button
      variant={{
        type: "ghost",
        iconOnly: true,
      }}
    >
      <XMarkIcon className="h-6 w-6" />
    </Button>
  </DialogPrimitive.Close>
));
DialogClose.displayName = DialogPrimitive.Close.displayName;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogContentHeader,
};

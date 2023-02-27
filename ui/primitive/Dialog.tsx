"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import type { WithRequired } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { GhostButton_Icon } from "@/ui/primitive/Button";

const Dialog = DialogPrimitive.Root;

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
      className="fixed inset-0 z-40 grid place-items-center overflow-y-auto bg-blackA9 pb-16 backdrop-blur-sm animate-in data-[state=open]:fade-in"
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
          "animate-in zoom-in-90 duration-300 ease-out data-[state=open]:slide-in-from-bottom-0",
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

const DialogContent_Panel = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogContent>
>(({ children, ...props }, ref) => (
  <DialogContent
    ref={ref}
    className="z-40 mt-16 flex w-[1040.62px] flex-col rounded-lg bg-neutral-1 pt-4 pb-6 shadow-lg outline-none"
    {...props}
  >
    {children}
  </DialogContent>
));
DialogContent_Panel.displayName = DialogPrimitive.Content.displayName;

const DialogContent_Main = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogContent>
>(({ children, ...props }, ref) => (
  <DialogContent
    ref={ref}
    className="mt-16 flex w-full max-w-lg flex-col items-end rounded-lg bg-neutral-1 pb-6 shadow-lg outline-none"
    {...props}
  >
    {children}
  </DialogContent>
));
DialogContent_Main.displayName = DialogPrimitive.Content.displayName;

interface DialogContentHeader_MainProps
  extends React.HTMLAttributes<HTMLDivElement> {
  titleName: string;
}
const DialogContentHeader_Main = forwardRef<
  HTMLDivElement,
  Omit<DialogContentHeader_MainProps, "children">
>(({ titleName, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "sticky top-0 flex w-full items-center justify-between py-4 px-6",
      className
    )}
    {...props}
  >
    <DialogTitle>{titleName}</DialogTitle>
    <DialogClose />
  </div>
));
DialogContentHeader_Main.displayName = "DialogContentHeader_Main";

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
    className={cn("w-full whitespace-pre-wrap px-6 text-neutral-12", className)}
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
    <GhostButton_Icon colorVariant={"neutral"}>
      <XMarkIcon className="h-6 w-6" />
    </GhostButton_Icon>
  </DialogPrimitive.Close>
));
DialogClose.displayName = DialogPrimitive.Close.displayName;

const DialogTrigger = DialogPrimitive.Trigger;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogContent_Panel,
  DialogContent_Main,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogContentHeader_Main,
};

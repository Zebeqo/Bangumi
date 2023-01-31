"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { forwardRef, Fragment } from "react";
import { Transition } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { GhostButton_Icon } from "@/ui/primitive/Button";

const Dialog = DialogPrimitive.Root;

interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  isOpen: boolean;
}
const DialogContent = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ children, isOpen, ...props }, ref) => (
  <DialogPrimitive.Portal forceMount>
    <Transition.Root show={isOpen}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <DialogPrimitive.Overlay
          forceMount
          id="panel-overlay"
          className="fixed inset-0 z-40 grid place-items-center overflow-y-auto bg-blackA-9 pb-16 dark:bg-whiteA-9"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPrimitive.Content
              ref={ref}
              forceMount
              onPointerDownOutside={(e) => {
                if (
                  e.detail.originalEvent.which === 2 ||
                  e.detail.originalEvent.button === 4
                ) {
                  e.preventDefault();
                }

                // https://github.com/radix-ui/primitives/issues/1280#issuecomment-1198248523
                const currentTarget = e.currentTarget as HTMLElement;

                if (
                  e.detail.originalEvent.offsetX > currentTarget.clientWidth
                ) {
                  e.preventDefault();
                }
              }}
              {...props}
            >
              {children}
            </DialogPrimitive.Content>
          </Transition.Child>
        </DialogPrimitive.Overlay>
      </Transition.Child>
    </Transition.Root>
  </DialogPrimitive.Portal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogContent_Panel = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
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
  DialogContentProps
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

const DialogContentHeader_Main = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "sticky top-0 flex w-full items-center justify-between py-4 px-6",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
DialogContentHeader_Main.displayName = "DialogContentHeader_Main";

const DialogTitle = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
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
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ children, className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("w-full whitespace-pre-wrap px-6 text-neutral-12", className)}
    {...props}
  >
    {children}
  </DialogPrimitive.Description>
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const DialogClose = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ children, ...props }, ref) => (
  <DialogPrimitive.Close ref={ref} {...props}>
    {children ?? (
      <GhostButton_Icon colorType={"neutral"}>
        <XMarkIcon className="h-6 w-6" />
      </GhostButton_Icon>
    )}
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

"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useAtom, useAtomValue } from "jotai/react";
import { dialogAtom, openDialogAtom } from "@/lib/dialog";
import { Button } from "@/ui/Button";

export function Dialog() {
  const dialog = useAtomValue(dialogAtom);
  const [openDialog, setOpenDialog] = useAtom(openDialogAtom);
  return (
    <DialogPrimitive.Root
      open={openDialog}
      onOpenChange={(open) => {
        if (!open) {
          setOpenDialog(false);
        }
      }}
    >
      <DialogPrimitive.Portal forceMount>
        <Transition.Root show={openDialog}>
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
              className="fixed inset-0 z-20 bg-black/50"
            />
          </Transition.Child>
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
              forceMount
              className={cn(
                "fixed z-50",
                "flex w-full max-w-lg flex-col items-end space-y-4 rounded-lg p-6 shadow-lg",
                "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
                "bg-neutral-1",
                "outline-none"
              )}
            >
              {/*Dialog.Header*/}
              <div className="flex w-full items-center justify-between">
                {/*Dialog.Title*/}
                <DialogPrimitive.Title className="text-lg font-medium text-neutral-12">
                  {dialog?.title}
                </DialogPrimitive.Title>
                {/*Dialog.CloseButton*/}
                <DialogPrimitive.Close asChild>
                  <Button
                    color={"neutral"}
                    type={"ghost"}
                    icon={<XMarkIcon />}
                  />
                </DialogPrimitive.Close>
              </div>
              {/*Dialog.Description*/}
              <DialogPrimitive.Description className="w-full whitespace-pre-wrap text-sm text-neutral-11">
                {dialog?.description}
              </DialogPrimitive.Description>
              {/*Dialog.Action*/}
              {dialog?.action && (
                <Button
                  color={"accent"}
                  type={"primary"}
                  label={dialog.action.label}
                  onClick={dialog.action.onClick}
                />
              )}{" "}
            </DialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

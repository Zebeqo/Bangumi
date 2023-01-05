"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useAtom, useAtomValue } from "jotai/react";
import { dialogAtom, isOpenDialogAtom } from "@/lib/dialog";
import { Button } from "@/ui/Button";
import { useInView } from "react-intersection-observer";

export function Dialog() {
  const dialog = useAtomValue(dialogAtom);
  const [isOpenDialog, setIsOpenDialog] = useAtom(isOpenDialogAtom);
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "-1px",
  });

  return (
    <DialogPrimitive.Root
      open={isOpenDialog}
      onOpenChange={(open) => {
        if (!open) {
          setIsOpenDialog(false);
        }
      }}
    >
      <DialogPrimitive.Portal forceMount>
        <Transition.Root show={isOpenDialog}>
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
              className="fixed inset-0 z-20 grid place-items-center overflow-y-auto bg-black/50 pb-16"
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
                  forceMount
                  className="mt-16 flex w-full max-w-lg flex-col items-end rounded-lg bg-neutral-1 pb-6 shadow-lg outline-none"
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
                >
                  {/*Dialog.Header*/}
                  <div
                    className={cn(
                      "sticky top-0 flex w-full items-center justify-between py-4 px-6",
                      !inView && "border-b border-neutral-6 bg-neutral-1"
                    )}
                    ref={ref}
                  >
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
                  <DialogPrimitive.Description className="w-full whitespace-pre-wrap px-6 text-sm text-neutral-11">
                    {dialog?.description}
                  </DialogPrimitive.Description>
                  {/*Dialog.Action*/}
                  {dialog?.action && (
                    <Button
                      color={"accent"}
                      type={"primary"}
                      label={dialog.action.label}
                      onClick={dialog.action.onClick}
                      className="mt-4 mr-6"
                    />
                  )}
                </DialogPrimitive.Content>
              </Transition.Child>
            </DialogPrimitive.Overlay>
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

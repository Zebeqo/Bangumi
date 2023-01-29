"use client";

import { useAtom, useAtomValue } from "jotai/react";
import { dialogAtom, isOpenDialogAtom } from "@/lib/dialog";
import { useInView } from "react-intersection-observer";
import {
  Dialog,
  DialogClose,
  DialogContent_Main,
  DialogContentHeader_Main,
  DialogDescription,
  DialogTitle,
} from "@/ui/primitive/Dialog";
import { Button } from "@/ui/Button";

export function MainDialog() {
  const dialog = useAtomValue(dialogAtom);
  const [isOpenDialog, setIsOpenDialog] = useAtom(isOpenDialogAtom);
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "-1px",
  });

  return (
    <Dialog
      open={isOpenDialog}
      onOpenChange={(open) => {
        if (!open) {
          setIsOpenDialog(false);
        }
      }}
    >
      <DialogContent_Main isOpen={isOpenDialog}>
        <DialogContentHeader_Main
          ref={ref}
          className={
            inView ? undefined : "border-b border-neutral-6 bg-neutral-1"
          }
        >
          <DialogTitle>{dialog?.title}</DialogTitle>
          <DialogClose asChild />
        </DialogContentHeader_Main>
        <DialogDescription>{dialog?.description}</DialogDescription>
        {dialog?.action && (
          <Button
            colorType={"accent"}
            type={"primary"}
            label={dialog.action.label}
            onClick={dialog.action.onClick}
            className="mt-4 mr-6"
          />
        )}
      </DialogContent_Main>
    </Dialog>
  );
}

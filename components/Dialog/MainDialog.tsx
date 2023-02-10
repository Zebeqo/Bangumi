"use client";

import { useAtom, useAtomValue } from "jotai";
import { dialogAtom, isOpenDialogAtom } from "@/lib/dialog";
import { useInView } from "react-intersection-observer";
import {
  Dialog,
  DialogContent_Main,
  DialogContentHeader_Main,
  DialogDescription,
} from "@/ui/primitive/Dialog";
import { PrimaryButton } from "@/ui/primitive/Button";

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
          titleName={dialog?.title ?? ""}
        />
        <DialogDescription>{dialog?.description ?? ""}</DialogDescription>
        {dialog?.action && (
          <PrimaryButton
            colorType={"accent"}
            className="mt-4 mr-6"
            onClick={dialog.action.onClick}
          >
            {dialog.action.label}
          </PrimaryButton>
        )}
      </DialogContent_Main>
    </Dialog>
  );
}

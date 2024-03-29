"use client";

import { useAtom, useAtomValue } from "jotai";
import { dialogAtom, isOpenDialogAtom } from "@/lib/dialog";
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogContentHeader,
  DialogDescription,
  DialogTitle,
} from "@/ui/components/Dialog";
import { Button } from "@/ui/components/Button";

export function Dialog() {
  const dialog = useAtomValue(dialogAtom);
  const [isOpenDialog, setIsOpenDialog] = useAtom(isOpenDialogAtom);

  return (
    <DialogRoot
      open={isOpenDialog}
      onOpenChange={(open) => {
        if (!open) {
          setIsOpenDialog(false);
        }
      }}
    >
      <DialogContent>
        <DialogContentHeader>
          <DialogTitle>{dialog?.title ?? ""}</DialogTitle>
        </DialogContentHeader>
        <DialogDescription>{dialog?.description ?? ""}</DialogDescription>
        {dialog?.action && (
          <Button
            variant="secondary"
            color="error"
            className="mt-4 mr-6 self-end"
            onClick={dialog.action.onClick}
          >
            {dialog.action.label}
          </Button>
        )}
      </DialogContent>
    </DialogRoot>
  );
}

import { useSetAtom } from "jotai";
import type { Dialog } from "@/lib/dialog";
import { dialogAtom, isOpenDialogAtom } from "@/lib/dialog";
import { useCallback } from "react";

export function useDialog() {
  const setDialog = useSetAtom(dialogAtom);
  const setIsOpenDialog = useSetAtom(isOpenDialogAtom);

  return useCallback(
    (dialog: Dialog) => {
      setIsOpenDialog(true);
      setDialog(dialog);
    },
    [setDialog, setIsOpenDialog]
  );
}

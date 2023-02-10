import { useSetAtom } from "jotai";
import type { Dialog } from "@/lib/dialog";
import { dialogAtom, isOpenDialogAtom } from "@/lib/dialog";

export function useDialog() {
  const setDialog = useSetAtom(dialogAtom);
  const setIsOpenDialog = useSetAtom(isOpenDialogAtom);

  const openDialog = (dialog: Dialog) => {
    setIsOpenDialog(true);
    setDialog(dialog);
  };

  return openDialog;
}

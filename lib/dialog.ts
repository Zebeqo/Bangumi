import { atom } from "jotai/vanilla";

interface Dialog {
  title: string;
  description?: string;
  action?: Action;
}

interface Action {
  label: string;
  onClick: () => void;
}

export const dialogAtom = atom<Dialog | null>(null);

export const openDialogAtom = atom(false);

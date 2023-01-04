import { atom } from "jotai/vanilla";

export interface Dialog {
  title: string;
  description?: string;
  action?: Action;
}

interface Action {
  label: string;
  onClick: () => void;
}

export const dialogAtom = atom<Dialog | null>(null);

export const isOpenDialogAtom = atom(false);

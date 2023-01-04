import { atom } from "jotai/vanilla";

export interface Toast {
  type: "success" | "error" | "info";
  title: string;
  description?: string;
  action?: Action;
}

interface Action {
  label: string;
  onClick: () => void;
}

export const toastAtom = atom<Toast | null>(null);

export const isOpenToastAtom = atom(false);

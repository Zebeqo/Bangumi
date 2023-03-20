import { atomWithReset } from "jotai/utils";

export interface Toast {
  type: "success" | "error" | "info";
  title: string;
  description?: string;
  action?: ToastAction;
}

export interface ToastAction {
  label: string;
  onClick: () => void;
}

export const toastAtom = atomWithReset<Toast | null>(null);

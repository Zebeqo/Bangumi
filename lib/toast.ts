import { atom } from "jotai";

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

export const toastAtom = atom<Toast | null>(null);

export const isOpenToastAtom = atom(false);

export const createIssueToast = (id: number, description?: string): Toast => {
  return {
    type: "info",
    title: "功能尚未实现！",
    description,
    action: {
      label: "跳转至相关 issue",
      onClick: () => {
        window.open(`https://github.com/Zebeqo/Bangumi/issues/${id}`, "_blank");
      },
    },
  };
};

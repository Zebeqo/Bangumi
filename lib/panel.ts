import { atom } from "jotai/vanilla";

interface Panel {
  type: "info" | "discussion";
  id: number;
}
export const panelAtom = atom<Panel | null>(null);

export const isOpenPanelAtom = atom(false);

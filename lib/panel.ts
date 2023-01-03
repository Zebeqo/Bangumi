import { atom } from "jotai/vanilla";

interface SelectedPanel {
  type: "info" | "discussion";
  id: number;
}
export const selectedPanelAtom = atom<SelectedPanel | null>(null);

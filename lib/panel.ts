import { atom } from "jotai/vanilla";

interface Panel {
  type:
    | "subject"
    | "discussion"
    | "characterList"
    | "episodeList"
    | "personList"
    | "subjectList";
  target_id: number;
}
export const panelAtom = atom<Panel | null>(null);

export const isOpenPanelAtom = atom(false);

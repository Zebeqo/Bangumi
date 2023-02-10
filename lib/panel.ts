import { atom } from "jotai";
import { z } from "zod";

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
export const panelScheme = z.object({
  type: z.union([
    z.literal("subject"),
    z.literal("discussion"),
    z.literal("characterList"),
    z.literal("episodeList"),
    z.literal("personList"),
    z.literal("subjectList"),
  ]),
  target_id: z.number(),
});

export interface PanelHistory {
  history: Panel[];
  index: number;
}
export const panelHistoryAtom = atom<PanelHistory>({
  history: [],
  index: -1,
});

export interface PanelAction {
  type: "back" | "forward" | "push" | "replace";
  value?: Panel;
}

export const panelReducer = (
  state: PanelHistory,
  action: PanelAction
): PanelHistory => {
  switch (action.type) {
    case "back":
      return {
        ...state,
        index: Math.max(state.index - 1, 0),
      };
    case "forward":
      return {
        ...state,
        index: Math.min(state.index + 1, state.history.length - 1),
      };
    case "push":
      return {
        history: [
          ...state.history.slice(0, state.index + 1),
          panelScheme.parse(action.value),
        ],
        index: state.index + 1,
      };
    case "replace":
      return {
        history: [
          ...state.history.slice(0, state.index),
          panelScheme.parse(action.value),
        ],
        index: state.index,
      };
  }
};

export const currentPanelAtom = atom((get) =>
  get(panelHistoryAtom).history.at(get(panelHistoryAtom).index)
);

export const isOpenPanelAtom = atom(false);

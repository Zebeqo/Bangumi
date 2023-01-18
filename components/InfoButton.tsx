"use client";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@/ui/Button";
import { useSetAtom } from "jotai/react";
import { isOpenPanelAtom, panelHistoryAtom, panelReducer } from "@/lib/panel";
import { forwardRef } from "react";
import { useReducerAtom } from "jotai/react/utils";

interface props extends React.HTMLAttributes<HTMLButtonElement> {
  subject_id: number;
}
export const InfoButton = forwardRef<HTMLButtonElement, props>(
  ({ subject_id, ...props }, ref) => {
    const setIsOpenPanel = useSetAtom(isOpenPanelAtom);
    const [, dispatch] = useReducerAtom(panelHistoryAtom, panelReducer);
    return (
      <Button
        colorType="accent"
        type="primary"
        icon={<InformationCircleIcon />}
        ref={ref}
        onClick={() => {
          setIsOpenPanel(true);
          dispatch({
            type: "push",
            value: { type: "subject", target_id: Number(subject_id) },
          });
        }}
        aria-label="open-info-panel"
        {...props}
      />
    );
  }
);

InfoButton.displayName = "InfoButton";

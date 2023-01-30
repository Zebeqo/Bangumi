"use client";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useSetAtom } from "jotai/react";
import { isOpenPanelAtom, panelHistoryAtom, panelReducer } from "@/lib/panel";
import { forwardRef } from "react";
import { useReducerAtom } from "jotai/react/utils";
import { PrimaryButton_Icon } from "@/ui/primitive/Button";

interface InfoButtonProps {
  subject_id: number;
}
export const InfoButton = forwardRef<HTMLButtonElement, InfoButtonProps>(
  ({ subject_id, ...props }, ref) => {
    const setIsOpenPanel = useSetAtom(isOpenPanelAtom);
    const [, dispatch] = useReducerAtom(panelHistoryAtom, panelReducer);
    return (
      <PrimaryButton_Icon
        colorType={"accent"}
        ref={ref}
        onClick={() => {
          setIsOpenPanel(true);
          dispatch({
            type: "push",
            // FIX: subject_id turn out to be string for some reason
            value: { type: "subject", target_id: Number(subject_id) },
          });
        }}
        aria-label="open-info-panel"
        {...props}
      >
        <InformationCircleIcon className="h-6 w-6" />
      </PrimaryButton_Icon>
    );
  }
);

InfoButton.displayName = "InfoButton";

"use client";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { panelHistoryAtom, panelReducer } from "@/lib/panel";
import { forwardRef } from "react";
import { useReducerAtom } from "jotai/utils";
import { Button } from "@/ui/primitive/Button";
import { Tooltip } from "@/ui/primitive/Tooltip";

interface InfoButtonProps {
  className?: string;
  subject_id: number;
}
export const InfoButton = forwardRef<HTMLButtonElement, InfoButtonProps>(
  ({ subject_id, ...props }, ref) => {
    const [, dispatch] = useReducerAtom(panelHistoryAtom, panelReducer);
    return (
      <Tooltip content="显示详情">
        <Button
          ref={ref}
          variant={{ type: "primary", color: "accent", iconOnly: true }}
          onClick={() => {
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
        </Button>
      </Tooltip>
    );
  }
);

InfoButton.displayName = "InfoButton";

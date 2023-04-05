"use client";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { panelHistoryAtom, panelReducer } from "@/lib/panel";
import { forwardRef } from "react";
import { useReducerAtom } from "jotai/utils";
import { Button } from "@/ui/components/Button";
import { Tooltip } from "@/ui/components/Tooltip";
import { Provider } from "jotai";
import { rootStore } from "@/components/Provider/JotaiProvider";

interface InfoButtonProps {
  className?: string;
  subject_id: number;
}
const InfoButton_ = forwardRef<HTMLButtonElement, InfoButtonProps>(
  ({ subject_id, ...props }, ref) => {
    const [, dispatch] = useReducerAtom(panelHistoryAtom, panelReducer);
    return (
      <Tooltip content="显示详情">
        <Button
          ref={ref}
          variant="primary"
          color="accent"
          iconOnly
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
InfoButton_.displayName = "InfoButton";

export const InfoButton = forwardRef<HTMLButtonElement, InfoButtonProps>(
  (props, ref) => (
    <Provider store={rootStore}>
      <InfoButton_ {...props} ref={ref} />
    </Provider>
  )
);
InfoButton.displayName = "InfoButton";

"use client";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { panelHistoryAtom, panelReducer } from "@/lib/panel";
import { forwardRef } from "react";
import { useReducerAtom } from "jotai/utils";
import { Button } from "@/ui/primitive/Button";
import { Tooltip } from "@/ui/primitive/Tooltip";
import { Provider } from "jotai";
import { rootStore } from "@/components/Provider/JotaiProvider";
import { useSession } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";

interface InfoButtonProps {
  className?: string;
  subject_id: number;
}
const InfoButton_ = forwardRef<HTMLButtonElement, InfoButtonProps>(
  ({ subject_id, ...props }, ref) => {
    const [, dispatch] = useReducerAtom(panelHistoryAtom, panelReducer);
    const { data: session } = useSession();
    const toast = useToast();

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    const handleClick =
      session === undefined
        ? () => {
            toast({
              type: "info",
              title:
                "正在等待 Serverless 验证响应。如果长时间未响应，可能由于处于冷启动，请刷新页面。",
            });
          }
        : () => {
            dispatch({
              type: "push",
              // FIX: subject_id turn out to be string for some reason
              value: { type: "subject", target_id: Number(subject_id) },
            });
          };

    return (
      <Tooltip content="显示详情">
        <Button
          ref={ref}
          variant={{ type: "primary", color: "accent", iconOnly: true }}
          onClick={handleClick}
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

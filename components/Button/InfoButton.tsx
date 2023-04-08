"use client";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { panelHistoryAtom, panelReducer } from "@/lib/panel";
import { forwardRef } from "react";
import { useReducerAtom } from "jotai/utils";
import { Button } from "@/ui/components/Button";
import { Tooltip } from "@/ui/components/Tooltip";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";

interface InfoButtonProps {
  className?: string;
  subject_id: number;
}
export const InfoButton = forwardRef<HTMLButtonElement, InfoButtonProps>(
  ({ subject_id, ...props }, ref) => {
    const [, dispatch] = useReducerAtom(panelHistoryAtom, panelReducer);
    const toast = useToast();
    const { data: session } = useSession();

    function handleClick() {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (session === undefined) {
        toast({
          type: "info",
          title: "正在等待与服务器认证...",
        });
        return;
      }

      dispatch({
        type: "push",
        value: { type: "subject", target_id: subject_id },
      });
    }

    return (
      <Tooltip content="显示详情">
        <Button
          ref={ref}
          variant="primary"
          color="accent"
          iconOnly
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
InfoButton.displayName = "InfoButton";

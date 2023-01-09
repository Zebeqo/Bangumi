"use client";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@/ui/Button";
import { useSetAtom } from "jotai/react";
import { isOpenPanelAtom, panelAtom } from "@/lib/panel";
import { showFullInfoAtom } from "@/components/panel/Panel";
import { forwardRef } from "react";

interface props extends React.HTMLAttributes<HTMLButtonElement> {
  subject_id: number;
}
export const InfoButton = forwardRef<HTMLButtonElement, props>(
  ({ subject_id, ...props }, ref) => {
    const setPanel = useSetAtom(panelAtom);
    const setShowFullInfo = useSetAtom(showFullInfoAtom);
    const setIsOpenPanel = useSetAtom(isOpenPanelAtom);
    return (
      <Button
        colorType="accent"
        type="primary"
        icon={<InformationCircleIcon />}
        ref={ref}
        onClick={() => {
          setIsOpenPanel(true);
          setPanel({ subject_id: subject_id, type: "info" });
          setShowFullInfo(false);
        }}
        aria-label="open info panel"
        {...props}
      />
    );
  }
);

InfoButton.displayName = "InfoButton";

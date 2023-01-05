"use client";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@/ui/Button";
import { useSetAtom } from "jotai/react";
import { isOpenPanelAtom, panelAtom } from "@/lib/panel";
import { showFullInfoAtom } from "@/components/panel/Panel";

export function InfoButton({ id }: { id: number }) {
  const setPanel = useSetAtom(panelAtom);
  const setShowFullInfo = useSetAtom(showFullInfoAtom);
  const setIsOpenPanel = useSetAtom(isOpenPanelAtom);
  return (
    <Button
      color="accent"
      type="primary"
      icon={<InformationCircleIcon />}
      onClick={() => {
        setIsOpenPanel(true);
        setPanel({ id, type: "info" });
        setShowFullInfo(false);
      }}
    />
  );
}

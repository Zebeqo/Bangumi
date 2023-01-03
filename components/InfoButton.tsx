"use client";

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@/ui/Button";
import { useSetAtom } from "jotai/react";
import { selectedPanelAtom } from "@/lib/panel";
import { showFullInfoAtom } from "@/components/panel/Panel";

export function InfoButton({ id }: { id: number }) {
  const setSelectedPanel = useSetAtom(selectedPanelAtom);
  const setShowFullInfo = useSetAtom(showFullInfoAtom);
  return (
    <Button
      color="accent"
      type="primary"
      icon={<InformationCircleIcon />}
      onClick={() => {
        setSelectedPanel({ id, type: "info" });
        setShowFullInfo(false);
      }}
    />
  );
}

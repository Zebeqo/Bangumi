"use client";

import { atomWithStorage } from "jotai/utils";
import { Switch } from "@/ui/components/Switch";
import { useAtom } from "jotai";
import { memo, useEffect } from "react";

export const personalViewModeAtom = atomWithStorage("personalViewMode", false);

export const PersonalViewSwitch = memo(() => {
  const [checked, setChecked] = useAtom(personalViewModeAtom);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "p") {
        setChecked(!checked);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [checked, setChecked]);

  return (
    <div className="flex items-center space-x-3">
      <span className="font-medium text-neutral-11">
        个人视角<span className="text-xs font-normal ">（按 p 切换）</span>
      </span>
      <Switch color="accent" checked={checked} onCheckedChange={setChecked} />
    </div>
  );
});
PersonalViewSwitch.displayName = "PersonalViewSwitch";

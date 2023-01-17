"use client";

import { atomWithStorage } from "jotai/vanilla/utils";
import { Switch } from "@/ui/Switch";
import { useAtom } from "jotai/react";
import { useEffect } from "react";

export const personalViewModeAtom = atomWithStorage("personalViewMode", false);

export const PersonalViewSwitch = () => {
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
  function handleChecked(checked: boolean) {
    setChecked(checked);
  }

  console.log("render");
  return <Switch checked={checked} onCheckedChange={handleChecked} />;
};

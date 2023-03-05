"use client";

import { atomWithStorage } from "jotai/utils";
import { Switch } from "@/ui/primitive/Switch";
import { useAtom } from "jotai";
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

  return (
    <Switch
      colorVariant={"accent"}
      checked={checked}
      onCheckedChange={setChecked}
    />
  );
};

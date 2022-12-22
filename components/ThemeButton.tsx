"use client";

import { useAtom } from "jotai/react";
import { atomWithStorage } from "jotai/vanilla/utils";

// Set the string key and the initial value
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

import { Button } from "@/ui/Button";
import { useEffect } from "react";

const darkModeAtom = atomWithStorage("darkMode", false);

export function ThemeButton() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  function handleClick() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Button
      color="neutral"
      type="ghost"
      icon={darkMode ? <SunIcon /> : <MoonIcon />}
      onClick={handleClick}
    />
  );
}

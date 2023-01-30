"use client";

// Set the string key and the initial value
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/ui/LoadingSpinner";
import { GhostButton_Icon } from "@/ui/primitive/Button";

export function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <GhostButton_Icon
        colorType={"neutral"}
        aria-label="Loading Theme"
        className="hover:bg-transparent active:bg-transparent"
      >
        <LoadingSpinner className="h-6 w-6" />
      </GhostButton_Icon>
    );
  }

  return (
    <GhostButton_Icon
      aria-label="Toggle Dark Mode"
      colorType={"neutral"}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </GhostButton_Icon>
  );
}

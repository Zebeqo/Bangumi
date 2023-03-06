"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/ui/icon/24/LoadingSpinner";
import { Button } from "@/ui/primitive/Button";
import { Tooltip } from "@/ui/primitive/Tooltip";

export function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant={{ type: "ghost", iconOnly: true }}
        aria-label="Loading Theme"
        className="hover:bg-transparent active:bg-transparent"
      >
        <LoadingSpinner className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Tooltip content={theme === "dark" ? "明亮模式" : "黑暗模式"}>
      <Button
        variant={{ type: "ghost", iconOnly: true }}
        aria-label="Toggle Dark Mode"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {theme === "dark" ? (
          <SunIcon className="h-6 w-6" />
        ) : (
          <MoonIcon className="h-6 w-6" />
        )}
      </Button>
    </Tooltip>
  );
}

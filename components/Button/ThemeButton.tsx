"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

import { useTheme } from "next-themes";
import { Button } from "@/ui/primitive/Button";
import { Tooltip } from "@/ui/primitive/Tooltip";

export function ThemeButton() {
  const { setTheme } = useTheme();

  return (
    <>
      <span className="hidden dark:inline-block">
        <Tooltip content={"明亮模式"}>
          <Button
            variant={{ type: "ghost", iconOnly: true }}
            aria-label="Toggle light Mode"
            onClick={() => {
              setTheme("light");
            }}
          >
            <SunIcon className="h-6 w-6" />
          </Button>
        </Tooltip>
      </span>
      <span className="inline-block dark:hidden">
        <Tooltip content={"黑暗模式"}>
          <Button
            variant={{ type: "ghost", iconOnly: true }}
            aria-label="Toggle dark Mode"
            onClick={() => {
              setTheme("dark");
            }}
          >
            <MoonIcon className="h-6 w-6" />
          </Button>
        </Tooltip>
      </span>
    </>
  );
}

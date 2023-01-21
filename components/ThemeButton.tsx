"use client";

// Set the string key and the initial value
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

import { Button } from "@/ui/Button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/ui/LoadingSpinner";

export function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        colorType="neutral"
        type="ghost"
        icon={<LoadingSpinner />}
        className="hover:bg-transparent active:bg-transparent"
      />
    );
  }

  return (
    <Button
      colorType="neutral"
      type="ghost"
      icon={theme === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    />
  );
}

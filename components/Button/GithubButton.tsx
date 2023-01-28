"use client";

import { Button } from "@/ui/Button";
import { GithubIcon } from "@/ui/icon/24/GithubIcon";

export function GithubButton() {
  return (
    <Button
      aria-label={"Github"}
      colorType="neutral"
      type="ghost"
      icon={<GithubIcon />}
      onClick={() => window.open("https://github.com/Zebeqo/Bangumi", "_blank")}
    />
  );
}

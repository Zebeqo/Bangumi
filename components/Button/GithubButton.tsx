"use client";

import { GithubIcon } from "@/ui/icon/24/GithubIcon";
import { GhostButton_Icon } from "@/ui/primitive/Button";

export function GithubButton() {
  return (
    <GhostButton_Icon
      aria-label={"Github"}
      colorVariant="neutral"
      onClick={() => window.open("https://github.com/Zebeqo/Bangumi", "_blank")}
    >
      <GithubIcon className="h-6 w-6" />
    </GhostButton_Icon>
  );
}

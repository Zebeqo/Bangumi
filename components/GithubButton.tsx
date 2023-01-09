"use client";

import { Button } from "@/ui/Button";
import { GithubIcon } from "@/ui/icon/24/GithubIcon";

export function GithubButton() {
  return (
    <Button
      colorType="neutral"
      type="ghost"
      icon={<GithubIcon />}
      onClick={() =>
        window.open("https://github.com/Zebeqo/bangumi-dashboard", "_blank")
      }
    />
  );
}

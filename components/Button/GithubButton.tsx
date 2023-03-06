"use client";

import { GithubIcon } from "@/ui/icon/24/GithubIcon";
import { Button } from "@/ui/primitive/Button";

export function GithubButton() {
  return (
    <Button
      variant={{ type: "ghost", iconOnly: true }}
      aria-label={"Github"}
      onClick={() => window.open("https://github.com/Zebeqo/Bangumi", "_blank")}
    >
      <GithubIcon className="h-6 w-6" />
    </Button>
  );
}

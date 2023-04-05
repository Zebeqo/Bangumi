"use client";

import { GithubIcon } from "@/ui/icon/24/GithubIcon";
import { Button } from "@/ui/components/Button";
import { Tooltip } from "@/ui/components/Tooltip";

export function GithubButton() {
  return (
    <Tooltip content="源代码">
      <Button
        variant="ghost"
        iconOnly
        aria-label={"Github"}
        onClick={() =>
          window.open("https://github.com/Zebeqo/Bangumi", "_blank")
        }
      >
        <GithubIcon className="h-6 w-6" />
      </Button>
    </Tooltip>
  );
}

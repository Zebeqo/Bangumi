"use client";

import { GithubIcon } from "@/ui/icon/24/GithubIcon";
import { Button } from "@/ui/primitive/Button";
import { Tooltip } from "@/ui/primitive/Tooltip";

export function GithubButton() {
  return (
    <Tooltip content="源代码">
      <Button
        variant={{ type: "ghost", iconOnly: true }}
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

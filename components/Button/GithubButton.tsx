"use client";

import { GithubIcon } from "@/ui/icon/24/GithubIcon";
import { ClassedButton } from "@/ui/components/Button";
import { Tooltip } from "@/ui/components/Tooltip";

export function GithubButton() {
  return (
    <Tooltip content="源代码">
      <ClassedButton
        as={"a"}
        variant="ghost"
        iconOnly
        aria-label={"Github"}
        href="https://github.com/Zebeqo/Bangumi"
        target="_blank"
      >
        <GithubIcon className="h-6 w-6" />
      </ClassedButton>
    </Tooltip>
  );
}

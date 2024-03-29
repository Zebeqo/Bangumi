"use client";

import { signIn } from "next-auth/react";
import { BangumiRawIcon } from "@/ui/icon/20/BangumiRawIcon";
import { Button } from "@/ui/components/Button";

export function LoginButton() {
  return (
    <Button
      variant="primary"
      color="primary"
      onClick={() => signIn("bangumi", { redirect: false })}
    >
      <BangumiRawIcon className="mr-2 h-5 w-5" />
      使用 Bangumi 登录
    </Button>
  );
}

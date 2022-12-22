"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/ui/Button";
import { BangumiRawIcon } from "@/ui/icon/20/BangumiRawIcon";

export function LoginButton() {
  return (
    <Button
      color="primary"
      type="primary"
      label="使用 Bangumi 登录"
      onClick={() => signIn("bangumi", { redirect: false })}
      icon={<BangumiRawIcon />}
    />
  );
}

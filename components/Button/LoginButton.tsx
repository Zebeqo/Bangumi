"use client";

import { signIn } from "next-auth/react";
import { BangumiRawIcon } from "@/ui/icon/20/BangumiRawIcon";
import { PrimaryButton } from "@/ui/primitive/Button";

export function LoginButton() {
  return (
    <PrimaryButton
      colorType={"primary"}
      onClick={() => signIn("bangumi", { redirect: false })}
    >
      <BangumiRawIcon className="mr-2 h-5 w-5" />
      使用 Bangumi 登录
    </PrimaryButton>
  );
}

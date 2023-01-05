"use client";

import { Button } from "@/ui/Button";
import { useToast } from "@/hooks/use-toast";

export function ToastTestButtonA() {
  const openToast = useToast();
  return (
    <>
      <Button
        color={"accent"}
        type={"secondary"}
        label="success"
        onClick={() => {
          openToast({
            type: "success",
            title: "更新成功！",
            description: "进度已更新至第 8 集。",
            action: {
              label: "跳转至评论页",
              onClick: () => {
                return;
              },
            },
          });
        }}
      />
    </>
  );
}

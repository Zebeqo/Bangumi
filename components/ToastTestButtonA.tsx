"use client";

import { useAtom, useSetAtom } from "jotai/react";
import { openToastAtom, toastAtom } from "@/lib/toast";
import { Button } from "@/ui/Button";
import { flushSync } from "react-dom";

export function ToastTestButtonA() {
  const setToast = useSetAtom(toastAtom);
  const [openToast, setOpenToast] = useAtom(openToastAtom);
  return (
    <>
      <Button
        color={"accent"}
        type={"secondary"}
        label="success"
        onClick={() => {
          if (openToast) {
            flushSync(() => {
              setOpenToast(false);
            });
            setOpenToast(true);
          } else {
            setOpenToast(true);
          }

          setToast({
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

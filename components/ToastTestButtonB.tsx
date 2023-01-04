"use client";

import { useAtom, useSetAtom } from "jotai/react";
import { openToastAtom, toastAtom } from "@/lib/toast";
import { Button } from "@/ui/Button";
import { flushSync } from "react-dom";

export function ToastTestButtonB() {
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
            type: "error",
            title: "获取数据失败！",
            action: {
              label: "查看详情",
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

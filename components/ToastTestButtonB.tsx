"use client";

import { useAtom, useSetAtom } from "jotai/react";
import { openToastAtom, toastAtom } from "@/lib/toast";
import { Button } from "@/ui/Button";
import { flushSync } from "react-dom";
import { dialogAtom, openDialogAtom } from "@/lib/dialog";

export function ToastTestButtonB() {
  const setToast = useSetAtom(toastAtom);
  const [openToast, setOpenToast] = useAtom(openToastAtom);
  const setDialog = useSetAtom(dialogAtom);
  const setOpenDialog = useSetAtom(openDialogAtom);
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
                setOpenDialog(true);
                setDialog({
                  title: "问题详情",
                  description:
                    "ZodError: [\n" +
                    "  {\n" +
                    '    "code": "invalid_type",\n' +
                    '    "expected": "boolean",\n' +
                    '    "received": "undefined",\n' +
                    '    "path": [\n' +
                    '      "privates"\n' +
                    "    ],\n" +
                    '    "message": "Required"\n' +
                    "  }\n" +
                    "]",
                  action: {
                    label: "提交 issue",
                    onClick: () => {
                      return;
                    },
                  },
                });
              },
            },
          });
        }}
      />
    </>
  );
}

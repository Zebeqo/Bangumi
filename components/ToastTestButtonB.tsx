"use client";

import { useSetAtom } from "jotai/react";
import { Button } from "@/ui/Button";
import { dialogAtom, openDialogAtom } from "@/lib/dialog";
import { useToast } from "@/hooks/useToast";

export function ToastTestButtonB() {
  const setDialog = useSetAtom(dialogAtom);
  const setOpenDialog = useSetAtom(openDialogAtom);
  const openToast = useToast();
  return (
    <>
      <Button
        color={"accent"}
        type={"secondary"}
        label="success"
        onClick={() => {
          openToast({
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

"use client";

import { Button } from "@/ui/Button";
import { useToast } from "@/hooks/useToast";
import { useDialog } from "@/hooks/useDialog";

export function ToastTestButtonB() {
  const openToast = useToast();
  const openDialog = useDialog();
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
                openDialog({
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

import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@/ui/Toast";
import { useErrorToast, useToast } from "@/hooks/use-toast";
import { Button } from "@/ui/Button";
import { Dialog } from "@/ui/Dialog";

const meta: Meta<typeof Toast> = {
  title: "Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

const OpenSuccessToastButton = () => {
  const openToast = useToast();
  return (
    <Button
      color={"accent"}
      type={"secondary"}
      label="Success Toast"
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
  );
};

const OpenErrorToastButton = () => {
  const openErrorToast = useErrorToast();
  return (
    <Button
      color={"accent"}
      type={"secondary"}
      label="Error Toast"
      onClick={() => {
        openErrorToast(
          "收藏条目失败",
          "{\n" +
            '    "title": "Not Found",\n' +
            '    "details": {\n' +
            '        "path": "/v0/users/-/collections/:subject_id",\n' +
            '        "method": "PATCH"\n' +
            "    },\n" +
            '    "description": "subject not collected"\n' +
            "}"
        );
      }}
    />
  );
};

export const SuccessToast: Story = {
  render: () => {
    return (
      <>
        <Toast />
        <OpenSuccessToastButton />
      </>
    );
  },
};

export const ErrorToast: Story = {
  render: () => {
    return (
      <>
        <Toast />
        <Dialog />
        <OpenErrorToastButton />
      </>
    );
  },
};

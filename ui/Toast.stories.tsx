import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@/ui/Toast";
import { useErrorToast, useToast } from "@/hooks/use-toast";
import { Button } from "@/ui/Button";
import { createIssueToast } from "@/lib/toast";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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

const OpenIssueToastButton = () => {
  const openToast = useToast();
  return (
    <Button
      color={"accent"}
      type={"secondary"}
      label="Issue Toast"
      onClick={() => {
        openToast(createIssueToast(42, "需要相关 api"));
      }}
    />
  );
};

export const SuccessToast: Story = {
  render: () => {
    return <OpenSuccessToastButton />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText("Success Toast"));
    await expect(canvas.getByText("更新成功！")).toBeInTheDocument();
    await expect(canvas.getByText("进度已更新至第 8 集。")).toBeInTheDocument();
    await expect(canvas.getByText("跳转至评论页")).toBeInTheDocument();
  },
};

export const ErrorToast: Story = {
  render: () => {
    return <OpenErrorToastButton />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText("Error Toast"));
    await expect(canvas.getByText("收藏条目失败")).toBeInTheDocument();
    await expect(canvas.getByText("查看详情")).toBeInTheDocument();
  },
};

export const IssueToast: Story = {
  render: () => {
    return <OpenIssueToastButton />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText("Issue Toast"));
    await expect(canvas.getByText("需要相关 api")).toBeInTheDocument();
    await expect(canvas.getByText("跳转至相关 issue")).toBeInTheDocument();
  },
};

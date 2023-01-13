import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@/components/Toast/Toast";
import { useErrorToast, useToast } from "@/hooks/use-toast";
import { Button } from "@/ui/Button";
import { createIssueToast } from "@/lib/toast";
import {
  fireEvent,
  userEvent,
  waitFor,
  within,
} from "@storybook/testing-library";
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
      colorType={"accent"}
      type={"secondary"}
      label="Success Toast"
      aria-label={"open toast"}
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
      colorType={"accent"}
      type={"secondary"}
      label="Error Toast"
      aria-label={"open toast"}
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
            "}{\n" +
            '    "title": "Not Found",\n' +
            '    "details": {\n' +
            '        "path": "/v0/users/-/collections/:subject_id",\n' +
            '        "method": "PATCH"\n' +
            "    },\n" +
            '    "description": "subject not collected"\n' +
            "}{\n" +
            '    "title": "Not Found",\n' +
            '    "details": {\n' +
            '        "path": "/v0/users/-/collections/:subject_id",\n' +
            '        "method": "PATCH"\n' +
            "    },\n" +
            '    "description": "subject not collected"\n' +
            "}{\n" +
            '    "title": "Not Found",\n' +
            '    "details": {\n' +
            '        "path": "/v0/users/-/collections/:subject_id",\n' +
            '        "method": "PATCH"\n' +
            "    },\n" +
            '    "description": "subject not collected"\n' +
            "}{\n" +
            '    "title": "Not Found",\n' +
            '    "details": {\n' +
            '        "path": "/v0/users/-/collections/:subject_id",\n' +
            '        "method": "PATCH"\n' +
            "    },\n" +
            '    "description": "subject not collected"\n' +
            "}{\n" +
            '    "title": "Not Found",\n' +
            '    "details": {\n' +
            '        "path": "/v0/users/-/collections/:subject_id",\n' +
            '        "method": "PATCH"\n' +
            "    },\n" +
            '    "description": "subject not collected"\n' +
            "}{\n" +
            '    "title": "Not Found",\n' +
            '    "details": {\n' +
            '        "path": "/v0/users/-/collections/:subject_id",\n' +
            '        "method": "PATCH"\n' +
            "    },\n" +
            '    "description": "subject not collected"\n' +
            "}{\n" +
            '    "title": "Not Found",\n' +
            '    "details": {\n' +
            '        "path": "/v0/users/-/collections/:subject_id",\n' +
            '        "method": "PATCH"\n' +
            "    },\n" +
            '    "description": "subject not collected"\n' +
            "}{\n" +
            '    "title": "Not Found",\n' +
            '    "details": {\n' +
            '        "path": "/v0/users/-/collections/:subject_id",\n' +
            '        "method": "PATCH"\n' +
            "    },\n" +
            '    "description": "subject not collected"\n' +
            "}{\n" +
            '    "title": "Not Found",\n' +
            '    "details": {\n' +
            '        "path": "/v0/users/-/collections/:subject_id",\n' +
            '        "method": "PATCH"\n' +
            "    },\n" +
            '    "description": "subject not collected"\n' +
            "}{\n" +
            '    "title": "Not Found",\n' +
            '    "details": {\n' +
            '        "path": "/v0/users/-/collections/:subject_id",\n' +
            '        "method": "PATCH"\n' +
            "    },\n" +
            '    "description": "subject not collected"\n' +
            "}{\n" +
            '    "title": "Not Found",\n' +
            '    "details": {\n' +
            '        "path": "/v0/users/-/collections/:subject_id",\n' +
            '        "method": "PATCH"\n' +
            "    },\n" +
            '    "description": "subject not collected"\n' +
            "}{\n" +
            '    "title": "Not Found",\n' +
            '    "details": {\n' +
            '        "path": "/v0/users/-/collections/:subject_id",\n' +
            '        "method": "PATCH"\n' +
            "    },\n" +
            '    "description": "subject not collected"\n' +
            "}{\n" +
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
      colorType={"accent"}
      type={"secondary"}
      label="Issue Toast"
      aria-label={"open toast"}
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
    await userEvent.click(canvas.getByRole("button", { name: "open toast" }));

    const toast = await canvas.findByRole("status");
    await expect(within(toast).getByText("更新成功！")).toBeVisible();
    await expect(
      within(toast).getByText("进度已更新至第 8 集。")
    ).toBeVisible();
    await expect(within(toast).getByText("跳转至评论页")).toBeVisible();

    fireEvent.click(within(toast).getByRole("button", { name: "Close" }));
    await waitFor(async () => {
      await expect(toast).not.toBeVisible();
    });
  },
};

export const ErrorToast: Story = {
  render: () => {
    return <OpenErrorToastButton />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "open toast" }));

    const toast = await canvas.findByRole("status");
    await expect(within(toast).getByText("收藏条目失败")).toBeVisible();
    await expect(within(toast).getByText("查看详情")).toBeVisible();

    fireEvent.click(within(toast).getByRole("button", { name: "Close" }));
    await waitFor(() => {
      expect(toast).not.toBeVisible();
    });
  },
};

export const IssueToast: Story = {
  render: () => {
    return <OpenIssueToastButton />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "open toast" }));

    const toast = await canvas.findByRole("status");
    await expect(within(toast).getByText("需要相关 api")).toBeVisible();
    await expect(within(toast).getByText("跳转至相关 issue")).toBeVisible();

    fireEvent.click(within(toast).getByRole("button", { name: "Close" }));
    await waitFor(async () => {
      await expect(toast).not.toBeVisible();
    });
  },
};

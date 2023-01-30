import type { Meta, StoryObj } from "@storybook/react";
import { MainToast } from "@/components/Toast/MainToast";
import { useErrorToast, useToast } from "@/hooks/use-toast";
import { createIssueToast } from "@/lib/toast";
import {
  fireEvent,
  userEvent,
  waitFor,
  within,
} from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { SecondaryButton } from "@/ui/primitive/Button";

const meta: Meta<typeof MainToast> = {
  title: "Toast",
  component: MainToast,
};

export default meta;
type Story = StoryObj<typeof MainToast>;

const OpenSuccessToastButton = () => {
  const openToast = useToast();
  return (
    <SecondaryButton
      colorType={"accent"}
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
    >
      Success Toast
    </SecondaryButton>
  );
};

const OpenErrorToastButton = () => {
  const openErrorToast = useErrorToast();
  return (
    <SecondaryButton
      colorType={"accent"}
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
    >
      Error Toast
    </SecondaryButton>
  );
};

const OpenIssueToastButton = () => {
  const openToast = useToast();
  return (
    <SecondaryButton
      colorType={"accent"}
      aria-label={"open toast"}
      onClick={() => {
        openToast(createIssueToast(42, "暂未开放相关 api"));
      }}
    >
      Issue Toast
    </SecondaryButton>
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
    await expect(within(toast).getByText("暂未开放相关 api")).toBeVisible();
    await expect(within(toast).getByText("跳转至相关 issue")).toBeVisible();

    fireEvent.click(within(toast).getByRole("button", { name: "Close" }));
    await waitFor(async () => {
      await expect(toast).not.toBeVisible();
    });
  },
};

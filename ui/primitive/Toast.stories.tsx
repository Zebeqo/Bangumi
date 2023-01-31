import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastAction, ToastDescription, ToastTitle } from "./Toast";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
  title: "Toast",
};

export default meta;

export const Toast_: StoryObj<{
  title: string;
  description: string;
  actionLabel: string;
  toastType: "success" | "error" | "info";
}> = {
  args: {
    title: "更新成功！",
    description: "进度已更新至第 8 集。",
    actionLabel: "跳转至评论页",
    toastType: "success",
  },
  render: ({ title, toastType, description, actionLabel }) => (
    <Toast toastType={toastType} open={true}>
      <ToastTitle>{title}</ToastTitle>
      <ToastDescription>{description}</ToastDescription>
      <ToastAction altText={actionLabel} onClick={action("toast action")}>
        {actionLabel}
      </ToastAction>
    </Toast>
  ),
  argTypes: {
    toastType: {
      control: {
        type: "radio",
      },
      options: ["success", "error", "info"],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toast = await canvas.findByRole("status");
    await expect(within(toast).getByText("更新成功！")).toBeVisible();
    await expect(
      within(toast).getByText("进度已更新至第 8 集。")
    ).toBeVisible();
    await expect(within(toast).getByText("跳转至评论页")).toBeVisible();
  },
};

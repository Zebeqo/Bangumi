import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastAction, ToastDescription, ToastTitle } from "./Toast";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta = {
  title: "Toast",
};

export default meta;

type Story = StoryObj;

export const MainToast_Success: Story = {
  render: () => (
    <Toast toastType="success" defaultOpen>
      <ToastTitle>更新成功！</ToastTitle>
      <ToastDescription>进度已更新至第 8 集。</ToastDescription>
      <ToastAction altText="跳转至评论页">跳转至评论页</ToastAction>
    </Toast>
  ),
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

export const MainToast_Error: Story = {
  render: () => (
    <Toast toastType="error" defaultOpen>
      <ToastTitle>收藏条目失败!</ToastTitle>
      <ToastAction altText="查看详情">查看详情</ToastAction>
    </Toast>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toast = await canvas.findByRole("status");
    await expect(within(toast).getByText("收藏条目失败!")).toBeVisible();
    await expect(within(toast).getByText("查看详情")).toBeVisible();
  },
};

export const MainToast_Info: Story = {
  render: () => (
    <Toast toastType="info" defaultOpen>
      <ToastTitle>功能尚未实现！</ToastTitle>
      <ToastDescription>暂未开放相关 api</ToastDescription>
      <ToastAction altText="查看详情">查看详情</ToastAction>
    </Toast>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toast = await canvas.findByRole("status");
    await expect(within(toast).getByText("功能尚未实现！")).toBeVisible();
    await expect(within(toast).getByText("暂未开放相关 api")).toBeVisible();
    await expect(within(toast).getByText("查看详情")).toBeVisible();
  },
};

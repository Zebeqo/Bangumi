import type { Meta, StoryObj } from "@storybook/react";
import {
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle,
} from "./Toast";
import { userEvent, within } from "@storybook/testing-library";
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
  isOpen: boolean;
  toastType: "success" | "error" | "info";
  onOpenChange: () => void;
  onClickAction: () => void;
}> = {
  args: {
    title: "更新成功！",
    description: "进度已更新至第 8 集。",
    actionLabel: "跳转至评论页",
    isOpen: true,
    toastType: "success",
    onOpenChange: action("trigger close"),
    onClickAction: action("toast action"),
  },
  render: ({
    title,
    toastType,
    description,
    actionLabel,
    isOpen,
    onOpenChange,
    onClickAction,
  }) => (
    <ToastProvider>
      <Toast toastType={toastType} open={isOpen} onOpenChange={onOpenChange}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastAction
          altText={actionLabel}
          onClick={onClickAction}
          aria-label={actionLabel}
        >
          {actionLabel}
        </ToastAction>
      </Toast>
    </ToastProvider>
  ),
  argTypes: {
    toastType: {
      control: {
        type: "radio",
      },
      options: ["success", "error", "info"],
    },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const toast = canvas.getByRole("status");
    await expect(toast).toBeInTheDocument();
    await expect(toast).toHaveTextContent(args.title);
    await expect(toast).toHaveTextContent(args.description);
    await expect(toast).toHaveTextContent(args.actionLabel);

    await new Promise((r) => setTimeout(r, 1));
    await userEvent.click(
      within(toast).getByRole("button", { name: args.actionLabel })
    );
    await expect(args.onOpenChange).toHaveBeenCalledTimes(1);

    await userEvent.click(within(toast).getByRole("button", { name: "Close" }));
    await expect(args.onClickAction).toHaveBeenCalledTimes(1);
  },
};

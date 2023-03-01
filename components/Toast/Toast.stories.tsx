import type { Meta, StoryObj } from "@storybook/react";
import { useToast } from "@/hooks/use-toast";
import { PrimaryButton } from "@/ui/primitive/Button";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta = {
  title: "Toast",
};

export default meta;

export const Toast: StoryObj<{
  title: string;
  description: string;
  actionLabel: string;
  toastType: "success" | "error" | "info";
  onClickAction: () => void;
}> = {
  args: {
    title: "更新成功！",
    description: "进度已更新至第 8 集。",
    actionLabel: "跳转至评论页",
    toastType: "success",
    onClickAction: action("toast action"),
  },
  render: ({ title, toastType, description, actionLabel, onClickAction }) => {
    const toast = useToast();

    return (
      <PrimaryButton
        data-testid="toast"
        onClick={() => {
          toast({
            type: toastType,
            title: title,
            description: description,
            action: {
              label: actionLabel,
              onClick: onClickAction,
            },
          });
        }}
        colorVariant={toastType}
      >
        success toast
      </PrimaryButton>
    );
  },
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
    await userEvent.click(canvas.getByTestId("toast"));

    const toast = canvas.getByRole("status");
    await expect(toast).toBeInTheDocument();
    await expect(toast).toHaveTextContent(args.title);
    await expect(toast).toHaveTextContent(args.description);
    await expect(toast).toHaveTextContent(args.actionLabel);

    await new Promise((r) => setTimeout(r, 200));
    await userEvent.click(
      within(toast).getByRole("button", { name: args.actionLabel })
    );
    await userEvent.click(within(toast).getByRole("button", { name: "Close" }));
  },
};

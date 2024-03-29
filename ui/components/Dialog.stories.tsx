import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogContent,
  DialogContentHeader,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/ui/components/Dialog";
import { Button } from "@/ui/components/Button";
import { action } from "@storybook/addon-actions";
import { screen, userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta = {
  title: "Dialog",
} satisfies Meta;

export default meta;

export const Dialog_: StoryObj<{
  title: string;
  description: string;
}> = {
  args: {
    title: "评论",
    description: "很好看啊!",
  },
  render: ({ title, description }) => {
    return (
      <Dialog onOpenChange={action("trigger close")}>
        <DialogTrigger asChild>
          <Button variant="secondary">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogContentHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogContentHeader>
          <DialogDescription>{description}</DialogDescription>
        </DialogContent>
      </Dialog>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Open Dialog" }));

    const dialog = await screen.findByRole("dialog");
    const dialogContent = within(dialog);
    expect(dialogContent.getByText(args.title));
    expect(dialogContent.getByText(args.description));
  },
};

export const Dialog_Action: StoryObj<{
  title: string;
  description: string;
  actionLabel: string;
  handleAction: () => void;
}> = {
  args: {
    title: "评论",
    description: "很好看啊!",
    actionLabel: "action",
    handleAction: action("action"),
  },
  render: ({ actionLabel, title, description, handleAction }) => {
    return (
      <Dialog onOpenChange={action("trigger close")}>
        <DialogTrigger asChild>
          <Button variant="secondary">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogContentHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogContentHeader>
          <DialogDescription>{description}</DialogDescription>
          <Button
            variant="secondary"
            color="accent"
            onClick={handleAction}
            className="mt-4 mr-6 self-end"
          >
            {actionLabel}
          </Button>
        </DialogContent>
      </Dialog>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Open Dialog" }));

    const actionButton = await screen.findByRole("button", {
      name: args.actionLabel,
    });
    await userEvent.click(actionButton);
    await expect(args.handleAction).toHaveBeenCalledTimes(1);
  },
};

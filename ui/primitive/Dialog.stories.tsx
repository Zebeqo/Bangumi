import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogContent_Panel,
  DialogContent_Main,
  DialogContentHeader_Main,
  DialogDescription,
} from "@/ui/primitive/Dialog";
import { SubjectPanelSkeleton } from "@/components/Skeleton/SubjectPanelSkeleton";
import { SecondaryButton } from "@/ui/primitive/Button";
import { action } from "@storybook/addon-actions";
import { screen, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta = {
  title: "Dialog",
};

export default meta;

export const Panel: StoryObj<{ open: boolean }> = {
  args: {
    open: true,
  },
  render: ({ open }) => {
    return (
      <Dialog open={open} onOpenChange={action("trigger close")}>
        <DialogContent_Panel isOpen={open}>
          <SubjectPanelSkeleton />
        </DialogContent_Panel>
      </Dialog>
    );
  },
};

export const MainDialog: StoryObj<{
  title: string;
  description: string;
  open: boolean;
}> = {
  args: {
    title: "评论",
    description: "很好看啊!",
    open: true,
  },
  render: ({ title, description, open }) => {
    return (
      <Dialog open={true} onOpenChange={action("trigger close")}>
        <DialogContent_Main isOpen={open}>
          <DialogContentHeader_Main titleName={title} />
          <DialogDescription>{description}</DialogDescription>
        </DialogContent_Main>
      </Dialog>
    );
  },
};

export const MainDialog_Action: StoryObj<{
  title: string;
  description: string;
  actionLabel: string;
  handleAction: () => void;
  open: boolean;
}> = {
  args: {
    title: "评论",
    description: "很好看啊!",
    actionLabel: "行动",
    handleAction: action("action"),
    open: true,
  },
  render: ({ actionLabel, title, description, handleAction, open }) => {
    return (
      <Dialog open={open} onOpenChange={action("trigger close")}>
        <DialogContent_Main isOpen={open}>
          <DialogContentHeader_Main titleName={title} />
          <DialogDescription>{description}</DialogDescription>
          <SecondaryButton
            colorVariant={"accent"}
            onClick={handleAction}
            className="mt-4 mr-6"
          >
            {actionLabel}
          </SecondaryButton>
        </DialogContent_Main>
      </Dialog>
    );
  },
  play: async ({ args }) => {
    const actionButton = await screen.findByRole("button", {
      name: args.actionLabel,
    });
    await userEvent.click(actionButton);
    await expect(args.handleAction).toHaveBeenCalledTimes(1);
  },
};

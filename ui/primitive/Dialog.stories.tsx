import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogContent_Panel,
  DialogContent_Main,
  DialogContentHeader_Main,
  DialogDescription,
  DialogTrigger,
} from "@/ui/primitive/Dialog";
import { SubjectPanelSkeleton } from "@/components/Skeleton/SubjectPanelSkeleton";
import { useState } from "react";
import { SecondaryButton } from "@/ui/primitive/Button";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
  title: "Dialog",
};

export default meta;

export const Panel: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <SecondaryButton colorType={"accent"} aria-label={"open panel"}>
            open panel
          </SecondaryButton>
        </DialogTrigger>
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
}> = {
  args: {
    title: "评论",
    description: "很好看啊!",
  },
  render: ({ title, description }) => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <SecondaryButton colorType={"accent"} aria-label={"pop dialog"}>
            pop dialog
          </SecondaryButton>
        </DialogTrigger>
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
}> = {
  args: {
    title: "评论",
    description: "很好看啊!",
    actionLabel: "行动",
    handleAction: action("action"),
  },
  render: ({ actionLabel, title, description, handleAction }) => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <SecondaryButton colorType={"accent"} aria-label={"pop dialog"}>
            pop dialog
          </SecondaryButton>
        </DialogTrigger>
        <DialogContent_Main isOpen={open}>
          <DialogContentHeader_Main titleName={title} />
          <DialogDescription>{description}</DialogDescription>
          <SecondaryButton
            colorType={"accent"}
            onClick={handleAction}
            className="mt-4 mr-6"
          >
            {actionLabel}
          </SecondaryButton>
        </DialogContent_Main>
      </Dialog>
    );
  },
};

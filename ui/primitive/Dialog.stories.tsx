import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogClose,
  DialogContent_Panel,
  DialogContent_Main,
  DialogContentHeader_Main,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/ui/primitive/Dialog";
import { SubjectContentSkeleton } from "@/components/Skeleton/SubjectContentSkeleton";
import { useState } from "react";
import { SecondaryButton } from "@/ui/primitive/Button";

const meta: Meta = {
  title: "Dialog",
};

export default meta;

type Story = StoryObj;

export const Panel: Story = {
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
          <SubjectContentSkeleton />
        </DialogContent_Panel>
      </Dialog>
    );
  },
};

export const MainDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <SecondaryButton colorType={"accent"} aria-label={"pop dialog"}>
            pop dialog
          </SecondaryButton>
        </DialogTrigger>
        <DialogContent_Main isOpen={open}>
          <DialogContentHeader_Main>
            <DialogTitle>评论</DialogTitle>
            <DialogClose asChild />
          </DialogContentHeader_Main>
          <DialogDescription>很好看啊!</DialogDescription>
        </DialogContent_Main>
      </Dialog>
    );
  },
};

export const MainDialog_Action: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <SecondaryButton colorType={"accent"} aria-label={"pop dialog"}>
            pop dialog
          </SecondaryButton>
        </DialogTrigger>
        <DialogContent_Main isOpen={open}>
          <DialogContentHeader_Main>
            <DialogTitle>评论</DialogTitle>
            <DialogClose asChild />
          </DialogContentHeader_Main>
          <DialogDescription>很好看啊!</DialogDescription>
          <SecondaryButton
            colorType={"accent"}
            onClick={() => setOpen(false)}
            className="mt-4 mr-6"
          >
            关闭
          </SecondaryButton>
        </DialogContent_Main>
      </Dialog>
    );
  },
};

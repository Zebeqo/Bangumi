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
import { Button } from "@/ui/Button";

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
          <Button
            colorType={"accent"}
            type={"secondary"}
            label="open panel"
            aria-label={"open panel"}
          />
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
          <Button
            colorType={"accent"}
            type={"secondary"}
            label="pop dialog"
            aria-label={"pop dialog"}
          />
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
          <Button
            colorType={"accent"}
            type={"secondary"}
            label="pop dialog"
            aria-label={"pop dialog"}
          />
        </DialogTrigger>
        <DialogContent_Main isOpen={open}>
          <DialogContentHeader_Main>
            <DialogTitle>评论</DialogTitle>
            <DialogClose asChild />
          </DialogContentHeader_Main>
          <DialogDescription>很好看啊!</DialogDescription>
          <Button
            colorType={"accent"}
            type={"primary"}
            label="关闭"
            onClick={() => setOpen(false)}
            className="mt-4 mr-6"
          />
        </DialogContent_Main>
      </Dialog>
    );
  },
};

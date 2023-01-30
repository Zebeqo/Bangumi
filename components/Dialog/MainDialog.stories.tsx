import type { Meta, StoryObj } from "@storybook/react";
import { MainDialog } from "@/components/Dialog/MainDialog";
import { useDialog } from "@/hooks/use-dialog";
import { SecondaryButton } from "@/ui/primitive/Button";

const meta: Meta<typeof MainDialog> = {
  title: "Dialog",
  component: MainDialog,
};

export default meta;
type Story = StoryObj<typeof MainDialog>;

export const commentDialog: Story = {
  render: () => {
    const openDialog = useDialog();
    return (
      <SecondaryButton
        colorType={"accent"}
        aria-label={"open toast"}
        onClick={() => {
          openDialog({
            title: "评论",
            description: "真好看！",
          });
        }}
      >
        Success Toast
      </SecondaryButton>
    );
  },
};

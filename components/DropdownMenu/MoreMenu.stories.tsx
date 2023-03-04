import type { Meta, StoryObj } from "@storybook/react";
import { MoreMenu } from "@/components/DropdownMenu/MoreMenu";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta = {
  component: MoreMenu,
};

export default meta;
type Story = StoryObj<typeof MoreMenu>;

export const MoreMenu_: Story = {
  args: {
    subject_id: 265,
    hasCollectionData: true,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "more" }));
  },
};

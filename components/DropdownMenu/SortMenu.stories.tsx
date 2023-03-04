import type { Meta, StoryObj } from "@storybook/react";
import { SortMenu } from "@/components/DropdownMenu/SortMenu";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta = {
  component: SortMenu,
};

export default meta;
type Story = StoryObj<typeof SortMenu>;

export const SortMenu_: Story = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "sort-menu" }));
  },
};

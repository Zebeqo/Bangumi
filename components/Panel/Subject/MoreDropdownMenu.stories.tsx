import type { Meta, StoryObj } from "@storybook/react";
import { MoreDropdownMenu as MoreDropdownMenuComponent } from "@/components/Panel/Subject/MoreDropdownMenu";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";
import { userEvent, screen, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof MoreDropdownMenuComponent> = {
  title: "MoreDropdownMenu",
  component: MoreDropdownMenuComponent,
};

export default meta;
type Story = StoryObj<typeof MoreDropdownMenuComponent>;

export const MoreDropdownMenu: Story = {
  args: {
    subject_id: STORYBOOK_SUBJECT_ID,
    hasCollectionData: true,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", { name: "more" });
    await userEvent.click(button);
    const menu = await screen.findByRole("menu");
    const items = within(menu).getAllByRole("menuitem");
    await expect(items.length).toEqual(3);
    for (const item of items) {
      await expect(item).toHaveTextContent(/./);
    }
  },
};

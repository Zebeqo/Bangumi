import type { Meta, StoryObj } from "@storybook/react";
import { SortDropdownMenu as SortDropdownMenuComponent } from "@/components/Panel/InfoPanel/SortDropdownMenu";
import { screen, userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof SortDropdownMenuComponent> = {
  title: "SortDropdownMenu",
  component: SortDropdownMenuComponent,
};

export default meta;
type Story = StoryObj<typeof SortDropdownMenuComponent>;

export const SortDropdownMenu: Story = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", { name: "sort" });
    await userEvent.click(button);
    const menu = await screen.findByRole("menu");
    const items = within(menu).getAllByRole("menuitemradio");
    await expect(items.length).toEqual(5);
    for (const item of items) {
      await expect(item).toHaveTextContent(/./);
    }
  },
};

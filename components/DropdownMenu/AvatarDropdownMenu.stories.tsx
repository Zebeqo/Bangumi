import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { AvatarDropdownMenu as AvatarDropdownMenuComponent } from "@/components/DropdownMenu/AvatarDropdownMenu";
import { userEvent, within, screen } from "@storybook/testing-library";

const meta: Meta<typeof AvatarDropdownMenuComponent> = {
  title: "DropdownMenu/AvatarDropdownMenu",
  component: AvatarDropdownMenuComponent,
};

export default meta;
type Story = StoryObj<typeof AvatarDropdownMenuComponent>;

export const AvatarDropdownMenu: Story = {
  args: {
    imageURL: "https://lain.bgm.tv/pic/user/c/000/67/48/674860.jpg",
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

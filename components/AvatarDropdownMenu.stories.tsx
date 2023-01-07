import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { AvatarDropdownMenu as AvatarDropdownMenuComponent } from "@/components/AvatarDropdownMenu";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta<typeof AvatarDropdownMenuComponent> = {
  title: "AvatarDropdownMenu",
  component: AvatarDropdownMenuComponent,
};

export default meta;
type Story = StoryObj<typeof AvatarDropdownMenuComponent>;

const play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");
  await userEvent.click(button);

  const menuEl = document.querySelector<HTMLElement>(
    "[data-radix-popper-content-wrapper]"
  );
  if (!menuEl) {
    throw new Error("Menu not found");
  }
  const menu = within(menuEl);
  await expect(menu.getByText("登出")).toBeVisible();
};

export const AvatarDropdownMenu: Story = {
  args: {
    imageURL: "https://lain.bgm.tv/pic/user/c/000/67/48/674860.jpg",
  },
  parameters: {
    layout: "centered",
  },
  play,
};

export const AvatarDropdownMenu_Edge: Story = {
  args: {
    imageURL: "https://lain.bgm.tv/pic/user/c/000/67/48/674860.jpg",
  },
  play,
};

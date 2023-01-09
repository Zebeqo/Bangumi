import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { AvatarDropdownMenu as AvatarDropdownMenuComponent } from "@/components/AvatarDropdownMenu";
import { userEvent, within, screen } from "@storybook/testing-library";

const meta: Meta<typeof AvatarDropdownMenuComponent> = {
  title: "AvatarDropdownMenu",
  component: AvatarDropdownMenuComponent,
};

export default meta;
type Story = StoryObj<typeof AvatarDropdownMenuComponent>;

const play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const avatar = canvas.getByAltText("Avatar");
  await userEvent.click(avatar);

  const menu = await screen.findByRole("menu");
  screen.debug(menu);
  await expect(
    within(menu).getByRole("menuitem", { name: "登出" })
  ).toBeVisible();
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

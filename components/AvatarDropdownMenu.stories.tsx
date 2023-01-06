// TODO: radix primitive interactive not working

import type { Meta, StoryObj } from "@storybook/react";
import { AvatarDropdownMenu as AvatarDropdownMenuComponent } from "@/components/AvatarDropdownMenu";

const meta: Meta<typeof AvatarDropdownMenuComponent> = {
  title: "AvatarDropdownMenu",
  component: AvatarDropdownMenuComponent,
};

export default meta;
type Story = StoryObj<typeof AvatarDropdownMenuComponent>;

export const AvatarDropdownMenu: Story = {
  args: {
    imageURL: "https://lain.bgm.tv/pic/user/c/000/67/48/674860.jpg",
  },
  parameters: {
    layout: "centered",
  },
};

export const AvatarDropdownMenu_Edge: Story = {
  args: {
    imageURL: "https://lain.bgm.tv/pic/user/c/000/67/48/674860.jpg",
  },
};

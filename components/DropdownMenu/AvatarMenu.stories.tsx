import type { Meta, StoryObj } from "@storybook/react";
import { AvatarMenu } from "@/components/DropdownMenu/AvatarMenu";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta = {
  component: AvatarMenu,
};

export default meta;
type Story = StoryObj<typeof AvatarMenu>;

export const AvatarMenu_: Story = {
  args: {
    imageURL:
      "https://lain.bgm.tv/pic/user/l/000/76/09/760931.jpg?r=1674400223&hd=1",
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "avatar-menu" }));
  },
};

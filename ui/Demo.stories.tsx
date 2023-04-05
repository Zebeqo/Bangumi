import type { Meta, StoryObj } from "@storybook/react";
import Demo from "@/ui/Demo";

const meta = {
  component: Demo,
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof Demo>;

export const Demo_: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { BoltIcon } from "@heroicons/react/20/solid";
import { BangumiRawIcon } from "@/ui/icon/BangumiRawIcon";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    controls: { exclude: ["icon"] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    label: "Button",
    color: "primary",
    type: "primary",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Button",
    color: "primary",
    type: "primary",
    icon: <BoltIcon />,
  },
};

export const Icon: Story = {
  args: {
    color: "neutral",
    type: "ghost",
    icon: <BoltIcon />,
  },
};

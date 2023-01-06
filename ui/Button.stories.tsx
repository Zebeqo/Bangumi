import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { BoltIcon } from "@heroicons/react/20/solid";
import { BangumiRawIcon } from "@/ui/icon/20/BangumiRawIcon";
import { GithubIcon } from "@/ui/icon/24/GithubIcon";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    controls: { exclude: ["icon"] },
  },
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    label: "Button",
    color: "accent",
    type: "primary",
    icon: <BoltIcon />,
  },
};

export const SecondaryButton: Story = {
  args: {
    label: "Button",
    color: "accent",
    type: "secondary",
    icon: <BoltIcon />,
  },
};

export const OutlineButton: Story = {
  args: {
    label: "Button",
    color: "accent",
    type: "outline",
    icon: <BoltIcon />,
  },
};

export const GhostButton: Story = {
  args: {
    label: "Button",
    color: "accent",
    type: "ghost",
    icon: <BoltIcon />,
  },
};
export const LoginButton: Story = {
  args: {
    label: "使用 Bangumi 登录",
    color: "primary",
    type: "primary",
    icon: <BangumiRawIcon />,
  },
};

export const WithoutIcon: Story = {
  args: {
    label: "Button",
    color: "neutral",
    type: "primary",
  },
};

export const IconButton: Story = {
  args: {
    color: "neutral",
    type: "ghost",
    icon: <BoltIcon />,
  },
  parameters: {
    controls: { exclude: ["icon", "label"] },
  },
};

export const ItemButton: Story = {
  args: {
    color: "neutral",
    label: "Button",
    type: "ghost",
    icon: <BoltIcon />,
    className: "w-full justify-start",
  },
};

export const ItemButtonSelected: Story = {
  args: {
    color: "primary",
    label: "Button",
    type: "selected",
    icon: <BoltIcon />,
    className: "w-full justify-start",
  },
};

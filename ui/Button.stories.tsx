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
  parameters: {
    controls: { exclude: ["icon", "label"] },
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

export const GithubButton: Story = {
  args: {
    color: "neutral",
    type: "ghost",
    icon: <GithubIcon />,
  },
  parameters: {
    controls: { exclude: ["icon", "label"] },
  },
};

export const ThemeButton: Story = {
  args: {
    color: "neutral",
    type: "ghost",
    icon: <MoonIcon />,
  },
  parameters: {
    controls: { exclude: ["icon", "label"] },
  },
};

export const DarkThemeButton: Story = {
  args: {
    color: "neutral",
    type: "ghost",
    icon: <SunIcon />,
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
    width: "full",
  },
};

export const ItemButtonSelected: Story = {
  args: {
    color: "primary",
    label: "Button",
    type: "selected",
    icon: <BoltIcon />,
    width: "full",
  },
};

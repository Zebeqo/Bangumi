import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@/ui/components/Switch";
import type { Color } from "@/lib/color";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta = {
  title: "Switch",
  component: Switch,
  argTypes: {
    color: {
      control: {
        type: "radio",
      },
      options: ["primary", "accent", "neutral"],
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Switch_: Story = {
  args: {
    color: "accent",
    onCheckedChange: action("checked change"),
  },
  render: ({ color, onCheckedChange }) => {
    return <Switch color={color} onCheckedChange={onCheckedChange} />;
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const switchEl = canvas.getByRole("switch");
    await userEvent.click(switchEl);
    await expect(args.onCheckedChange).toHaveBeenCalledTimes(1);
  },
};

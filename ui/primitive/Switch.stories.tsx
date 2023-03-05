import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@/ui/primitive/Switch";
import type { Color } from "@/lib/color";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";
import { colorArray } from "@/lib/color";

const meta: Meta = {
  title: "Switch",
  argTypes: {
    colorVariant: {
      control: {
        type: "radio",
      },
      options: colorArray,
    },
  },
} satisfies Meta;

export default meta;

export const Switch_: StoryObj<{
  colorVariant: Color;
  onCheckedChange: () => void;
}> = {
  args: {
    colorVariant: "accent",
    onCheckedChange: action("checked change"),
  },
  render: ({ colorVariant, onCheckedChange }) => {
    return (
      <Switch colorVariant={colorVariant} onCheckedChange={onCheckedChange} />
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const switchEl = canvas.getByRole("switch");
    await userEvent.click(switchEl);
    await expect(args.onCheckedChange).toHaveBeenCalledTimes(1);
  },
};

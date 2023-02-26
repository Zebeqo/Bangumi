import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@/ui/primitive/Switch";
import type { Color } from "@/ui/color";
import { colorArgTypes } from "@/ui/storybook";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta = {
  title: "Switch",
  argTypes: colorArgTypes,
};

export default meta;

export const Switch_: StoryObj<{
  colorVariant: Color;
  checked: boolean;
  onCheckedChange: () => void;
}> = {
  args: {
    colorVariant: "accent",
    checked: true,
    onCheckedChange: action("checked change"),
  },
  render: ({ colorVariant, checked, onCheckedChange }) => {
    return (
      <Switch
        colorVariant={colorVariant}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const switchEl = canvas.getByRole("switch");
    await userEvent.click(switchEl);
    await expect(args.onCheckedChange).toHaveBeenCalledTimes(1);
  },
};

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
  colorType: Color;
  checked: boolean;
  onCheckedChange: () => void;
}> = {
  args: {
    colorType: "accent",
    checked: true,
    onCheckedChange: action("checked change"),
  },
  render: ({ colorType, checked, onCheckedChange }) => {
    return (
      <Switch
        colorType={colorType}
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

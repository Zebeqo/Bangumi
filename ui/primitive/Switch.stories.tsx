import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@/ui/primitive/Switch";
import { useState } from "react";
import type { Color } from "@/ui/color";
import { colorArgTypes } from "@/lib/storybook";

const meta: Meta = {
  title: "Switch",
  argTypes: colorArgTypes,
};

export default meta;

export const Switch_: StoryObj<{ colorType: Color }> = {
  args: {
    colorType: "accent",
  },
  render: ({ colorType }) => {
    const [checked, setChecked] = useState(false);

    return (
      <Switch
        colorType={colorType}
        checked={checked}
        onCheckedChange={setChecked}
      />
    );
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@/ui/primitive/Switch";
import { useState } from "react";

const meta: Meta = {
  title: "Switch",
};

export default meta;

type Story = StoryObj;

export const personalViewSwitch: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return <Switch checked={checked} onCheckedChange={setChecked} />;
  },
};

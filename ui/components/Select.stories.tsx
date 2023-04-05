import type { Meta, StoryObj } from "@storybook/react";
import { screen, userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { SelectColor } from "@/ui/components/Select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/ui/components/Select";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "Select",
  argTypes: {
    color: {
      control: {
        type: "radio",
      },
      options: ["primary", "accent", "neutral"],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectEl = canvas.getByRole("combobox");

    await userEvent.click(selectEl);
    const listbox = within(screen.getByRole("listbox"));
    const option = await listbox.findAllByRole("option");
    expect(option.length).toBeGreaterThan(1);

    await userEvent.keyboard("{esc}");
  },
} satisfies Meta;

export default meta;

type SelectStory = StoryObj<{
  color: SelectColor;
  defaultValue: string;
  options: { value: string; label: string }[];
}>;

export const Select_: SelectStory = {
  args: {
    color: "accent",
    defaultValue: "do",
    options: [
      { value: "wish", label: "想看" },
      { value: "collect", label: "看过" },
      { value: "do", label: "在看" },
      { value: "on_hold", label: "搁置" },
      { value: "dropped", label: "抛弃" },
    ],
  },
  render: ({ color, defaultValue, options }) => (
    <Select defaultValue={defaultValue} onValueChange={action("value change")}>
      <SelectContent color={color}>
        <SelectGroup>
          {options.map(({ value, label }, index) => (
            <SelectItem color={color} key={`${value}-${index}`} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const Select_Edge: SelectStory = {
  ...Select_,
  parameters: { layout: "padded" },
};

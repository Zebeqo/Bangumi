import type { Meta, StoryObj } from "@storybook/react";
import { screen, userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { SelectColor } from "@/ui/primitive/Select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/ui/primitive/Select";
import { collectionTypeMap } from "@/lib/map/collectionTypeMap";
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
  options: string[];
}>;

export const Select_: SelectStory = {
  args: {
    color: "accent",
    defaultValue: "在看",
    options: Object.values(collectionTypeMap).map((value) => value.name_cn),
  },
  render: ({ color, defaultValue, options }) => (
    <Select defaultValue={defaultValue} onValueChange={action("value change")}>
      <SelectContent
        variant={{
          color: color,
        }}
      >
        <SelectGroup>
          {options.map((value, index) => (
            <SelectItem
              variant={{
                color: color,
              }}
              key={`${value}-${index}`}
              value={value}
            >
              {value}
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

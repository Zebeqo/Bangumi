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
    colorVariant: {
      control: {
        type: "radio",
      },
      options: ["primary", "accent", "neutral"],
    },
  },
} satisfies Meta;

export default meta;

export const Select_: StoryObj<{
  colorVariant: SelectColor;
  defaultValue: string;
  options: string[];
}> = {
  args: {
    colorVariant: "accent",
    defaultValue: "想看",
    options: Object.values(collectionTypeMap).map((value) => value.name_cn),
  },
  render: ({ colorVariant, defaultValue, options }) => (
    <Select defaultValue={defaultValue} onValueChange={action("value change")}>
      <SelectContent colorVariant={colorVariant}>
        <SelectGroup>
          {options.map((value, index) => (
            <SelectItem
              colorVariant={colorVariant}
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectEl = canvas.getByRole("combobox");

    await userEvent.click(selectEl);
    const listbox = within(screen.getByRole("listbox"));
    const option = await listbox.findAllByRole("option");
    expect(option.length).toBeGreaterThan(1);

    await userEvent.keyboard("{esc}");
  },
};

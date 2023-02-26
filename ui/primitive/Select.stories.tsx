import type { Meta, StoryObj } from "@storybook/react";
import { screen, userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { SelectColor } from "@/ui/primitive/Select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectOptionsContent,
} from "@/ui/primitive/Select";
import { ratingMap } from "@/lib/map/ratingMap";
import { StarIcon } from "@heroicons/react/20/solid";
import { collectionTypeMap } from "@/lib/map/collectionTypeMap";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
  title: "Select",
  argTypes: {
    colorVariant: {
      control: {
        type: "radio",
      },
      options: ["primary", "accent", "neutral"],
    },
  },
};

export default meta;

const play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const selectEl = canvas.getByRole("combobox");

  await userEvent.click(selectEl);
  const listbox = within(screen.getByRole("listbox"));
  const option = await listbox.findAllByRole("option");
  expect(option.length).toBeGreaterThan(1);

  await userEvent.keyboard("{esc}");
};

export const RatingSelect: StoryObj<{
  colorVariant: SelectColor;
  defaultValue: string;
}> = {
  args: {
    colorVariant: "accent",
    defaultValue: "(6) 还行",
  },
  render: ({ colorVariant, defaultValue }) => (
    <Select defaultValue={defaultValue} onValueChange={action("value change")}>
      <SelectContent colorVariant={colorVariant}>
        <SelectGroup>
          {Object.values(ratingMap)
            .map((value) => value.name_cn)
            .map((value, index) => (
              <SelectItem colorVariant={colorVariant} value={value} key={index}>
                <span className="flex items-center space-x-1">
                  <StarIcon className="h-5 w-5" /> <span>{value}</span>
                </span>
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  play,
  argTypes: {
    defaultValue: {
      control: {
        type: "radio",
      },
      options: Object.values(ratingMap).map((value) => value.name_cn),
    },
  },
};

export const CollectionTypeSelect: StoryObj<{
  colorVariant: SelectColor;
  defaultValue: string;
}> = {
  args: {
    colorVariant: "accent",
    defaultValue: "想看",
  },
  render: ({ colorVariant, defaultValue }) => (
    <Select defaultValue={defaultValue} onValueChange={action("value change")}>
      <SelectOptionsContent
        colorVariant={colorVariant}
        options={Object.values(collectionTypeMap).map((value) => value.name_cn)}
      />
    </Select>
  ),
  play,
  argTypes: {
    defaultValue: {
      control: {
        type: "radio",
      },
      options: Object.values(collectionTypeMap).map((value) => value.name_cn),
    },
  },
};

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
    colorType: {
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
  colorType: SelectColor;
  defaultValue: string;
}> = {
  args: {
    colorType: "accent",
    defaultValue: "(6) 还行",
  },
  render: ({ colorType, defaultValue }) => (
    <Select defaultValue={defaultValue} onValueChange={action("value change")}>
      <SelectContent colorType={colorType}>
        <SelectGroup>
          {Object.values(ratingMap)
            .map((value) => value.name_cn)
            .map((value, index) => (
              <SelectItem colorType={colorType} value={value} key={index}>
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
  colorType: SelectColor;
  defaultValue: string;
}> = {
  args: {
    colorType: "accent",
    defaultValue: "想看",
  },
  render: ({ colorType, defaultValue }) => (
    <Select defaultValue={defaultValue} onValueChange={action("value change")}>
      <SelectOptionsContent
        colorType={colorType}
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

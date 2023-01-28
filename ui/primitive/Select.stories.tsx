import type { Meta, StoryObj } from "@storybook/react";
import { screen, userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
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

const meta: Meta = {
  title: "Select",
};

export default meta;

type Story = StoryObj;

const play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const selectEl = canvas.getByRole("combobox");

  await userEvent.click(selectEl);
  const listbox = within(screen.getByRole("listbox"));
  const option = await listbox.findAllByRole("option");
  expect(option.length).toBeGreaterThan(1);

  await userEvent.keyboard("{esc}");
};

export const RatingSelect: Story = {
  render: () => (
    <Select defaultValue="(6) 还行">
      <SelectContent>
        <SelectGroup>
          {Object.values(ratingMap)
            .map((value) => value.name_cn)
            .map((value, index) => (
              <SelectItem value={value} key={index}>
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
};

export const CollectionTypeSelect: Story = {
  render: () => (
    <Select defaultValue="想看">
      <SelectOptionsContent
        options={Object.values(collectionTypeMap).map((value) => value.name_cn)}
      />
    </Select>
  ),
  play,
};

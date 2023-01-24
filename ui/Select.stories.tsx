import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";
import { ratingMap } from "@/lib/map/ratingMap";
import { collectionTypeMap } from "@/lib/map/collectionTypeMap";
import { screen, userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { TextWrapper } from "@/components/Panel/Subject/RatingSelect";

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

const play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const selectEl = canvas.getByRole("combobox");

  await userEvent.click(selectEl);
  const listbox = within(screen.getByRole("listbox"));
  const option = await listbox.findAllByRole("option");
  expect(option.length).toBeGreaterThan(1);

  await userEvent.keyboard("{esc}");
};

export const CollectionTypeSelect: Story = {
  args: {
    color: "accent",
    selectOptions: Object.values(collectionTypeMap).map(
      (value) => value.name_cn
    ),
    defaultValue: "看过",
  },
  play,
};

export const CollectionTypeSelect_Edge: Story = {
  args: {
    color: "accent",
    selectOptions: Object.values(collectionTypeMap).map(
      (value) => value.name_cn
    ),
    defaultValue: "看过",
  },
  play,
};

export const RatingSelect: Story = {
  args: {
    color: "accent",
    selectOptions: Object.values(ratingMap).map((value) => value.name_cn),
    defaultValue: "(6) 还行",
    textWrapper: <TextWrapper />,
  },
  play,
};

export const RatingSelect_Edge: Story = {
  args: {
    color: "accent",
    selectOptions: Object.values(ratingMap).map((value) => value.name_cn),
    defaultValue: "(6) 还行",
    textWrapper: <TextWrapper />,
  },
  play,
};

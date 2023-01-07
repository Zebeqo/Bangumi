import type { Meta, StoryObj } from "@storybook/react";
import { CollectionTypeSelect as CollectionTypeSelectComponent } from "@/components/CollectionTypeSelect";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof CollectionTypeSelectComponent> = {
  title: "CollectionTypeSelect",
  component: CollectionTypeSelectComponent,
  parameters: {
    controls: { exclude: ["collection_type"] },
  },
};

export default meta;
type Story = StoryObj<typeof CollectionTypeSelectComponent>;

const play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const selectEl = canvas.getByRole("combobox");
  const select = within(selectEl);

  await expect(select.getByText("看过")).toBeVisible();

  await userEvent.click(selectEl);
  const listbox = within(canvas.getByRole("listbox"));
  await expect(listbox.getByText("在看")).toBeVisible();

  await userEvent.dblClick(listbox.getByRole("option", { name: "在看" }));

  await expect(select.getByText("在看")).toBeVisible();
};

export const CollectionTypeSelect: Story = {
  args: {
    collection_type: 2,
    color: "accent",
  },
  parameters: {
    layout: "centered",
  },
  play,
};

export const CollectionTypeSelect_Edge: Story = {
  args: {
    collection_type: 2,
    color: "accent",
  },
  play,
};

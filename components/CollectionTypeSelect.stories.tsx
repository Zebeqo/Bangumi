import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { CollectionTypeSelect as CollectionTypeSelectComponent } from "@/components/CollectionTypeSelect";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";
import { userEvent, within, screen } from "@storybook/testing-library";
import { reactQueryDevtoolsDecorators } from "@/lib/storybook";

const meta: Meta<typeof CollectionTypeSelectComponent> = {
  title: "CollectionTypeSelect",
  component: CollectionTypeSelectComponent,
  ...reactQueryDevtoolsDecorators(),
};

export default meta;
type Story = StoryObj<typeof CollectionTypeSelectComponent>;

export const CollectionTypeSelect: Story = {
  args: {
    subject_id: STORYBOOK_SUBJECT_ID,
  },
  parameters: {
    layout: "centered",
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const selectEl = await canvas.findByRole(
      "combobox",
      { name: "Select" },
      { timeout: 5000 }
    );
    // expect selectEl have one or more character
    await expect(selectEl).toHaveTextContent(/./);

    await userEvent.click(selectEl);
    const listbox = within(screen.getByRole("listbox"));
    const option = await listbox.findAllByRole("option");
    await expect(option.length).toEqual(5);

    await userEvent.keyboard("{esc}");
  },
};

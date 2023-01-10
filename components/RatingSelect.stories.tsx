import type { Meta, StoryObj } from "@storybook/react";
import { RatingSelect as RatingSelectComponent } from "@/components/RatingSelect";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";
import { screen, userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { reactQueryDevtoolsDecorator } from "@/lib/storybook";

const meta: Meta<typeof RatingSelectComponent> = {
  title: "RatingSelect",
  component: RatingSelectComponent,
  decorators: [reactQueryDevtoolsDecorator],
};

export default meta;
type Story = StoryObj<typeof RatingSelectComponent>;

export const RatingSelect: Story = {
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
    await expect(option.length).toEqual(11);

    await userEvent.keyboard("{esc}");
  },
};

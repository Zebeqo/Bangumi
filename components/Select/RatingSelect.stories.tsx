import type { Meta, StoryObj } from "@storybook/react";
import { RatingSelect as RatingSelectComponent } from "@/components/Select/RatingSelect";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";
import { screen, userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { reactQueryDevtoolsDecorator } from "@/lib/storybook";

const meta: Meta<typeof RatingSelectComponent> = {
  title: "Select/RatingSelect",
  component: RatingSelectComponent,
  decorators: [reactQueryDevtoolsDecorator],
};

export default meta;
type Story = StoryObj<typeof RatingSelectComponent>;

export const RatingSelect: Story = {
  args: {
    subject_id: STORYBOOK_SUBJECT_ID,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await waitFor(
      async () => {
        const selectEl = await canvas.getByRole("combobox");

        await expect(selectEl).toHaveTextContent(/./);
        await userEvent.click(selectEl);
        const listbox = within(screen.getByRole("listbox"));
        const options = await listbox.findAllByRole("option");
        await expect(options.length).toEqual(11);
        for (const option of options) {
          await expect(option).toHaveTextContent(/./);
        }
      },
      { timeout: 5000, interval: 1000 }
    );

    await userEvent.keyboard("{esc}");
  },
};
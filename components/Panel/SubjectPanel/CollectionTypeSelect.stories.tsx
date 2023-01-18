import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { CollectionTypeSelect as CollectionTypeSelectComponent } from "@/components/Panel/SubjectPanel/CollectionTypeSelect";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";
import { userEvent, within, screen, waitFor } from "@storybook/testing-library";
import { reactQueryDevtoolsDecorator } from "@/lib/storybook";

const meta: Meta<typeof CollectionTypeSelectComponent> = {
  title: "CollectionTypeSelect",
  component: CollectionTypeSelectComponent,
  decorators: [reactQueryDevtoolsDecorator],
};

export default meta;
type Story = StoryObj<typeof CollectionTypeSelectComponent>;

export const CollectionTypeSelect: Story = {
  args: {
    subject_id: STORYBOOK_SUBJECT_ID,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(
      async () => {
        const selectEl = await canvas.getByRole("combobox", { name: "Select" });

        await expect(selectEl).toHaveTextContent(/./);
        await userEvent.click(selectEl);
        const listbox = within(screen.getByRole("listbox"));
        const options = await listbox.findAllByRole("option");
        await expect(options.length).toEqual(5);
        for (const option of options) {
          await expect(option).toHaveTextContent(/./);
        }
      },
      { timeout: 5000, interval: 1000 }
    );

    await userEvent.keyboard("{esc}");
  },
};

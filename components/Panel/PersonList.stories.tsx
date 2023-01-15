import type { Meta, StoryObj } from "@storybook/react";

import { PersonList as PersonListComponent } from "@/components/Panel/PersonList";
import { reactQueryDevtoolsDecorator } from "@/lib/storybook";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";
import { waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof PersonListComponent> = {
  title: "PersonList",
  component: PersonListComponent,
  decorators: [reactQueryDevtoolsDecorator],
};

export default meta;
type Story = StoryObj<typeof PersonListComponent>;

export const PersonList: Story = {
  args: {
    subject_id: STORYBOOK_SUBJECT_ID,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(
      async () => {
        const nameEl = canvas.getAllByTestId("person-name");
        await expect(nameEl.length).toEqual(5);
        for (const el of nameEl) {
          await expect(el).toHaveTextContent(/./);
        }
      },
      { timeout: 5000, interval: 1000 }
    );
  },
};

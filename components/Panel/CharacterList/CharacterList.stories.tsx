import type { Meta, StoryObj } from "@storybook/react";

import { CharacterList as CharacterListComponent } from "@/components/Panel/CharacterList/CharacterList";
import { reactQueryDevtoolsDecorator } from "@/lib/storybook";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";
import { waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof CharacterListComponent> = {
  title: "CharacterList",
  component: CharacterListComponent,
  decorators: [reactQueryDevtoolsDecorator],
};

export default meta;
type Story = StoryObj<typeof CharacterListComponent>;

export const CharacterList: Story = {
  args: {
    subject_id: STORYBOOK_SUBJECT_ID,
    length: 10,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(
      async () => {
        const nameEl = canvas.getAllByTestId("character-name");
        await expect(nameEl.length).toEqual(10);
        for (const el of nameEl) {
          await expect(el).toHaveTextContent(/./);
        }
      },
      { timeout: 5000, interval: 1000 }
    );
  },
};

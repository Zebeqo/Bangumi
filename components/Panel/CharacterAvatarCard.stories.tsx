import type { Meta, StoryObj } from "@storybook/react";

import { CharacterAvatarCard as CharacterAvatarCardComponent } from "@/components/Panel/CharacterAvatarCard";
import { reactQueryDevtoolsDecorator } from "@/lib/storybook";
import { waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof CharacterAvatarCardComponent> = {
  title: "CharacterAvatarCard",
  component: CharacterAvatarCardComponent,
  decorators: [reactQueryDevtoolsDecorator],
};

export default meta;
type Story = StoryObj<typeof CharacterAvatarCardComponent>;

export const CharacterAvatarCard: Story = {
  args: {
    character_id: 77,
    actor_names: ["山寺宏一", "Steven Blum"],
    character_relation: "主角",
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(
      async () => {
        const nameEl = canvas.getByTestId("character-name");
        await expect(nameEl).toHaveTextContent(/./);
      },
      { timeout: 5000, interval: 1000 }
    );
  },
};

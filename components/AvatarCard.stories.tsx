import type { Meta, StoryObj } from "@storybook/react";

import { AvatarCard as AvatarCardComponent } from "@/components/AvatarCard";
import { reactQueryDevtoolsDecorator } from "@/lib/storybook";

const meta: Meta<typeof AvatarCardComponent> = {
  title: "AvatarCard",
  component: AvatarCardComponent,
  decorators: [reactQueryDevtoolsDecorator],
};

export default meta;
type Story = StoryObj<typeof AvatarCardComponent>;

export const AvatarCard: Story = {
  args: {
    character_id: 77,
    actor_names: ["山寺宏一", "Steven Blum"],
    character_relation: "主角",
  },
  parameters: {
    layout: "centered",
  },
};

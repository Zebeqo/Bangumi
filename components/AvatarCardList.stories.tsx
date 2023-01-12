import type { Meta, StoryObj } from "@storybook/react";

import { AvatarCardList as AvatarCardListComponent } from "@/components/AvatarCardList";
import { reactQueryDevtoolsDecorator } from "@/lib/storybook";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";

const meta: Meta<typeof AvatarCardListComponent> = {
  title: "AvatarCardList",
  component: AvatarCardListComponent,
  decorators: [reactQueryDevtoolsDecorator],
};

export default meta;
type Story = StoryObj<typeof AvatarCardListComponent>;

export const AvatarCardList: Story = {
  args: {
    subject_id: STORYBOOK_SUBJECT_ID,
  },
  parameters: {
    layout: "centered",
  },
};

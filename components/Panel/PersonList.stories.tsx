import type { Meta, StoryObj } from "@storybook/react";

import { PersonList as PersonListComponent } from "@/components/Panel/PersonList";
import { reactQueryDevtoolsDecorator } from "@/lib/storybook";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";

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
  parameters: {
    layout: "centered",
  },
};

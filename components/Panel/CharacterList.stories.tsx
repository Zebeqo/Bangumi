import type { Meta, StoryObj } from "@storybook/react";

import { CharacterList as CharacterListComponent } from "@/components/Panel/CharacterList";
import { reactQueryDevtoolsDecorator } from "@/lib/storybook";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";

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
  },
  parameters: {
    layout: "centered",
  },
};

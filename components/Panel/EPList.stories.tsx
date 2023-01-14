import type { Meta, StoryObj } from "@storybook/react";

import { EPList as EPListComponent } from "@/components/Panel/EPList";
import { reactQueryDevtoolsDecorator } from "@/lib/storybook";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";

const meta: Meta<typeof EPListComponent> = {
  title: "EPList",
  component: EPListComponent,
  decorators: [reactQueryDevtoolsDecorator],
};

export default meta;
type Story = StoryObj<typeof EPListComponent>;

export const EPList: Story = {
  args: {
    subject_id: STORYBOOK_SUBJECT_ID,
    length: 6,
  },
  parameters: {
    layout: "centered",
  },
};

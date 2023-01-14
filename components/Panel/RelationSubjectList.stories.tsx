import type { Meta, StoryObj } from "@storybook/react";

import { RelationSubjectList as RelationSubjectListComponent } from "@/components/Panel/RelationSubjectList";
import { reactQueryDevtoolsDecorator } from "@/lib/storybook";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";

const meta: Meta<typeof RelationSubjectListComponent> = {
  title: "RelationSubjectList",
  component: RelationSubjectListComponent,
  decorators: [reactQueryDevtoolsDecorator],
};

export default meta;
type Story = StoryObj<typeof RelationSubjectListComponent>;

export const RelationSubjectList: Story = {
  args: {
    subject_id: STORYBOOK_SUBJECT_ID,
  },
  parameters: {
    layout: "centered",
  },
};

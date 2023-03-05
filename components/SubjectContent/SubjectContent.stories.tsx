import type { Meta, StoryObj } from "@storybook/react";
import { SubjectContent } from "@/components/SubjectContent/SubjectContent";

const meta = {
  component: SubjectContent,
} satisfies Meta<typeof SubjectContent>;

export default meta;
type Story = StoryObj<typeof SubjectContent>;

export const SubjectContent_: Story = {
  args: {
    subject_id: 265,
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { SubjectContentSkeleton as SubjectContentSkeletonComponent } from "@/components/SubjectContentSkeleton";

const meta: Meta<typeof SubjectContentSkeletonComponent> = {
  title: "SubjectContentSkeleton",
  component: SubjectContentSkeletonComponent,
};

export default meta;
type Story = StoryObj<typeof SubjectContentSkeletonComponent>;

export const SubjectContentSkeleton: Story = {};

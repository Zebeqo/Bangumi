import type { Meta, StoryObj } from "@storybook/react";

import { SubjectPanelSkeleton as SubjectContentSkeletonComponent } from "@/components/Skeleton/SubjectPanelSkeleton";

const meta: Meta<typeof SubjectContentSkeletonComponent> = {
  title: "Skeleton/SubjectPanelSkeleton",
  component: SubjectContentSkeletonComponent,
};

export default meta;
type Story = StoryObj<typeof SubjectContentSkeletonComponent>;

export const SubjectContentSkeleton: Story = {};

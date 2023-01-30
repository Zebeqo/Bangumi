import type { Meta, StoryObj } from "@storybook/react";

import { RelationSubjectSkeleton as RelationSubjectSkeletonComponent } from "@/components/Skeleton/RelationSubjectSkeleton";

const meta: Meta<typeof RelationSubjectSkeletonComponent> = {
  title: "Skeleton/RelationSubjectSkeleton",
  component: RelationSubjectSkeletonComponent,
};

export default meta;
type Story = StoryObj<typeof RelationSubjectSkeletonComponent>;

export const RelationSubjectSkeleton: Story = {};

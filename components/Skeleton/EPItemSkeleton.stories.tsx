import type { Meta, StoryObj } from "@storybook/react";

import { EPItemSkeleton as EPItemSkeletonComponent } from "@/components/Skeleton/EPItemSkeleton";

const meta: Meta<typeof EPItemSkeletonComponent> = {
  title: "Skeleton/EPItemSkeleton",
  component: EPItemSkeletonComponent,
};

export default meta;
type Story = StoryObj<typeof EPItemSkeletonComponent>;

export const EPItemSkeleton: Story = {};

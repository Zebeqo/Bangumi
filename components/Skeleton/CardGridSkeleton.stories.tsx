import type { Meta, StoryObj } from "@storybook/react";

import { CardGridSkeleton as CardGridSkeletonComponent } from "@/components/Skeleton/CardGridSkeleton";

const meta: Meta<typeof CardGridSkeletonComponent> = {
  title: "Skeleton/CardGridSkeleton",
  component: CardGridSkeletonComponent,
};

export default meta;
type Story = StoryObj<typeof CardGridSkeletonComponent>;

export const CardGridSkeleton: Story = {};

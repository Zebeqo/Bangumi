import type { Meta, StoryObj } from "@storybook/react";

import { CardSkeleton as CardSkeletonComponent } from "@/components/Skeleton/CardSkeleton";

const meta: Meta<typeof CardSkeletonComponent> = {
  title: "Skeleton/CardSkeleton",
  component: CardSkeletonComponent,
};

export default meta;
type Story = StoryObj<typeof CardSkeletonComponent>;

export const CardSkeleton: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import { CardSkeleton as CardSkeletonComponent } from "@/components/CardSkeleton";

const meta: Meta<typeof CardSkeletonComponent> = {
  title: "CardSkeleton",
  component: CardSkeletonComponent,
};

export default meta;
type Story = StoryObj<typeof CardSkeletonComponent>;

export const CardSkeleton: Story = {};

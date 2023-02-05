import type { Meta, StoryObj } from "@storybook/react";

import { AvatarCardSkeleton as AvatarCardSkeletonComponent } from "@/components/Skeleton/AvatarCardSkeleton";

const meta: Meta<typeof AvatarCardSkeletonComponent> = {
  title: "Skeleton/AvatarCardSkeleton",
  component: AvatarCardSkeletonComponent,
};

export default meta;
type Story = StoryObj<typeof AvatarCardSkeletonComponent>;

export const AvatarCardSkeleton: Story = {};

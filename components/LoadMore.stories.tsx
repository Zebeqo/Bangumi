import type { Meta, StoryObj } from "@storybook/react";

import { LoadMore as LoadMoreComponent } from "./LoadMore";

const meta = {
  component: LoadMoreComponent,
} satisfies Meta<typeof LoadMoreComponent>;

export default meta;
type Story = StoryObj<typeof LoadMoreComponent>;

export const LoadMore: Story = {
  args: {
    hasMore: true,
  },
};

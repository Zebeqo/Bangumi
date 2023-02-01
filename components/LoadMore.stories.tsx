import type { Meta, StoryObj } from "@storybook/react";

import { LoadMore as LoadMoreComponent } from "./LoadMore";

const meta: Meta<typeof LoadMoreComponent> = {
  title: "LoadMore",
  component: LoadMoreComponent,
};

export default meta;
type Story = StoryObj<typeof LoadMoreComponent>;

export const LoadMore: Story = {
  args: {
    hasMore: true,
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { LoadMoreIndicator as LoadMoreIndicatorComponent } from "./LoadMoreIndicator";

const meta: Meta<typeof LoadMoreIndicatorComponent> = {
  title: "LoadMoreIndicator",
  component: LoadMoreIndicatorComponent,
};

export default meta;
type Story = StoryObj<typeof LoadMoreIndicatorComponent>;

export const LoadMoreIndicator: Story = {};

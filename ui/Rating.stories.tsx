import type { Meta, StoryObj } from "@storybook/react";

import { Rating as RatingComponent } from "./Rating";

const meta: Meta<typeof RatingComponent> = {
  title: "Rating",
  component: RatingComponent,
  parameters: {
    controls: { exclude: ["icon"] },
  },
};

export default meta;
type Story = StoryObj<typeof RatingComponent>;

export const Rating: Story = {
  args: {
    point: 8.5,
  },
};

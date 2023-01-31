import type { Meta, StoryObj } from "@storybook/react";

import { Rating as RatingComponent } from "./Rating";
import { colorArgTypes } from "@/lib/storybook";

const meta: Meta<typeof RatingComponent> = {
  title: "Rating",
  component: RatingComponent,
};

export default meta;
type Story = StoryObj<typeof RatingComponent>;

export const Rating: Story = {
  args: {
    point: 8.5,
    colorType: "accent",
  },
  argTypes: {
    colorType: {
      ...colorArgTypes.colorType,
    },
  },
};

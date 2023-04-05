import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "@/ui/components/Rating";
import { within } from "@storybook/testing-library";

// https://github.com/storybookjs/storybook/issues/12078
const meta = {
  title: "Rating",
  component: Rating,
  argTypes: {
    color: {
      control: {
        type: "radio",
      },
      options: ["primary", "accent", "neutral"],
    },
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof Rating>;

export const Rating_: Story = {
  args: {
    score: 6.6,
    maxScore: 10,
    totalIconCount: 5,
    color: "accent",
  },
  play: ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // half-rating-icon is overlapped by fill-rating-icon and empty-rating-icon
    expect(canvas.getAllByTestId("fill-rating-icon")).toHaveLength(4);
    expect(canvas.getAllByTestId("empty-rating-icon")).toHaveLength(2);
  },
};

import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "@/ui/primitive/Rating";
import { colorArray } from "@/lib/color";
import { within } from "@storybook/testing-library";

const meta = {
  title: "Rating",
  component: Rating,
  argTypes: {
    colorVariant: {
      control: {
        type: "radio",
      },
      options: colorArray,
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
    colorVariant: "accent",
  },
  play: ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // half-rating-icon is overlapped by fill-rating-icon and empty-rating-icon
    expect(canvas.getAllByTestId("fill-rating-icon")).toHaveLength(4);
    expect(canvas.getAllByTestId("empty-rating-icon")).toHaveLength(2);
  },
};

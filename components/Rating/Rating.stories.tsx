import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "@/components/Rating/Rating";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta = {
  component: Rating,
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof Rating>;

export const Rating_: Story = {
  args: {
    score: 6.6,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // half-rating-icon is overlapped by fill-rating-icon and empty-rating-icon
    await expect(canvas.getAllByTestId("fill-rating-icon")).toHaveLength(4);
    await expect(canvas.getAllByTestId("empty-rating-icon")).toHaveLength(2);
  },
};

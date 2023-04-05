import type { Meta, StoryObj } from "@storybook/react";
import { RatingSelect } from "@/components/Select/RatingSelect";
import { action } from "@storybook/addon-actions";
import SelectMeta from "@/ui/components/Select.stories";

const meta = {
  component: RatingSelect,
} satisfies Meta<typeof RatingSelect>;

export default meta;
type Story = StoryObj<typeof RatingSelect>;

export const RatingSelect_: Story = {
  args: {
    defaultValue: "(9) 神作",
    onValueChange: action("onValueChange"),
  },
  play: async ({ canvasElement }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line storybook/context-in-play-function
    await SelectMeta.play({ canvasElement });
  },
};

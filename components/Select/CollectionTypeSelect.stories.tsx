import type { Meta, StoryObj } from "@storybook/react";
import { CollectionTypeSelect } from "@/components/Select/CollectionTypeSelect";
import { action } from "@storybook/addon-actions";
import SelectMeta from "@/ui/primitive/Select.stories";

const meta = {
  component: CollectionTypeSelect,
} satisfies Meta<typeof CollectionTypeSelect>;

export default meta;
type Story = StoryObj<typeof CollectionTypeSelect>;

export const CollectionTypeSelect_: Story = {
  args: {
    defaultValue: "在看",
    onValueChange: action("onValueChange"),
  },
  play: async ({ canvasElement }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line storybook/context-in-play-function
    await SelectMeta.play({ canvasElement });
  },
};

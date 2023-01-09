import type { Meta, StoryObj } from "@storybook/react";
import { RatingSelect as RatingSelectComponent } from "@/components/RatingSelect";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";

const meta: Meta<typeof RatingSelectComponent> = {
  title: "RatingSelect",
  component: RatingSelectComponent,
  decorators: [
    (Story) => {
      return (
        <>
          <ReactQueryDevtools initialIsOpen={true} panelPosition={"right"} />
          <Story />
        </>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof RatingSelectComponent>;

export const RatingSelect: Story = {
  args: {
    subject_id: STORYBOOK_SUBJECT_ID,
  },
  parameters: {
    layout: "centered",
  },
};

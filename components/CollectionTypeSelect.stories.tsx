import type { Meta, StoryObj } from "@storybook/react";
import { CollectionTypeSelect as CollectionTypeSelectComponent } from "@/components/CollectionTypeSelect";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";

const meta: Meta<typeof CollectionTypeSelectComponent> = {
  title: "CollectionTypeSelect",
  component: CollectionTypeSelectComponent,
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
type Story = StoryObj<typeof CollectionTypeSelectComponent>;

export const CollectionTypeSelect: Story = {
  args: {
    subject_id: STORYBOOK_SUBJECT_ID,
  },
  parameters: {
    layout: "centered",
  },
};

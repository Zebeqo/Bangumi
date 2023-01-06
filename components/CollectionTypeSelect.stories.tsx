import type { Meta, StoryObj } from "@storybook/react";
import { CollectionTypeSelect as CollectionTypeSelectComponent } from "@/components/CollectionTypeSelect";

const meta: Meta<typeof CollectionTypeSelectComponent> = {
  title: "CollectionTypeSelect",
  component: CollectionTypeSelectComponent,
};

export default meta;
type Story = StoryObj<typeof CollectionTypeSelectComponent>;

export const CollectionTypeSelect: Story = {
  args: {
    collection_type: 2,
    color: "accent",
  },
  parameters: {
    layout: "centered",
  },
};

export const CollectionTypeSelect_Edge: Story = {
  args: {
    collection_type: 2,
    color: "accent",
  },
};

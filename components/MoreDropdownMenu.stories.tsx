import type { Meta, StoryObj } from "@storybook/react";
import { MoreDropdownMenu as MoreDropdownMenuComponent } from "@/components/MoreDropdownMenu";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";

const meta: Meta<typeof MoreDropdownMenuComponent> = {
  title: "MoreDropdownMenu",
  component: MoreDropdownMenuComponent,
};

export default meta;
type Story = StoryObj<typeof MoreDropdownMenuComponent>;

export const MoreDropdownMenu: Story = {
  args: {
    subject_id: STORYBOOK_SUBJECT_ID,
    hasCollectionData: true,
  },
  parameters: {
    layout: "centered",
  },
};

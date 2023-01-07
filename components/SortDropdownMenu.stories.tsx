import type { Meta, StoryObj } from "@storybook/react";
import { SortDropdownMenu as SortDropdownMenuComponent } from "@/components/SortDropdownMenu";

const meta: Meta<typeof SortDropdownMenuComponent> = {
  title: "SortDropdownMenu",
  component: SortDropdownMenuComponent,
};

export default meta;
type Story = StoryObj<typeof SortDropdownMenuComponent>;

export const SortDropdownMenu: Story = {
  parameters: {
    layout: "centered",
  },
};

export const SortDropdownMenu_Edge: Story = {};

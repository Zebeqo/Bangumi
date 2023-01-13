import type { Meta, StoryObj } from "@storybook/react";
import { SortDropdownMenu as SortDropdownMenuComponent } from "@/components/Panel/InfoPanel/SortDropdownMenu";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta<typeof SortDropdownMenuComponent> = {
  title: "SortDropdownMenu",
  component: SortDropdownMenuComponent,
};

export default meta;
type Story = StoryObj<typeof SortDropdownMenuComponent>;

const play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");
  await userEvent.click(button);
};

export const SortDropdownMenu: Story = {
  parameters: {
    layout: "centered",
  },
  play,
};

export const SortDropdownMenu_Edge: Story = {
  play,
};

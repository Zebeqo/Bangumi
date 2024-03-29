import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar as SidebarComponent } from "./Sidebar";
import { HeaderMarginDecorator } from "@/ui/StorybookDecorator";

const meta: Meta<typeof SidebarComponent> = {
  title: "Sidebar",
  component: SidebarComponent,
};

export default meta;
type Story = StoryObj<typeof SidebarComponent>;

export const Sidebar: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/calendar/today",
      },
    },
    layout: "fullscreen",
  },
  decorators: [HeaderMarginDecorator],
};

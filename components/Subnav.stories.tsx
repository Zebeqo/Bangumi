import type { Meta, StoryObj } from "@storybook/react";
import { Subnav } from "@/components/Subnav";
import { SortDropdownMenu } from "@/components/Panel/InfoPanel/SortDropdownMenu";
import { headerMarginDecorator } from "@/lib/storybook";

const meta: Meta<typeof Subnav> = {
  title: "Subnav",
  component: Subnav,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [headerMarginDecorator],
};

export default meta;
type Story = StoryObj<typeof Subnav>;

export const CalendarSubnav: Story = {
  args: {
    navItems: [
      {
        name: "monday",
        value: "周一",
        href: "/calendar/monday",
      },
      {
        name: "tuesday",
        value: "周二",
        href: "/calendar/tuesday",
      },
      {
        name: "wednesday",
        value: "周三",
        href: "/calendar/wednesday",
      },
      {
        name: "thursday",
        value: "周四",
        href: "/calendar/thursday",
      },
      {
        name: "friday",
        value: "周五",
        href: "/calendar/friday",
      },
      {
        name: "saturday",
        value: "周六",
        href: "/calendar/saturday",
      },
      {
        name: "sunday",
        value: "周日",
        href: "/calendar/sunday",
      },
    ],
    selectedItemName: "monday",
    children: <SortDropdownMenu />,
  },
};

export const HotSubnav: Story = {
  args: {
    navItems: [
      {
        name: "anime",
        value: "动画",
        href: "/hot/anime",
      },
      {
        name: "book",
        value: "书籍",
        href: "/hot/book",
      },
      {
        name: "music",
        value: "音乐",
        href: "/hot/music",
      },
      {
        name: "game",
        value: "游戏",
        href: "/hot/game",
      },
      {
        name: "real",
        value: "三次元",
        href: "/hot/real",
      },
    ],
    selectedItemName: "anime",
  },
};

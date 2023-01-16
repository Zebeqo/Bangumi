import type { Meta, StoryObj } from "@storybook/react";
import { Subnav } from "@/components/Subnav";
import { SortDropdownMenu } from "@/components/SortDropdownMenu";
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

export const CollectionSubnav: Story = {
  args: {
    navItems: [
      {
        name: "do",
        value: "在看",
        href: "/collection/do",
      },
      {
        name: "wish",
        value: "想看",
        href: "/collection/wish",
      },
      {
        name: "collect",
        value: "看过",
        href: "/collection/collect",
      },
      {
        name: "on_hold",
        value: "搁置",
        href: "/collection/on_hold",
      },
      {
        name: "dropped",
        value: "抛弃",
        href: "/collection/dropped",
      },
    ],
    selectedItemName: "do",
  },
};

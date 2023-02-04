import type { Meta, StoryObj } from "@storybook/react";
import { Subnav } from "@/components/Subnav";
import { SortDropdownMenu } from "@/components/DropdownMenu/SortDropdownMenu";
import { headerMarginDecorator } from "@/ui/storybook";
import { PersonalViewSwitch } from "@/components/Switch/personalViewSwitch";

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

const collectionType = "do";
export const CollectionSubnav: Story = {
  args: {
    navItems: [
      {
        name: "anime",
        value: "动画",
        href: `/collection/${collectionType}/anime`,
      },
      {
        name: "book",
        value: "书籍",
        href: `/collection/${collectionType}/book`,
      },
      {
        name: "music",
        value: "音乐",
        href: `/collection/${collectionType}/music`,
      },
      {
        name: "game",
        value: "游戏",
        href: `/collection/${collectionType}/game`,
      },
      {
        name: "real",
        value: "三次元",
        href: `/collection/${collectionType}/real`,
      },
    ],
    selectedItemName: "anime",
    children: (
      <div className="flex items-center space-x-3">
        <span className="font-medium text-neutral-11">
          个人视角<span className="text-xs font-normal ">（按 p 切换）</span>
        </span>
        <PersonalViewSwitch />
      </div>
    ),
  },
};

import {
  ArchiveBoxIcon,
  ArchiveBoxXMarkIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  FireIcon,
  InboxArrowDownIcon,
  InboxIcon,
  InboxStackIcon,
} from "@heroicons/react/20/solid";

export const headerGroup = {
  items: [
    {
      name: "每日放送",
      href: "/calendar",
      icon: <CalendarDaysIcon className="mr-2 h-5 w-5" />,
    },
    {
      name: "当前最热",
      href: "/hot",
      icon: <FireIcon className="mr-2 h-5 w-5" />,
    },
    {
      name: "排行榜",
      href: "/top",
      icon: <ChartBarIcon className="mr-2 h-5 w-5" />,
    },
  ],
};

export const collectionGroup = {
  label: "收藏",
  items: [
    {
      name: "在看",
      href: "/collection/do",
      icon: <InboxIcon className="mr-2 h-5 w-5" />,
    },
    {
      name: "想看",
      href: "/collection/wish",
      icon: <InboxArrowDownIcon className="mr-2 h-5 w-5" />,
    },
    {
      name: "看过",
      href: "/collection/collect",
      icon: <InboxStackIcon className="mr-2 h-5 w-5" />,
    },
    {
      name: "搁置",
      href: "/collection/on_hold",
      icon: <ArchiveBoxIcon className="mr-2 h-5 w-5" />,
    },
    {
      name: "抛弃",
      href: "/collection/dropped",
      icon: <ArchiveBoxXMarkIcon className="mr-2 h-5 w-5" />,
    },
  ],
};

"use client";
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
import { Button } from "@/ui/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const headerItems = [
  {
    name: "每日放送",
    href: "/calendar",
    icon: <CalendarDaysIcon />,
  },
  {
    name: "当前最热",
    href: "/hot",
    icon: <FireIcon />,
  },
  {
    name: "排行榜",
    href: "/top",
    icon: <ChartBarIcon />,
  },
];

const groups = [
  {
    label: "收藏",
    items: [
      {
        name: "在看",
        href: "/collection/do",
        icon: <InboxIcon />,
      },
      {
        name: "想看",
        href: "/collection/wish",
        icon: <InboxArrowDownIcon />,
      },
      {
        name: "看过",
        href: "/collection/collect",
        icon: <InboxStackIcon />,
      },
      {
        name: "搁置",
        href: "/collection/on_hold",
        icon: <ArchiveBoxIcon />,
      },
      {
        name: "抛弃",
        href: "/collection/dropped",
        icon: <ArchiveBoxXMarkIcon />,
      },
    ],
  },
];

export function Sidebar() {
  const path = usePathname();
  return (
    <div className="fixed h-full w-52 border-r border-r-neutral-6 px-4 py-4">
      <div>
        {/*Sidebar.Header*/}
        <div className="flex flex-col space-y-1">
          {headerItems.map((item) => {
            return (
              // Sidebar.Item
              <Link href={item.href} key={item.name}>
                <Button
                  color={path?.startsWith(item.href) ? "primary" : "neutral"}
                  label={item.name}
                  type={path?.startsWith(item.href) ? "selected" : "ghost"}
                  icon={item.icon}
                  className="w-full justify-start"
                />
              </Link>
            );
          })}
        </div>
        {/*Sidebar.Group*/}
        <div className="flex flex-col">
          {groups.map((group) => {
            return (
              <div key={group.label} className="flex flex-col">
                <div className="mt-1 mb-6 h-px w-full bg-neutral-6"></div>
                <div className="mb-1 px-4 text-neutral-9">{group.label}</div>
                {group.items.map((item) => {
                  return (
                    // Sidebar.Item
                    <Link href={item.href} key={item.name}>
                      <Button
                        color={
                          path?.startsWith(item.href) ? "primary" : "neutral"
                        }
                        label={item.name}
                        type={
                          path?.startsWith(item.href) ? "selected" : "ghost"
                        }
                        icon={item.icon}
                        className="w-full justify-start"
                      />
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

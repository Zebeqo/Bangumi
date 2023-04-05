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
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { classed } from "@/classed.config";
import type { ComponentProps } from "@tw-classed/react";
import { makeStrict } from "@tw-classed/react";
import { ClassedButton } from "@/ui/components/Button";
import { forwardRef } from "react";

const headerItems = [
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
];

const groups = [
  {
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
  },
];

const LinkButton = makeStrict(classed(Link, ClassedButton));

const SidebarItem = forwardRef<
  React.ElementRef<typeof LinkButton>,
  Omit<ComponentProps<typeof LinkButton>, "color" | "variant"> & {
    selected?: boolean;
  }
>(({ className, selected = false, ...props }, ref) => {
  return (
    <LinkButton
      ref={ref}
      variant={selected ? "selected" : "ghost"}
      color={selected ? "primary" : "neutral"}
      className={cn("w-full justify-start", className)}
      {...props}
    />
  );
});
SidebarItem.displayName = "SidebarItem";

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
              <SidebarItem
                href={item.href}
                key={item.name}
                selected={
                  path === "/"
                    ? item.href === "/top"
                    : path?.startsWith(item.href)
                }
              >
                {item.icon}
                {item.name}
              </SidebarItem>
            );
          })}
        </div>
        {/*Sidebar.Group*/}
        <div className="flex flex-col">
          {groups.map((group) => {
            return (
              <div key={group.label} className="flex flex-col space-y-1">
                <div className="mt-2 mb-4 h-px w-full bg-neutral-6"></div>
                <div className="mb-1 px-4 text-neutral-9">{group.label}</div>
                {group.items.map((item) => {
                  return (
                    // Sidebar.Item
                    <SidebarItem
                      href={item.href}
                      key={item.name}
                      selected={
                        path === "/collection"
                          ? item.href === "/collection/do"
                          : path?.startsWith(item.href)
                      }
                    >
                      {item.icon}
                      {item.name}
                    </SidebarItem>
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

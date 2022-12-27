"use client";
import { Button } from "@/ui/Button";
import {
  ChevronUpDownIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navItems = [
  {
    name: "今日",
    href: "/calendar/today",
  },
  {
    name: "周一",
    href: "/calendar/monday",
  },
  {
    name: "周二",
    href: "/calendar/tuesday",
  },
  {
    name: "周三",
    href: "/calendar/wednesday",
  },
  {
    name: "周四",
    href: "/calendar/thursday",
  },
  {
    name: "周五",
    href: "/calendar/friday",
  },
  {
    name: "周六",
    href: "/calendar/saturday",
  },
  {
    name: "周日",
    href: "/calendar/sunday",
  },
];

export function Subnav() {
  const path = usePathname();
  return (
    <div className="flex justify-between px-16">
      <Button
        color="neutral"
        type="outline"
        label="默认"
        icon={<ChevronUpDownIcon />}
        revert
      />
      <div className="flex space-x-1">
        {navItems.map((item) => {
          return (
            // Sidebar.Item
            <Link href={item.href} key={item.name}>
              <Button
                color="neutral"
                label={item.name}
                type={path === item.href ? "selected" : "ghost"}
              />
            </Link>
          );
        })}
      </div>
      <Button
        color="neutral"
        type="outline"
        label="过滤"
        icon={<AdjustmentsHorizontalIcon />}
      />
    </div>
  );
}

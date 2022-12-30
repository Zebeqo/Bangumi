"use client";
import { Button } from "@/ui/Button";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { SortDropdownMenu } from "@/components/SortDropdownMenu";

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
  const searchParams = useSearchParams();
  return (
    <div className="flex justify-between px-16">
      <div className="flex space-x-1">
        {navItems.map((item) => {
          return (
            // Sidebar.Item
            <Link
              href={
                searchParams.toString()
                  ? `${item.href}?${searchParams.toString()}`
                  : `${item.href}`
              }
              key={item.name}
            >
              <Button
                color="neutral"
                label={item.name}
                type={path === item.href ? "selected" : "ghost"}
              />
            </Link>
          );
        })}
      </div>
      <div className="flex space-x-2">
        <SortDropdownMenu />
      </div>
    </div>
  );
}

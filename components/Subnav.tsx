"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { buttonClass } from "@/ui/primitive/Button";

export interface NavItem {
  name: string;
  value: string;
  href: string;
}

export function Subnav({
  navItems,
  selectedItemName,
  children,
}: {
  navItems: NavItem[];
  selectedItemName: string;
  children?: React.ReactNode;
}) {
  const searchParams = useSearchParams();

  return (
    <div className="flex justify-between px-16">
      <div className="flex space-x-1">
        {navItems.slice(0).map((item) => {
          return (
            // Sidebar.Item
            <Link
              href={
                searchParams?.toString()
                  ? `${item.href}?${searchParams.toString()}`
                  : `${item.href}`
              }
              key={item.name}
              className={
                selectedItemName === item.name
                  ? buttonClass({ type: "selected" })
                  : buttonClass({ type: "ghost" })
              }
            >
              {item.value}
            </Link>
          );
        })}
      </div>
      {children}
    </div>
  );
}

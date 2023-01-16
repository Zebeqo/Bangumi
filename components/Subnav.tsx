"use client";
import { Button } from "@/ui/Button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SortDropdownMenu } from "@/components/Panel/InfoPanel/SortDropdownMenu";

export interface NavItem {
  name: string;
  value: string;
  href: string;
}

export function Subnav({
  navItems,
  selectedItemName,
}: {
  navItems: NavItem[];
  selectedItemName: string;
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
                searchParams.toString()
                  ? `${item.href}?${searchParams.toString()}`
                  : `${item.href}`
              }
              key={item.name}
            >
              <Button
                colorType="neutral"
                label={item.value}
                type={selectedItemName === item.name ? "selected" : "ghost"}
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

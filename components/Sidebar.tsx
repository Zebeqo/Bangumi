"use client";
import { usePathname } from "next/navigation";
import {
  Sidebar as SidebarRoot,
  SidebarGroup,
  SidebarItem,
  SidebarLabel,
  SidebarSeparator,
} from "@/ui/components/Sidebar";
import { collectionGroup, headerGroup } from "@/config/sidebar";

export function Sidebar() {
  const path = usePathname();

  return (
    <SidebarRoot value={`/${path?.split("/").at(1) ?? ""}`}>
      <SidebarGroup>
        {headerGroup.items.map((item) => (
          <SidebarItem value={item.href} key={`${item.href}-${item.name}`}>
            {item.icon}
            {item.name}
          </SidebarItem>
        ))}
      </SidebarGroup>
      <SidebarSeparator />
      <SidebarGroup>
        <SidebarLabel>{collectionGroup.label}</SidebarLabel>
        {collectionGroup.items.map((item) => (
          <SidebarItem value={item.href} key={`${item.href}-${item.name}`}>
            {item.icon}
            {item.name}
          </SidebarItem>
        ))}
      </SidebarGroup>
    </SidebarRoot>
  );
}

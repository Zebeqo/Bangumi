"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { NavbarItem, Navbar as NavbarRoot } from "@/ui/primitive/Navbar";

export function CategoryNavbar({ basePath }: { basePath: string }) {
  const segment = useSelectedLayoutSegment();
  if (!segment) {
    return null;
  }

  return (
    <NavbarRoot value={`${basePath}/${segment}`}>
      <NavbarItem value={`${basePath}/anime`}>动画</NavbarItem>
      <NavbarItem value={`${basePath}/book`}>书籍</NavbarItem>
      <NavbarItem value={`${basePath}/music`}>音乐</NavbarItem>
      <NavbarItem value={`${basePath}/game`}>游戏</NavbarItem>
      <NavbarItem value={`${basePath}/real`}>三次元</NavbarItem>
    </NavbarRoot>
  );
}

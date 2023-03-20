"use client";

import { usePathname } from "next/navigation";
import { NavbarItem, Navbar as NavbarRoot } from "@/ui/primitive/Navbar";

export function CategoryNavbar() {
  const pathname = usePathname()!;
  const segments = pathname.split("/");
  let currentCategory = "anime";
  if (
    ["anime", "book", "music", "game", "real"].includes(segments.at(-1) ?? "")
  ) {
    currentCategory = segments.at(-1) ?? "anime";
    segments.pop();
  }

  // default to /top
  const rootPath = segments.join("/") === "/" ? "/top" : segments.join("/");

  return (
    <NavbarRoot value={`${rootPath}/${currentCategory}`}>
      <NavbarItem value={`${rootPath}/anime`}>动画</NavbarItem>
      <NavbarItem value={`${rootPath}/book`}>书籍</NavbarItem>
      <NavbarItem value={`${rootPath}/music`}>音乐</NavbarItem>
      <NavbarItem value={`${rootPath}/game`}>游戏</NavbarItem>
      <NavbarItem value={`${rootPath}/real`}>三次元</NavbarItem>
    </NavbarRoot>
  );
}

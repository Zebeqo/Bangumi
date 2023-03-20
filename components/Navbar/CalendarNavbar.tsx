"use client";

import { usePathname } from "next/navigation";
import { NavbarItem, Navbar as NavbarRoot } from "@/ui/primitive/Navbar";

export function CalendarNavbar({ defaultDay }: { defaultDay: string }) {
  const pathname = usePathname()!;
  const segments = pathname.split("/");
  let currentCategory = defaultDay;
  if (
    [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ].includes(segments.at(-1) ?? "")
  ) {
    currentCategory = segments.at(-1) ?? defaultDay;
    segments.pop();
  }
  const rootPath = segments.join("/");

  return (
    <NavbarRoot value={`${rootPath}/${currentCategory}`}>
      <NavbarItem value={`${rootPath}/monday`}>周一</NavbarItem>
      <NavbarItem value={`${rootPath}/tuesday`}>周二</NavbarItem>
      <NavbarItem value={`${rootPath}/wednesday`}>周三</NavbarItem>
      <NavbarItem value={`${rootPath}/thursday`}>周四</NavbarItem>
      <NavbarItem value={`${rootPath}/friday`}>周五</NavbarItem>
      <NavbarItem value={`${rootPath}/saturday`}>周六</NavbarItem>
      <NavbarItem value={`${rootPath}/sunday`}>周日</NavbarItem>
    </NavbarRoot>
  );
}

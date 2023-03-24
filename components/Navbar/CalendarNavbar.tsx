"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { NavbarItem, Navbar as NavbarRoot } from "@/ui/primitive/Navbar";

export function CalendarNavbar() {
  const segment = useSelectedLayoutSegment();
  const day =
    segment === "today"
      ? [
          "sunday",
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday",
        ][new Date().getDay()]
      : segment;

  if (!day) {
    return null;
  }

  return (
    <NavbarRoot value={`/calendar/${day}`}>
      <NavbarItem value={`/calendar/monday`}>周一</NavbarItem>
      <NavbarItem value={`/calendar/tuesday`}>周二</NavbarItem>
      <NavbarItem value={`/calendar/wednesday`}>周三</NavbarItem>
      <NavbarItem value={`/calendar/thursday`}>周四</NavbarItem>
      <NavbarItem value={`/calendar/friday`}>周五</NavbarItem>
      <NavbarItem value={`/calendar/saturday`}>周六</NavbarItem>
      <NavbarItem value={`/calendar/sunday`}>周日</NavbarItem>
    </NavbarRoot>
  );
}

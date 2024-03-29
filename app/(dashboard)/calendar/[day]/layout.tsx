import { Navbar, NavbarItem } from "@/ui/components/Navbar";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { day: string };
}) {
  const day =
    params.day === "today"
      ? [
          "sunday",
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday",
        ][new Date().getDay()]
      : params.day;

  return (
    <>
      <div className="flex items-center justify-between px-16">
        <Navbar value={`/calendar/${day}`}>
          <NavbarItem value={`/calendar/monday`}>周一</NavbarItem>
          <NavbarItem value={`/calendar/tuesday`}>周二</NavbarItem>
          <NavbarItem value={`/calendar/wednesday`}>周三</NavbarItem>
          <NavbarItem value={`/calendar/thursday`}>周四</NavbarItem>
          <NavbarItem value={`/calendar/friday`}>周五</NavbarItem>
          <NavbarItem value={`/calendar/saturday`}>周六</NavbarItem>
          <NavbarItem value={`/calendar/sunday`}>周日</NavbarItem>
        </Navbar>
      </div>
      {children}
    </>
  );
}

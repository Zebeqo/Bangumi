import { CalendarNavbar } from "@/components/Navbar/CalendarNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center justify-between px-16">
        <CalendarNavbar />
        {/*FIXME: not working with ISR, use Route Handlers + client-side data fetching instead*/}
        {/*<SortMenu />*/}
      </div>
      {children}
    </>
  );
}

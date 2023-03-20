import { CalendarNavbar } from "@/components/Navbar/CalendarNavbar";

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata({
  params,
}: {
  params: { day?: string[] };
}) {
  const dayValue =
    params.day?.at(0) === "monday"
      ? "周一"
      : params.day?.at(0) === "tuesday"
      ? "周二"
      : params.day?.at(0) === "wednesday"
      ? "周三"
      : params.day?.at(0) === "thursday"
      ? "周四"
      : params.day?.at(0) === "friday"
      ? "周五"
      : params.day?.at(0) === "saturday"
      ? "周六"
      : params.day?.at(0) === "sunday"
      ? "周日"
      : "今日";

  return {
    title: `${dayValue}放送`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center justify-between px-16">
        <CalendarNavbar
          defaultDay={
            new Date().getDay() === 0
              ? "sunday"
              : new Date().getDay() === 1
              ? "monday"
              : new Date().getDay() === 2
              ? "tuesday"
              : new Date().getDay() === 3
              ? "wednesday"
              : new Date().getDay() === 4
              ? "thursday"
              : new Date().getDay() === 5
              ? "friday"
              : "saturday"
          }
        />
        {/*FIXME: not working with ISR, use Route Handlers + client-side data fetching instead*/}
        {/*<SortMenu />*/}
      </div>
      {children}
    </>
  );
}

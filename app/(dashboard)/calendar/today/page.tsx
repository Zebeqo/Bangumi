import { Card } from "@/components/Card";
import type { SearchParams } from "@/lib/calendar";
import { calendarScheme, sortCalendarData } from "@/lib/calendar";

async function getCalendarData() {
  return calendarScheme.parse(
    await fetch("https://api.bgm.tv/calendar", {
      next: {
        revalidate: 3600,
      },
    }).then((res) => res.json())
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const calendarData = await getCalendarData();
  const todayData = calendarData.find(
    (data) => data.weekday.id === [7, 1, 2, 3, 4, 5, 6].at(new Date().getDay())
  );

  if (!todayData) {
    throw new Error("Failed to fetch data");
  }

  const sortedData = sortCalendarData(todayData, searchParams);
  return (
    <>
      {sortedData.map((item) => (
        /* @ts-expect-error Server Component */
        <Card key={item.id} id={item.id} />
      ))}
    </>
  );
}

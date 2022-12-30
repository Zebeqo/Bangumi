import { Card } from "@/components/Card";
import { redirect } from "next/navigation";
import type { SearchParams } from "@/lib/calendar";
import { calendarScheme, sortCalendarData } from "@/lib/calendar";

export function generateStaticPaths() {
  return [
    { day: "monday" },
    { day: "tuesday" },
    { day: "wednesday" },
    { day: "thursday" },
    { day: "friday" },
    { day: "saturday" },
    { day: "sunday" },
  ];
}

const dayMap = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7,
};

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
  params,
  searchParams,
}: {
  params: { day: string };
  searchParams: SearchParams;
}) {
  if (
    ![
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ].includes(params.day)
  ) {
    redirect("/calendar/today");
  }
  const calendarData = await getCalendarData();
  const dayData = calendarData.find(
    (data) => data.weekday.id === dayMap[params.day as keyof typeof dayMap]
  );

  if (!dayData) {
    throw new Error("Failed to fetch data");
  }

  const sortedData = sortCalendarData(dayData, searchParams);
  return (
    <>
      {sortedData.map((item) => (
        /* @ts-expect-error Server Component */
        <Card key={item.id} id={item.id} />
      ))}
    </>
  );
}

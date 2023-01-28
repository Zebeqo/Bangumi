// export const dynamicParams = false;

import { notFound } from "next/navigation";
import { Card } from "@/components/Card/Card";
import type { SearchParams } from "@/lib/calendar";
import { calendarScheme, sortCalendarData } from "@/lib/calendar";
import { GridWrapper } from "@/ui/GridWrapper";

// https://github.com/nextauthjs/next-auth/issues/5647#issuecomment-1342099364
// https://github.com/vercel/next.js/issues/44764
// export function generateStaticParams() {
//   return [
//     { day: [] },
//     { day: ["monday"] },
//     { day: ["tuesday"] },
//     { day: ["wednesday"] },
//     { day: ["thursday"] },
//     { day: ["friday"] },
//     { day: ["saturday"] },
//     { day: ["sunday"] },
//   ];
// }

const dayMap = {
  today: new Date().getDay() === 0 ? 7 : new Date().getDay(),
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
  params: { day?: undefined } | { day: string[] };
  searchParams?: SearchParams;
}) {
  // compromise
  if (
    ![
      undefined,
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ].includes(params.day?.at(0))
  ) {
    notFound();
  }

  const calendarData = await getCalendarData();
  const dayData = params.day
    ? calendarData.find(
        (data) =>
          data.weekday.id === dayMap[params.day[0] as keyof typeof dayMap]
      )
    : calendarData.find((data) => data.weekday.id === dayMap.today);

  if (!dayData) {
    throw new Error("Failed to fetch data");
  }

  const sortedData = sortCalendarData(dayData, searchParams);
  return (
    <GridWrapper>
      {sortedData.map((item) => (
        /* @ts-expect-error Server Component */
        <Card key={item.id} subject_id={item.id} />
      ))}
    </GridWrapper>
  );
}

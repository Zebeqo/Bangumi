import { objectKeys } from "@/lib/utils";

export const dynamicParams = true;

import { CardServer } from "@/components/Card/CardServer";
import type { SearchParams } from "@/lib/api/calendar";
import { calendarScheme, sortCalendarData } from "@/lib/api/calendar";
import { CardGridWrapper } from "@/components/Card/CardGridWrapper";
import { z } from "zod";

// https://github.com/nextauthjs/next-auth/issues/5647#issuecomment-1342099364
// https://github.com/vercel/next.js/issues/44764
export function generateStaticParams() {
  return [
    { day: "today" },
    { day: "monday" },
    { day: "tuesday" },
    { day: "wednesday" },
    { day: "thursday" },
    { day: "friday" },
    { day: "saturday" },
    { day: "sunday" },
  ];
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata({
  params,
}: {
  params: { day: string };
}) {
  const dayValue =
    params.day === "monday"
      ? "周一"
      : params.day === "tuesday"
      ? "周二"
      : params.day === "wednesday"
      ? "周三"
      : params.day === "thursday"
      ? "周四"
      : params.day === "friday"
      ? "周五"
      : params.day === "saturday"
      ? "周六"
      : params.day === "sunday"
      ? "周日"
      : "";

  return {
    title: `${dayValue}放送`,
  };
}

const dayMap = {
  today: new Date().getDay() || 7,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7,
} as const;

async function getCalendarData() {
  return calendarScheme.parse(
    await fetch("https://api.bgm.tv/calendar", {
      headers: {
        "User-Agent": "Zebeqo/bangumi-app (https://github.com/Zebeqo/Bangumi)",
      },
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
  searchParams?: SearchParams;
}) {
  const calendarData = await getCalendarData();
  const dayData = calendarData.find(
    (data) =>
      data.weekday.id === dayMap[z.enum(objectKeys(dayMap)).parse(params.day)]
  );
  if (!dayData) {
    throw new Error("Failed to fetch data");
  }

  const data = dayData.items;

  // FIXME: not working with ISR, use Route Handlers + client-side data fetching instead
  // if (searchParams) {
  //   data = sortCalendarData(dayData, searchParams);
  // }
  return (
    <CardGridWrapper>
      {data.map((item) => (
        /* @ts-expect-error Server Component */
        <CardServer countType={"doing"} key={item.id} subject_id={item.id} />
      ))}
    </CardGridWrapper>
  );
}

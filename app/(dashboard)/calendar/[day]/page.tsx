import { objectKeys } from "@/lib/utils";

export const dynamicParams = true;

import { CardServer } from "@/components/Card/CardServer";
import type { SearchParams } from "@/lib/api/calendar";
import { calendarScheme, sortCalendarData } from "@/lib/api/calendar";
import { CardGridWrapper } from "@/components/Card/CardGridWrapper";
import { dayEnum, dayEnumKeySchema } from "@/lib/enum/dayEnum";

export function generateStaticParams() {
  return objectKeys(dayEnum).map((day) => ({ day }));
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata({
  params,
}: {
  params: { day: string };
}) {
  const dayLabel = dayEnum[dayEnumKeySchema.parse(params.day)].label;

  return {
    title: `${dayLabel}放送`,
  };
}

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
      data.weekday.id === dayEnum[dayEnumKeySchema.parse(params.day)].value
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

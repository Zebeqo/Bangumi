import { objectKeys } from "@/lib/utils";

export const dynamicParams = true;

import { CardServer } from "@/components/Card/CardServer";
import { calendarScheme, sortCalendarData } from "@/lib/api/calendar";
import { CardGrid } from "@/components/Card/CardGrid";
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
export default async function Page({ params }: { params: { day: string } }) {
  const calendarData = await getCalendarData();
  const dayData = calendarData.find(
    (data) =>
      data.weekday.id === dayEnum[dayEnumKeySchema.parse(params.day)].value
  );
  if (!dayData) {
    throw new Error("Failed to fetch data");
  }

  const data = sortCalendarData(dayData, {
    order: "desc",
    sort: "do",
  });

  return (
    <CardGrid>
      {data.map((item) => (
        /* @ts-expect-error Server Component */
        <CardServer countType={"doing"} key={item.id} subject_id={item.id} />
      ))}
    </CardGrid>
  );
}

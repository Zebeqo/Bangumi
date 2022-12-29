import Image from "next/image";
import { Card } from "@/components/Card";
import { z } from "zod";
const calendarScheme = z.array(
  z.object({
    weekday: z.object({
      id: z.number(),
    }),
    items: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        name_cn: z.string(),
        air_date: z.string(),
        rating: z
          .object({
            score: z.number(),
            total: z.number(),
          })
          .optional(),
        images: z
          .object({
            large: z.string().url(),
          })
          .nullable(),
      })
    ),
  })
);

async function getCalendarData() {
  return calendarScheme.parse(
    await fetch("https://api.bgm.tv/calendar", {
      next: {
        revalidate: 3600,
      },
    }).then((res) => res.json())
  );
}

export default async function Page() {
  const calendarData = await getCalendarData();
  const todayData = calendarData.find(
    (data) => data.weekday.id === [7, 1, 2, 3, 4, 5, 6].at(new Date().getDay())
  );
  return (
    <>
      {todayData?.items.map((data) => {
        return (
          /* @ts-expect-error Server Component */
          <Card key={data.id} id={data.id} />
        );
      })}
    </>
  );
}

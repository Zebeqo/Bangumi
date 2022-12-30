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
        collection: z
          .object({
            doing: z.number(),
          })
          .optional(),
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

interface SearchParams {
  sort?: "do" | "count" | "rating";
  order?: "asc" | "desc";
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

  const sortedData = todayData?.items.sort((a, b) => {
    if (searchParams.sort === "do") {
      return searchParams.order === "asc"
        ? (a.collection?.doing ?? 0) - (b.collection?.doing ?? 0)
        : (b.collection?.doing ?? 0) - (a.collection?.doing ?? 0);
    }
    if (searchParams.sort === "count") {
      return searchParams.order === "asc"
        ? (a.rating?.total ?? 0) - (b.rating?.total ?? 0)
        : (b.rating?.total ?? 0) - (a.rating?.total ?? 0);
    }
    if (searchParams.sort === "rating") {
      return searchParams.order === "asc"
        ? (a.rating?.score ?? 0) - (b.rating?.score ?? 0)
        : (b.rating?.score ?? 0) - (a.rating?.score ?? 0);
    }
    return searchParams.order === "asc"
      ? (a.collection?.doing ?? 0) - (b.collection?.doing ?? 0)
      : (b.collection?.doing ?? 0) - (a.collection?.doing ?? 0);
  });

  return (
    <>
      {sortedData?.map((item) => (
        /* @ts-expect-error Server Component */
        <Card key={item.id} id={item.id} />
      ))}
    </>
  );
}

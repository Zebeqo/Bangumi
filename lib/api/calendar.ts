import { z } from "zod";
import { FALLBACK_IMAGE } from "@/lib/constant";

export const calendarScheme = z.array(
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
            large: z.string().url().catch(FALLBACK_IMAGE),
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

type CalendarData = z.infer<typeof calendarScheme>[number];

export interface SearchParams {
  sort?: "do" | "count" | "rating";
  order?: "asc" | "desc";
}

export const sortCalendarData = (
  data: CalendarData,
  searchParams: SearchParams
) => {
  return data.items.sort((a, b) => {
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
};

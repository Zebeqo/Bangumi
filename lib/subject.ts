import { z } from "zod";
export const subjectScheme = z.object({
  id: z.number().int(),
  date: z.string().nullable(),
  images: z.object({
    large: z.string().url(),
    common: z.string().url(),
  }),
  name: z.string(),
  name_cn: z.string(),
  tags: z.array(
    z.object({
      name: z.string(),
      count: z.number(),
    })
  ),
  rating: z.object({
    score: z.number(),
    total: z.number(),
  }),
  collection: z.object({
    doing: z.number(),
    on_hold: z.number(),
    dropped: z.number(),
    wish: z.number(),
    collect: z.number(),
  }),
  eps: z.number(),
  summary: z.string(),
});

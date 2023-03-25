import { z } from "zod";
import { FALLBACK_IMAGE } from "@/lib/constant";
export const subjectScheme = z.object({
  id: z.number().int(),
  date: z.string().min(1).catch("未知"),
  images: z.object({
    medium: z.string().url().catch(FALLBACK_IMAGE),
    large: z.string().url().catch(FALLBACK_IMAGE),
    common: z.string().url().catch(FALLBACK_IMAGE),
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

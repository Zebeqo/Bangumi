import { z } from "zod";
import { FALLBACK_IMAGE } from "@/lib/constant";
export const subjectCharactersScheme = z.array(
  z.object({
    id: z.number().int(),
    relation: z.string(),
    name: z.string(),
    images: z
      .object({
        medium: z.string().url().catch(FALLBACK_IMAGE),
      })
      .optional(),
    actors: z.array(z.object({ id: z.number().int(), name: z.string() })),
  })
);

export const characterScheme = z.object({
  name: z.string(),
  summary: z.string(),
  infobox: z.array(
    z.object({
      key: z.string(),
      value: z.string().or(
        z.array(
          z.object({
            k: z.string().optional(),
            v: z.string(),
          })
        )
      ),
    })
  ),
  images: z
    .object({
      medium: z.string().url().catch(FALLBACK_IMAGE),
    })
    .catch({ medium: FALLBACK_IMAGE }),
  stat: z.object({
    comments: z.number().int(),
    collects: z.number().int(),
  }),
});

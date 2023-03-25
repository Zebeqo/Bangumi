import { z } from "zod";
import { FALLBACK_IMAGE } from "@/lib/constant";

export const subjectPersonScheme = z.array(
  z.object({
    id: z.number().int(),
    name: z.string(),
    relation: z.string(),
    images: z
      .object({
        medium: z.string().url().catch(FALLBACK_IMAGE),
      })
      .catch({ medium: FALLBACK_IMAGE }),
  })
);

export const personScheme = z.object({
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

export enum personRelationRankEnum {
  _other,
  音乐,
  人物设定,
  动画制作,
  原作,
  导演,
}

export const personRelationRankScheme = z
  .nativeEnum(personRelationRankEnum)
  .catch(personRelationRankEnum._other);

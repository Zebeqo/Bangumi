import { z } from "zod";

export const subjectPersonScheme = z.array(
  z.object({
    id: z.number().int(),
    name: z.string(),
    relation: z.string(),
    images: z
      .object({
        medium: z.string().url().or(z.literal("")),
      })
      .optional(),
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
      medium: z.string().url().or(z.literal("")),
    })
    .optional(),
  stat: z.object({
    comments: z.number().int(),
    collects: z.number().int(),
  }),
});

export enum personRelationEnum {
  _other,
  音乐,
  人物设定,
  动画制作,
  原作,
  导演,
}

export const personRelationScheme = z
  .nativeEnum(personRelationEnum)
  .catch(personRelationEnum._other);

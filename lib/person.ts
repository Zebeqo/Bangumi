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

export const personRelationWeight = {
  _other: 0,
  音乐: 1,
  人物设定: 2,
  动画制作: 3,
  原作: 4,
  导演: 5,
};

// export type PersonRelation = keyof typeof personRelationWeight;
export const personRelationScheme = z
  .union([
    z.literal("_other"),
    z.literal("音乐"),
    z.literal("人物设定"),
    z.literal("动画制作"),
    z.literal("原作"),
    z.literal("导演"),
  ])
  .catch("_other");

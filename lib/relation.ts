import { z } from "zod";

export const subjectRelationsScheme = z.array(
  z.object({
    id: z.number().int(),
    name: z.string(),
    name_cn: z.string(),
    relation: z.string(),
    images: z.object({
      common: z.string().url().or(z.literal("")),
    }),
  })
);

export const subjectRelationWeight = {
  _other: 0,
  相同世界观: 1,
  不同演绎: 2,
  番外篇: 3,
  续集: 4,
  前传: 5,
  主线故事: 6,
};

export const subjectRelationScheme = z
  .union([
    z.literal("_other"),
    z.literal("相同世界观"),
    z.literal("不同演绎"),
    z.literal("番外篇"),
    z.literal("续集"),
    z.literal("前传"),
    z.literal("主线故事"),
  ])
  .catch("_other");

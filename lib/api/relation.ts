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

export enum subjectRelationEnum {
  _other,
  相同世界观,
  不同演绎,
  番外篇,
  续集,
  前传,
  主线故事,
}

export const subjectRelationScheme = z
  .nativeEnum(subjectRelationEnum)
  .catch(subjectRelationEnum._other);

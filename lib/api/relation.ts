import { z } from "zod";
import { FALLBACK_IMAGE } from "@/lib/constant";

export const subjectRelationsScheme = z.array(
  z.object({
    id: z.number().int(),
    name: z.string(),
    name_cn: z.string(),
    relation: z.string(),
    images: z.object({
      common: z.string().url().catch(FALLBACK_IMAGE),
    }),
  })
);

export enum subjectRelationRankEnum {
  _other,
  相同世界观,
  不同演绎,
  番外篇,
  续集,
  前传,
  主线故事,
}

export const subjectRelationRankScheme = z
  .nativeEnum(subjectRelationRankEnum)
  .catch(subjectRelationRankEnum._other);

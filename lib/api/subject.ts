import { z } from "zod";
import { objectKeys } from "@/lib/utils";
import { FALLBACK_IMAGE } from "@/lib/constant";
export const subjectScheme = z.object({
  id: z.number().int(),
  date: z.string().nullable(),
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

export const subjectTypeMap = {
  "1": { name: "book", name_cn: "书籍" },
  "2": { name: "anime", name_cn: "动画" },
  "3": { name: "music", name_cn: "音乐" },
  "4": { name: "game", name_cn: "游戏" },
  "6": { name: "real", name_cn: "三次元" },
} as const;

export const subjectTypeKeyScheme = z.preprocess(
  (value) => String(value),
  z.enum(objectKeys(subjectTypeMap))
);

type SubjectTypeName =
  (typeof subjectTypeMap)[keyof typeof subjectTypeMap]["name"];

export const subjectNameToTypeScheme = z.preprocess((name) => {
  return objectKeys(subjectTypeMap).find((key) => {
    return subjectTypeMap[key].name === name;
  }) as SubjectTypeName;
}, subjectTypeKeyScheme);

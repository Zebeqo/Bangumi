import { z } from "zod";
export const subjectScheme = z.object({
  id: z.number().int(),
  date: z.string().nullable(),
  images: z.object({
    medium: z.string().url(),
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

export const subjectTypeEnum = {
  book: { id: 1, value: "书籍" },
  anime: { id: 2, value: "动画" },
  music: { id: 3, value: "音乐" },
  game: { id: 4, value: "游戏" },
  real: { id: 6, value: "三次元" },
} as const;
export const subjectTypeEnumScheme = z.enum(
  Object.keys(subjectTypeEnum) as [keyof typeof subjectTypeEnum]
);

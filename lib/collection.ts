import { z } from "zod";

export const collectionTypeMap = {
  1: "想看",
  2: "看过",
  3: "在看",
  4: "搁置",
  5: "抛弃",
};
export const ratingMap = {
  0: "未评分",
  1: "(1) 不忍直视",
  2: "(2) 很差",
  3: "(3) 差",
  4: "(4) 较差",
  5: "(5) 不过不失",
  6: "(6) 还行",
  7: "(7) 推荐",
  8: "(8) 力荐",
  9: "(9) 神作",
  10: "(10) 超神作",
};

export type CollectionType = 1 | 2 | 3 | 4 | 5;
export type Rating = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const collectionScheme = z.object({
  subject_id: z.number().int(),
  updated_at: z.string().datetime(),
  comment: z.string().nullable(),
  tags: z.array(z.string()),
  type: z.number().int().positive().lte(5),
  rate: z.number().int().nonnegative().lte(10),
  private: z.boolean(),
});

export const mutateCollectionScheme = z.object({
  type: z.number().int().positive().lte(5).optional(),
  rate: z.number().int().nonnegative().lte(10).optional(),
  ep_status: z.number().int().nonnegative().optional(),
  vol_status: z.number().int().nonnegative().optional(),
  comment: z.string().optional(),
  privacy: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
});

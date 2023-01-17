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

export const collectionTypeEnum = {
  wish: { id: 1, value: "想看" },
  collect: { id: 2, value: "看过" },
  do: { id: 3, value: "在看" },
  on_hold: { id: 4, value: "搁置" },
  dropped: { id: 5, value: "抛弃" },
} as const;
export const collectionTypeEnumScheme = z.enum(
  Object.keys(collectionTypeEnum) as [keyof typeof collectionTypeEnum]
);

export const collectionScheme = z.object({
  subject_id: z.number().int(),
  updated_at: z.string().datetime(),
  comment: z.string().nullable(),
  tags: z.array(z.string()),
  type: z.number().int().positive().lte(5),
  rate: z.number().int().nonnegative().lte(10),
  private: z.boolean(),
  subject: z.object({
    eps: z.number().int().nonnegative(),
  }),
  ep_status: z.number().int().nonnegative(),
});

export const collectionsPageScheme = z.object({
  data: z.array(
    z.object({
      subject_id: z.number().int(),
      subject_type: z.number().int(),
      comment: z.string().nullable(),
      tags: z.array(z.string()),
      type: z.number().int().positive().lte(5),
      rate: z.number().int().nonnegative().lte(10),
      ep_status: z.number().int().nonnegative(),
      private: z.boolean(),
      subject: z.object({
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
        score: z.number(),
        type: z.number().int(),
        eps: z.number(),
        collection_total: z.number(),
      }),
    })
  ),
  total: z.number().int(),
  limit: z.number().int(),
  offset: z.number().int(),
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

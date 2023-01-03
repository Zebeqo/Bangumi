import { z } from "zod";

export const collectionTypeMap = {
  1: "想看",
  2: "看过",
  3: "在看",
  4: "搁置",
  5: "抛弃",
};
export const collectionScheme = z.object({
  updated_at: z.string().datetime(),
  comment: z.string().nullable(),
  tags: z.array(z.string()),
  type: z.number(),
  rate: z.number(),
  private: z.boolean(),
});

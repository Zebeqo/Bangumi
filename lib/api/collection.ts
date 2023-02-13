import { z } from "zod";
import { FALLBACK_IMAGE } from "@/lib/constant";

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
    type: z.number().int(),
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
      vol_status: z.number().int().nonnegative(),
      private: z.boolean(),
      subject: z.object({
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

export const collectionPagesDataScheme = z.object({
  pages: z.array(collectionsPageScheme),
  pageParams: z.array(z.number().int().nullable().optional()),
});

export const mutateCollectionScheme = z.object({
  type: z.number().int().positive().lte(5).optional(),
  rate: z.number().int().nonnegative().lte(10).optional(),
  ep_status: z.number().int().nonnegative().optional(),
  vol_status: z.number().int().nonnegative().optional(),
  comment: z.string().optional(),
  private: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
});

import { z } from "zod";
export const episodesScheme = z.object({
  data: z.array(
    z.object({
      id: z.number().int(),
      ep: z.number().int(),
      name: z.string(),
      name_cn: z.string(),
      comment: z.number().int(),
      duration: z.string(),
    })
  ),
  total: z.number().int(),
  limit: z.number().int(),
  offset: z.number().int(),
});

export const mutateEpisodesScheme = z.object({
  episode_id: z.array(z.number().int()),
  type: z.number().int().nonnegative().max(3),
});

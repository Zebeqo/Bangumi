import { z } from "zod";

export const searchResultScheme = z.object({
  data: z.array(
    z.object({
      id: z.number().int(),
    })
  ),
  total: z.number().int(),
  limit: z.number().int(),
  offset: z.number().int(),
});

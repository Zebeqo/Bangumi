import { z } from "zod";

export const errorScheme = z.object({
  title: z.string(),
  details: z
    .object({
      path: z.string(),
      method: z.string(),
    })
    .optional(),
  description: z.string(),
});

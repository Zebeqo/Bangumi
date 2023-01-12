import { z } from "zod";
export const subjectCharactersScheme = z.array(
  z.object({
    id: z.number().int(),
    relation: z.string(),
    name: z.string(),
    images: z.object({
      medium: z.string().url().or(z.literal("")),
    }),
    actors: z.array(z.object({ id: z.number().int(), name: z.string() })),
  })
);

export const characterScheme = z.object({
  name: z.string(),
  summary: z.string(),
  infobox: z.array(
    z.object({
      key: z.string(),
      value: z.string().or(
        z.array(
          z.object({
            k: z.string().optional(),
            v: z.string(),
          })
        )
      ),
    })
  ),
  images: z.object({
    medium: z.string().url().or(z.literal("")),
  }),
  stat: z.object({
    comments: z.number().int(),
    collects: z.number().int(),
  }),
});

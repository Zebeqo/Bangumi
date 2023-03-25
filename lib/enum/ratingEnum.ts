import { z } from "zod";
import { objectKeys } from "@/lib/utils";

export const ratingEnum = {
  未评分: 0,
  "(1) 不忍直视": 1,
  "(2) 很差": 2,
  "(3) 差": 3,
  "(4) 较差": 4,
  "(5) 不过不失": 5,
  "(6) 还行": 6,
  "(7) 推荐": 7,
  "(8) 力荐": 8,
  "(9) 神作": 9,
  "(10) 超神作": 10,
} as const;

export const ratingEnumKeySchema = z.enum(objectKeys(ratingEnum));

export const ratingValueToKeyScheme = z.preprocess((value) => {
  return objectKeys(ratingEnum).find((key) => {
    return ratingEnum[key] === value;
  });
}, ratingEnumKeySchema);

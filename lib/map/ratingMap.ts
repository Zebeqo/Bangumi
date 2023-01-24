import { z } from "zod";

export const ratingMap = {
  "0": { name: "", name_cn: "未评分" },
  "1": { name: "", name_cn: "(1) 不忍直视" },
  "2": { name: "", name_cn: "(2) 很差" },
  "3": { name: "", name_cn: "(3) 差" },
  "4": { name: "", name_cn: "(4) 较差" },
  "5": { name: "", name_cn: "(5) 不过不失" },
  "6": { name: "", name_cn: "(6) 还行" },
  "7": { name: "", name_cn: "(7) 推荐" },
  "8": { name: "", name_cn: "(8) 力荐" },
  "9": { name: "", name_cn: "(9) 神作" },
  "10": { name: "", name_cn: "(10) 超神作" },
} as const;

export const ratingKeyScheme = z.preprocess(
  (value) => String(value),
  z.enum(Object.keys(ratingMap) as [keyof typeof ratingMap])
);

export const ratingNameCNToTypeScheme = z.preprocess((name_cn) => {
  return Object.keys(ratingMap).find((key) => {
    return ratingMap[key as keyof typeof ratingMap].name_cn === name_cn;
  });
}, ratingKeyScheme);

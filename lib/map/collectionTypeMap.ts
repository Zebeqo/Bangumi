import { z } from "zod";

export const collectionTypeMap = {
  "1": { name: "wish", name_cn: "想看" },
  "2": { name: "collect", name_cn: "看过" },
  "3": { name: "do", name_cn: "在看" },
  "4": { name: "on_hold", name_cn: "搁置" },
  "5": { name: "dropped", name_cn: "抛弃" },
} as const;

export const collectionTypeKeyScheme = z.preprocess(
  (value) => String(value),
  z.enum(Object.keys(collectionTypeMap) as [keyof typeof collectionTypeMap])
);

export const collectionNameToTypeScheme = z.preprocess((name) => {
  return Object.keys(collectionTypeMap).find((key) => {
    return (
      collectionTypeMap[key as keyof typeof collectionTypeMap].name === name
    );
  });
}, collectionTypeKeyScheme);

export const collectionNameCNToTypeScheme = z.preprocess((name_cn) => {
  return Object.keys(collectionTypeMap).find((key) => {
    return (
      collectionTypeMap[key as keyof typeof collectionTypeMap].name_cn ===
      name_cn
    );
  });
}, collectionTypeKeyScheme);

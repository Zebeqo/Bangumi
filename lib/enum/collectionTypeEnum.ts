import { z } from "zod";
import { objectKeys } from "@/lib/utils";

export const collectionTypeEnum = {
  wish: { value: 1, label: "想看" },
  collect: { value: 2, label: "看过" },
  do: { value: 3, label: "在看" },
  on_hold: { value: 4, label: "搁置" },
  dropped: { value: 5, label: "抛弃" },
} as const;

export const collectionTypeEnumKeySchema = z.enum(
  objectKeys(collectionTypeEnum)
);

export const collectionTypeValueToKeySchema = z.preprocess((value) => {
  return objectKeys(collectionTypeEnum).find((key) => {
    return collectionTypeEnum[key].value === value;
  });
}, collectionTypeEnumKeySchema);

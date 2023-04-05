import { z } from "zod";
import { objectKeys } from "@/lib/utils";

export const dayEnum = {
  monday: { value: 1, label: "周一" },
  tuesday: { value: 2, label: "周二" },
  wednesday: { value: 3, label: "周三" },
  thursday: { value: 4, label: "周四" },
  friday: { value: 5, label: "周五" },
  saturday: { value: 6, label: "周六" },
  sunday: { value: 7, label: "周日" },
  today: {
    value: [7, 1, 2, 3, 4, 5, 6].at(new Date().getDay()),
    label: "今日",
  },
} as const;

export const dayEnumKeySchema = z.enum(objectKeys(dayEnum));

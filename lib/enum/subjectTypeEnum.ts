import { objectKeys } from "@/lib/utils";
import { z } from "zod";

export const subjectTypeEnum = {
  book: { value: 1, label: "书籍" },
  anime: { value: 2, label: "动画" },
  music: { value: 3, label: "音乐" },
  game: { value: 4, label: "游戏" },
  real: { value: 6, label: "三次元" },
} as const;

export const subjectTypeEnumKeySchema = z.enum(objectKeys(subjectTypeEnum));

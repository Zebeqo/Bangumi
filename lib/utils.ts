import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  classGroups: {
    lineClamp: [
      "line-clamp-1",
      "line-clamp-2",
      "line-clamp-3",
      "line-clamp-4",
      "line-clamp-5",
      "line-clamp-6",
      "line-clamp-7",
      "line-clamp-8",
      "line-clamp-9",
      "line-clamp-10",
    ],
  },
});
export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}

export function panelScrollToTop() {
  document
    .querySelector("#panel-overlay")
    ?.scrollTo({ top: 0, behavior: "smooth" });
}

export const objectKeys = <Obj extends object>(obj: Obj) =>
  Object.keys(obj) as [keyof Obj];

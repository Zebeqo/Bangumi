import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function panelScrollToTop() {
  document
    .querySelector("#panel-overlay")
    ?.scrollTo({ top: 0, behavior: "smooth" });
}

export const objectKeys = <Obj extends object>(obj: Obj) =>
  Object.keys(obj) as [keyof Obj];

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

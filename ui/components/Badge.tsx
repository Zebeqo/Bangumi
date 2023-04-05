import { classed } from "classed.config";

export const Badge = classed("span", {
  base: "inline-flex select-none items-center justify-center font-medium whitespace-nowrap text-xs px-3 rounded-md py-1",
  variants: {
    color: {
      primary: "bg-primary-4 text-primary-11",
      accent: "bg-accent-4 text-accent-11",
      neutral: "bg-neutral-4 text-neutral-11",
      success: "bg-success-4 text-success-11",
      error: "bg-error-4 text-error-11",
      info: "bg-info-4 text-info-11",
    },
  },
  defaultVariants: {
    color: "neutral",
  },
});

"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import { classed } from "@/classed.config";
import type { ComponentProps } from "@tw-classed/react";
import { deriveClassed } from "@tw-classed/react";

const ClassedSwitchRoot = classed(SwitchPrimitive.Root, {
  base: "group radix-state-unchecked:bg-neutral-4 dark:radix-state-unchecked:bg-gray-800 relative inline-flex h-[24px] w-[44px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
  variants: {
    color: {
      primary: "radix-state-checked:bg-primary-10",
      accent: "radix-state-checked:bg-accent-10",
      neutral: "radix-state-checked:bg-neutral-10",
    },
  },
  defaultVariants: {
    color: "neutral",
  },
});

const Switch = deriveClassed<
  typeof ClassedSwitchRoot,
  ComponentProps<typeof ClassedSwitchRoot>
>(({ ...props }, ref) => (
  <ClassedSwitchRoot ref={ref} {...props}>
    <SwitchPrimitive.Thumb
      className={cn(
        "group-radix-state-checked:translate-x-5",
        "group-radix-state-unchecked:translate-x-0",
        "pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
      )}
    />
  </ClassedSwitchRoot>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };

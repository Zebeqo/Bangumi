"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const switchVariant = cva("", {
  variants: {
    colorType: {
      primary: "radix-state-checked:bg-primary-10",
      accent: "radix-state-checked:bg-accent-10",
      neutral: "radix-state-checked:bg-neutral-10",
      success: "radix-state-checked:bg-success-10",
      error: "radix-state-checked:bg-error-10",
      info: "radix-state-checked:bg-info-10",
    },
  },
});

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    Required<VariantProps<typeof switchVariant>> {}
const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  Omit<SwitchProps, "children">
>(({ className, colorType, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      "group",
      switchVariant({ colorType }),
      "radix-state-unchecked:bg-neutral-4 dark:radix-state-unchecked:bg-gray-800",
      "relative inline-flex h-[24px] w-[44px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
      "focus:outline-none",
      className
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "group-radix-state-checked:translate-x-5",
        "group-radix-state-unchecked:translate-x-0",
        "pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
      )}
    />
  </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };

"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      "group",
      "radix-state-checked:bg-accent-10",
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

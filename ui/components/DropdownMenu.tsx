"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@heroicons/react/20/solid";
import { GhostButton } from "@/ui/components/Button";
import { classed } from "@/classed.config";

export type DropdownMenuColor = "primary" | "accent" | "neutral";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSeparator = classed(
  DropdownMenuPrimitive.Separator,
  "my-1 h-px bg-neutral-6"
);

const DropdownMenuRadioItem = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ children, className, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-neutral-11 outline-none focus:bg-neutral-4 active:bg-neutral-5",
      className
    )}
    {...props}
  >
    <span className="flex-grow text-sm">{children}</span>
    <DropdownMenuPrimitive.ItemIndicator>
      <CheckIcon className="h-4 w-4" />
    </DropdownMenuPrimitive.ItemIndicator>
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuContent = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      align="start"
      sideOffset={8}
      className={cn(
        "z-50 flex w-auto flex-col rounded-lg bg-neutral-1 px-2 py-2 text-accent-11 shadow-lg outline-none ring-1 ring-neutral-6 radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = classed(
  DropdownMenuPrimitive.Item,
  GhostButton,
  "w-full focus:bg-neutral-4 focus:ring-0"
);

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuItem,
  DropdownMenuRadioItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
};

"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@heroicons/react/20/solid";
import { GhostButton } from "@/ui/primitive/Button";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSeparator = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("my-1 h-px bg-neutral-6", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuRadioItem = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    {...props}
    className="flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-neutral-11 outline-none focus:bg-neutral-4 active:bg-neutral-5"
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
        "z-50 w-auto rounded-lg bg-neutral-1 px-2 py-2 shadow-lg outline-none ring-1 ring-neutral-6 radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

export interface MenuItem {
  label: string;
  handleSelect: () => void;
  icon?: React.ReactNode;
}
interface DropdownMenuSimpleContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {
  menuItems: MenuItem[];
}

const DropdownMenuContent_Simple = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuSimpleContentProps
>(({ menuItems, ...props }, ref) => (
  <DropdownMenuContent {...props} ref={ref}>
    {menuItems.map(({ label, handleSelect }, i) => (
      <DropdownMenuPrimitive.Item
        key={`${label}-${i}`}
        onSelect={handleSelect}
        className="outline-none"
      >
        <GhostButton colorType="neutral" className="w-full justify-start">
          <span className="mr-2 h-5 w-5">{menuItems[i].icon}</span>
          {label}
        </GhostButton>
      </DropdownMenuPrimitive.Item>
    ))}
  </DropdownMenuContent>
));
DropdownMenuContent_Simple.displayName =
  DropdownMenuPrimitive.Content.displayName;

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuContent,
  DropdownMenuContent_Simple,
  DropdownMenuSeparator,
};

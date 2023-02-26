"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@heroicons/react/20/solid";
import { ghostButton } from "@/ui/primitive/Button";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export type DropdownMenuColor = "primary" | "accent" | "neutral";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const dropdownMenuSeparator = cva("my-1 h-px", {
  variants: {
    colorVariant: {
      primary: "bg-primary-6",
      accent: "bg-accent-6",
      neutral: "bg-neutral-6",
    },
  },
});
interface DropdownMenuSeparatorProps
  extends React.ComponentPropsWithoutRef<
      typeof DropdownMenuPrimitive.Separator
    >,
    Required<VariantProps<typeof dropdownMenuSeparator>> {}
const DropdownMenuSeparator = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  DropdownMenuSeparatorProps
>(({ className, colorVariant, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn(
      dropdownMenuSeparator({ colorVariant: colorVariant }),
      className
    )}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const dropdownMenuRadioItem = cva(
  "flex w-full cursor-default select-none items-center rounded-md px-2 py-2 outline-none",
  {
    variants: {
      colorVariant: {
        primary: "text-primary-11 focus:bg-primary-4 active:bg-primary-5",
        accent: "text-accent-11 focus:bg-accent-4 active:bg-accent-5",
        neutral: "text-neutral-11 focus:bg-neutral-4 active:bg-neutral-5",
      },
    },
  }
);
interface DropdownMenuRadioItemProps
  extends React.ComponentPropsWithoutRef<
      typeof DropdownMenuPrimitive.RadioItem
    >,
    Required<VariantProps<typeof dropdownMenuRadioItem>> {}
const DropdownMenuRadioItem = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  DropdownMenuRadioItemProps
>(({ children, colorVariant, className, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      dropdownMenuRadioItem({ colorVariant: colorVariant }),
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

const dropdownMenuContent = cva(
  "flex flex-col z-50 w-auto rounded-lg px-2 py-2 shadow-lg outline-none ring-1 radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up",
  {
    variants: {
      colorVariant: {
        primary: "bg-primary-1 ring-primary-6 text-primary-11",
        accent: "bg-accent-1 ring-accent-6 text-accent-11",
        neutral: "bg-neutral-1 ring-neutral-6 text-neutral-11",
      },
    },
  }
);
interface DropdownMenuContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>,
    Required<VariantProps<typeof dropdownMenuContent>> {}
const DropdownMenuContent = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuContentProps
>(({ className, colorVariant, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      align="start"
      sideOffset={8}
      className={cn(
        dropdownMenuContent({ colorVariant: colorVariant }),
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
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuContent> {
  menuItems: MenuItem[];
}

const DropdownMenuContent_Simple = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  Omit<DropdownMenuSimpleContentProps, "children">
>(({ menuItems, colorVariant, ...props }, ref) => (
  <DropdownMenuContent ref={ref} colorVariant={colorVariant} {...props}>
    {menuItems.map(({ label, handleSelect }, i) => (
      <DropdownMenuPrimitive.Item
        key={`${label}-${i}`}
        onSelect={handleSelect}
        className={cn(
          ghostButton({ colorVariant: colorVariant }),
          "w-full focus:bg-neutral-4 focus:ring-0"
        )}
      >
        {menuItems[i].icon && (
          <span className="mr-2 h-5 w-5">{menuItems[i].icon}</span>
        )}
        {label}
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

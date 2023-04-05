"use client";

import * as SelectPrimitive from "@radix-ui/react-select";

import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import type { WithRequired } from "@/lib/utils";
import type { ButtonProps, ButtonType } from "@/ui/components/Button";
import { Button } from "@/ui/components/Button";
import type { ComponentProps } from "@tw-classed/react";
import { deriveClassed } from "@tw-classed/react";
import { classed } from "@/classed.config";

export type SelectColor = "primary" | "accent" | "neutral";

// ------------------------------ Export ------------------------------
const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectTrigger = deriveClassed<ButtonType, Omit<ButtonProps, "children">>(
  ({ ...props }, ref) => (
    <SelectPrimitive.Trigger asChild>
      <Button ref={ref} {...props}>
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon className="ml-2 h-5 w-5">
          <ChevronDownIcon />
        </SelectPrimitive.Icon>
      </Button>
    </SelectPrimitive.Trigger>
  )
);

interface SelectContentProps
  extends ComponentProps<typeof ClassedSelectContent> {
  color?: SelectColor;
}
const SelectContent = deriveClassed<
  typeof ClassedSelectContent,
  WithRequired<SelectContentProps, "children">
>(({ color = "neutral", children, ...props }, ref) => (
  <>
    <SelectTrigger variant="outline" color={color} />
    <SelectPrimitive.Portal>
      <ClassedSelectContent ref={ref} {...props}>
        <SelectScrollUpButton color={color}>
          <ChevronUpIcon className="h-5 w-5" />
        </SelectScrollUpButton>
        <SelectPrimitive.Viewport className="rounded-lg bg-neutral-1 py-2 px-3.5 shadow-lg">
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton color={color}>
          <ChevronDownIcon className="h-5 w-5" />
        </SelectScrollDownButton>
      </ClassedSelectContent>
    </SelectPrimitive.Portal>
  </>
));

const SelectItem = deriveClassed<
  typeof ClassedSelectItem,
  WithRequired<ComponentProps<typeof ClassedSelectItem>, "children">
>(({ children, ...props }, ref) => (
  <ClassedSelectItem ref={ref} {...props}>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
      <CheckIcon className="h-5 w-5" />
    </SelectPrimitive.ItemIndicator>
  </ClassedSelectItem>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

export { Select, SelectGroup, SelectTrigger, SelectContent, SelectItem };

// ------------------------------ Other ------------------------------

const SelectScrollUpButton = classed(SelectPrimitive.ScrollUpButton, {
  base: "flex items-center justify-center",
  variants: {
    color: {
      primary: "text-primary-11",
      accent: "text-accent-11",
      neutral: "text-neutral-11",
    },
  },
  defaultVariants: {
    color: "neutral",
  },
});

const SelectScrollDownButton = classed(
  SelectPrimitive.ScrollDownButton,
  SelectScrollUpButton
);

const ClassedSelectItem = classed(SelectPrimitive.Item, {
  base: "relative flex select-none items-center rounded-md px-8 py-2 font-medium outline-none",
  variants: {
    color: {
      primary: "text-primary-11 focus:bg-primary-4",
      accent: "text-accent-11 focus:bg-accent-4",
      neutral: "text-neutral-11 focus:bg-neutral-4",
    },
  },
  defaultVariants: {
    color: "neutral",
  },
});

const ClassedSelectContent = classed(SelectPrimitive.Content, "z-50");

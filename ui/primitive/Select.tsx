"use client";

import * as SelectPrimitive from "@radix-ui/react-select";

import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import type { ButtonVariantProps } from "@/ui/primitive/Button";
import { OutlineButton } from "@/ui/primitive/Button";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export type SelectColor = "primary" | "accent" | "neutral";
const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    Required<ButtonVariantProps> {}
const SelectTrigger = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ children, colorType, ...props }, ref) => (
  <SelectPrimitive.Trigger ref={ref} {...props} asChild>
    {children ?? (
      <OutlineButton ref={ref} colorType={colorType}>
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon className="ml-2 h-5 w-5">
          <ChevronDownIcon />
        </SelectPrimitive.Icon>
      </OutlineButton>
    )}
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const selectContent = cva("", {
  variants: {
    colorType: {
      primary: "text-primary-11",
      accent: "text-accent-11",
      neutral: "text-neutral-11",
    },
  },
});
interface SelectContentProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>,
    Required<VariantProps<typeof selectContent>> {}
const SelectContent = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(({ colorType, className, children, ...props }, ref) => (
  <>
    <SelectTrigger colorType={colorType} />
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn("z-50", className)}
        {...props}
      >
        <SelectPrimitive.ScrollUpButton
          className={cn(
            "flex items-center justify-center",
            selectContent({ colorType })
          )}
        >
          <ChevronUpIcon className="h-5 w-5" />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className="rounded-lg bg-neutral-1 p-2 shadow-lg">
          {children}
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton
          className={cn(
            "flex items-center justify-center",
            selectContent({ colorType })
          )}
        >
          <ChevronDownIcon className="h-5 w-5" />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  </>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

interface SelectOptionsContentProps
  extends React.ComponentPropsWithoutRef<typeof SelectContent> {
  options: string[];
}
const SelectOptionsContent = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectOptionsContentProps
>(({ className, options, ...props }, ref) => (
  <SelectContent ref={ref} className={cn("...", className)} {...props}>
    <SelectGroup>
      {options.map((value, index) => (
        <SelectItem
          colorType={props.colorType}
          key={`${value}-${index}`}
          value={value}
        >
          {value}
        </SelectItem>
      ))}
    </SelectGroup>
  </SelectContent>
));
SelectOptionsContent.displayName = SelectPrimitive.Content.displayName;

const selectItem = cva(
  "relative flex select-none items-center rounded-md px-8 py-2 font-medium outline-none",
  {
    variants: {
      colorType: {
        primary: "text-primary-11 focus:bg-primary-4",
        accent: "text-accent-11 focus:bg-accent-4",
        neutral: "text-neutral-11 focus:bg-neutral-4",
      },
    },
  }
);
interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>,
    Required<VariantProps<typeof selectItem>> {}
const SelectItem = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ className, colorType, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(selectItem({ colorType }), className)}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
      <CheckIcon className="h-5 w-5" />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

export {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectContent,
  SelectOptionsContent,
  SelectItem,
};

"use client";

import * as SelectPrimitive from "@radix-ui/react-select";

import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import type { Color } from "@/lib/colorWrapper";
import { OutlineButton } from "@/ui/primitive/Button";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  colorType?: Color;
}
const SelectTrigger = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ children, colorType = "accent", ...props }, ref) => (
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

const SelectContent = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <>
    <SelectTrigger />
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn("z-50", className)}
        {...props}
      >
        <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-neutral-11">
          <ChevronUpIcon className="h-5 w-5" />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className="rounded-lg bg-neutral-1 p-2 shadow-lg">
          {children}
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-neutral-11">
          <ChevronDownIcon className="h-5 w-5" />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  </>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

interface SelectOptionsContentProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
  options: string[];
}
const SelectOptionsContent = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectOptionsContentProps
>(({ className, options, ...props }, ref) => (
  <SelectContent ref={ref} className={cn("...", className)} {...props}>
    <SelectGroup>
      {options.map((value, index) => (
        <SelectItem key={`${value}-${index}`} value={value}>
          {value}
        </SelectItem>
      ))}
    </SelectGroup>
  </SelectContent>
));
SelectOptionsContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex select-none items-center rounded-md px-8 py-2 font-medium text-accent-11 outline-none focus:bg-accent-4",
      className
    )}
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

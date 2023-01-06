"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import type { CollectionType } from "@/lib/collection";
import { collectionTypeMap } from "@/lib/collection";
import { Button } from "@/ui/Button";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import { forwardRef } from "react";
import type { Color } from "@/lib/colorWrapper";
import { colorWrapper } from "@/lib/colorWrapper";

interface SelectProps {
  type: CollectionType;
  color: Color;
  handleSelect?: (value: string) => void;
}
export const CollectionTypeSelect = forwardRef<HTMLButtonElement, SelectProps>(
  ({ type, color, handleSelect, ...props }, ref) => {
    return (
      <SelectPrimitive.Root
        {...props}
        defaultValue={collectionTypeMap[type]}
        onValueChange={handleSelect}
      >
        <SelectPrimitive.Trigger asChild aria-label="Collection Type">
          <Button
            ref={ref}
            color={color}
            type={"outline"}
            icon={
              <SelectPrimitive.Icon>
                <ChevronDownIcon />
              </SelectPrimitive.Icon>
            }
            label={<SelectPrimitive.Value />}
            revert
          />
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Content className="z-50">
          <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-neutral-11">
            <ChevronUpIcon className="h-5 w-5" />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport className="rounded-lg bg-neutral-1 p-2 shadow-lg">
            <SelectPrimitive.Group>
              {Object.values(collectionTypeMap).map((value, index) => (
                <SelectPrimitive.Item
                  key={`${value}-${index}`}
                  value={value}
                  className={colorWrapper(
                    "relative flex select-none items-center rounded-md px-8 py-2 font-medium text-primary-11 outline-none focus:bg-primary-4",
                    color
                  )}
                >
                  <SelectPrimitive.ItemText>{value}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                    <CheckIcon className="h-5 w-5" />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Group>
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-neutral-11">
            <ChevronDownIcon className="h-5 w-5" />
          </SelectPrimitive.ScrollUpButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Root>
    );
  }
);

CollectionTypeSelect.displayName = "CollectionTypeSelect";

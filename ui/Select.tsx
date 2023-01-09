"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { Button } from "@/ui/Button";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import { cloneElement, forwardRef } from "react";
import type { Color } from "@/lib/colorWrapper";
import { colorWrapper } from "@/lib/colorWrapper";

interface SelectProps {
  defaultValue: string;
  selectMap: Record<string, string>;
  color: Color;
  handleValueChange?: (value: string) => void;
  textWrapper?: JSX.Element;
}
export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      defaultValue,
      selectMap,
      color,
      handleValueChange,
      textWrapper,
      ...props
    },
    ref
  ) => {
    return (
      <SelectPrimitive.Root
        {...props}
        defaultValue={defaultValue}
        onValueChange={handleValueChange}
      >
        <SelectPrimitive.Trigger asChild aria-label="Select">
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
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className="z-50">
            <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-neutral-11">
              <ChevronUpIcon className="h-5 w-5" />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport className="rounded-lg bg-neutral-1 p-2 shadow-lg">
              <SelectPrimitive.Group>
                {Object.values(selectMap).map((value, index) => (
                  <SelectPrimitive.Item
                    key={`${value}-${index}`}
                    value={value}
                    className={colorWrapper(
                      "relative flex select-none items-center rounded-md px-8 py-2 font-medium text-primary-11 outline-none focus:bg-primary-4",
                      color
                    )}
                  >
                    <SelectPrimitive.ItemText>
                      {textWrapper
                        ? cloneElement(textWrapper, { children: value })
                        : value}
                    </SelectPrimitive.ItemText>
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
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  }
);

Select.displayName = "Select";

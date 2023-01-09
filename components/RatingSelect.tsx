"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { Button } from "@/ui/Button";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { forwardRef } from "react";
import type { Color } from "@/lib/colorWrapper";
import { colorWrapper } from "@/lib/colorWrapper";

export type Rating = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const ratingMap = {
  0: "未评分",
  1: "(1) 不忍直视",
  2: "(2) 很差",
  3: "(3) 差",
  4: "(4) 较差",
  5: "(5) 不过不失",
  6: "(6) 还行",
  7: "(7) 推荐",
  8: "(8) 力荐",
  9: "(9) 神作",
  10: "(10) 超神作",
};
interface SelectProps {
  rating: Rating;
  color: Color;
  handleSelect: (value: string) => void;
}
export const RatingSelect = forwardRef<HTMLButtonElement, SelectProps>(
  ({ rating, color, handleSelect, ...props }, ref) => {
    return (
      <SelectPrimitive.Root
        {...props}
        defaultValue={ratingMap[rating]}
        onValueChange={handleSelect}
      >
        <SelectPrimitive.Trigger asChild aria-label="Rating">
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
                {Object.values(ratingMap).map((value, index) => (
                  <SelectPrimitive.Item
                    key={`${value}-${index}`}
                    value={value}
                    className={colorWrapper(
                      "relative flex select-none items-center rounded-md px-8 py-2 font-medium text-primary-11 outline-none focus:bg-primary-4",
                      color
                    )}
                  >
                    <SelectPrimitive.ItemText>
                      <span className="flex items-center space-x-1">
                        <StarIcon className="h-5 w-5" />
                        <span>{value}</span>
                      </span>
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

RatingSelect.displayName = "CollectionTypeSelect";

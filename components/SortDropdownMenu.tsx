"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ArrowsUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";

const sortRadioItems = [
  {
    name: "在看人数",
    value: "do",
  },
  {
    name: "评分人数",
    value: "count",
  },
  {
    name: "评分",
    value: "rating",
  },
];

const orderRadioItems = [
  {
    name: "升序",
    value: "asc",
  },
  {
    name: "降序",
    value: "desc",
  },
];
export function SortDropdownMenu() {
  const path = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSortSelect = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("sort", value);

    router.push(`${path ?? "/"}?${newSearchParams.toString()}`);
  };

  const handleOrderSelect = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("order", value);

    router.push(`${path ?? "/"}?${newSearchParams.toString()}`);
  };

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <button className="inline-flex items-center rounded-md border border-neutral-7 bg-neutral-1 px-4 py-2 font-medium text-neutral-11 outline-none hover:bg-neutral-4 active:bg-neutral-5 ">
          <span className="mr-2 h-5 w-5">
            <ArrowsUpDownIcon />
          </span>
          <span>排序</span>
        </button>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          align="end"
          sideOffset={4}
          className="w-36 rounded-xl border border-neutral-7 bg-white px-2 py-2 shadow-lg radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up dark:bg-black"
        >
          <DropdownMenuPrimitive.RadioGroup
            value={searchParams.get("sort") ?? "do"}
            onValueChange={handleSortSelect}
          >
            {sortRadioItems.map((item) => (
              <DropdownMenuPrimitive.RadioItem
                key={item.value}
                value={item.value}
                className="flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-neutral-11 outline-none hover:bg-neutral-4 active:bg-neutral-5"
              >
                <span className="flex-grow text-sm">{item.name}</span>
                <DropdownMenuPrimitive.ItemIndicator>
                  <CheckIcon className="h-4 w-4" />
                </DropdownMenuPrimitive.ItemIndicator>
              </DropdownMenuPrimitive.RadioItem>
            ))}
          </DropdownMenuPrimitive.RadioGroup>
          <DropdownMenuPrimitive.Separator className="my-1 h-px bg-neutral-6" />
          <DropdownMenuPrimitive.RadioGroup
            value={searchParams.get("order") ?? "desc"}
            onValueChange={handleOrderSelect}
          >
            {orderRadioItems.map((item) => (
              <DropdownMenuPrimitive.RadioItem
                key={item.value}
                value={item.value}
                className="flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-neutral-11 outline-none hover:bg-neutral-4 active:bg-neutral-5"
              >
                <span className="flex-grow text-sm">{item.name}</span>
                <DropdownMenuPrimitive.ItemIndicator>
                  <CheckIcon className="h-4 w-4" />
                </DropdownMenuPrimitive.ItemIndicator>
              </DropdownMenuPrimitive.RadioItem>
            ))}
          </DropdownMenuPrimitive.RadioGroup>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}

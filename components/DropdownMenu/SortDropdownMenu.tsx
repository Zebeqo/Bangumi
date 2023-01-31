"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { ArrowsUpDownIcon } from "@heroicons/react/20/solid";
import {
  DropdownMenu,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "@/ui/primitive/DropdownMenu";
import { OutlineButton } from "@/ui/primitive/Button";

const sortRadioItems = [
  {
    label: "在看人数",
    value: "do",
  },
  {
    label: "评分人数",
    value: "count",
  },
  {
    label: "评分",
    value: "rating",
  },
];

const orderRadioItems = [
  {
    label: "升序",
    value: "asc",
  },
  {
    label: "降序",
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <OutlineButton colorType={"neutral"} aria-label={"sort"}>
          <ArrowsUpDownIcon className="mr-2 h-5 w-5" />
          排序
        </OutlineButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        colorType={"neutral"}
        align="end"
        sideOffset={8}
        className="w-36"
      >
        <DropdownMenuRadioGroup
          value={searchParams.get("sort") ?? "do"}
          onValueChange={handleSortSelect}
        >
          {sortRadioItems.map(({ value, label }, index) => (
            <DropdownMenuRadioItem
              colorType={"neutral"}
              value={value}
              key={`${value}-${index}`}
            >
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator colorType={"neutral"} />
        <DropdownMenuRadioGroup
          value={searchParams.get("order") ?? "desc"}
          onValueChange={handleOrderSelect}
        >
          {orderRadioItems.map(({ value, label }, index) => (
            <DropdownMenuRadioItem
              colorType={"neutral"}
              value={value}
              key={`${value}-${index}`}
            >
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

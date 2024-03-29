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
} from "@/ui/components/DropdownMenu";
import { Button } from "@/ui/components/Button";

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
export function SortMenu() {
  const path = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSortSelect = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParams?.toString());
    newSearchParams.set("sort", value);

    router.push(`${path ?? "/"}?${newSearchParams.toString()}`);
  };

  const handleOrderSelect = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParams?.toString());
    newSearchParams.set("order", value);

    router.push(`${path ?? "/"}?${newSearchParams.toString()}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" aria-label={"sort-menu"}>
          <ArrowsUpDownIcon className="mr-2 h-5 w-5" />
          排序
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="w-36">
        <DropdownMenuRadioGroup
          value={searchParams?.get("sort") ?? "do"}
          onValueChange={handleSortSelect}
        >
          {sortRadioItems.map(({ value, label }, index) => (
            <DropdownMenuRadioItem value={value} key={`${value}-${index}`}>
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={searchParams?.get("order") ?? "desc"}
          onValueChange={handleOrderSelect}
        >
          {orderRadioItems.map(({ value, label }, index) => (
            <DropdownMenuRadioItem value={value} key={`${value}-${index}`}>
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

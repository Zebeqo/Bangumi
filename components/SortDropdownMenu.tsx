"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { ArrowsUpDownIcon } from "@heroicons/react/20/solid";
import { Button } from "@/ui/Button";
import {
  DropdownMenu,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "@/ui/primitive/DropdownMenu";

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
        <Button
          aria-label={"sort"}
          colorType={"neutral"}
          type={"outline"}
          label="排序"
          icon={<ArrowsUpDownIcon />}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="w-36">
        <DropdownMenuRadioGroup
          value={searchParams.get("sort") ?? "do"}
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
          value={searchParams.get("order") ?? "desc"}
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

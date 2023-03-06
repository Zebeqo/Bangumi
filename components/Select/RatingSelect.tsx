import { ratingMap } from "@/lib/map/ratingMap";
import { StarIcon } from "@heroicons/react/20/solid";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/ui/primitive/Select";

export const RatingSelect = (
  props: React.ComponentPropsWithoutRef<typeof Select>
) => (
  <Select {...props}>
    <SelectContent
      variant={{
        color: "accent",
      }}
    >
      <SelectGroup>
        {Object.values(ratingMap)
          .map((value) => value.name_cn)
          .map((value, index) => (
            <SelectItem
              variant={{
                color: "accent",
              }}
              value={value}
              key={index}
            >
              <span className="flex items-center space-x-1">
                <StarIcon className="h-5 w-5" /> <span>{value}</span>
              </span>
            </SelectItem>
          ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);

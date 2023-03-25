import { ratingEnum } from "@/lib/enum/ratingEnum";
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
        {Object.entries(ratingEnum).map(([key], index) => (
          <SelectItem
            variant={{
              color: "accent",
            }}
            key={`${key}-${index}`}
            value={key}
          >
            <span className="flex items-center space-x-1">
              <StarIcon className="h-5 w-5" /> <span>{key}</span>
            </span>
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);

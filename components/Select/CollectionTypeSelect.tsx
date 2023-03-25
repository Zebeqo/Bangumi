import { collectionTypeEnum } from "@/lib/enum/collectionTypeEnum";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/ui/primitive/Select";

export const CollectionTypeSelect = (
  props: React.ComponentPropsWithoutRef<typeof Select>
) => (
  <Select {...props}>
    <SelectContent
      variant={{
        color: "accent",
      }}
    >
      <SelectGroup>
        {Object.entries(collectionTypeEnum).map(([key, { label }], index) => (
          <SelectItem
            variant={{
              color: "accent",
            }}
            key={`${key}-${index}`}
            value={key}
          >
            {label}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);

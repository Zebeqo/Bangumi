import { collectionTypeMap } from "@/lib/map/collectionTypeMap";
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
    <SelectContent colorVariant="accent">
      <SelectGroup>
        {Object.values(collectionTypeMap)
          .map((value) => value.name_cn)
          .map((value, index) => (
            <SelectItem
              colorVariant="accent"
              key={`${value}-${index}`}
              value={value}
            >
              {value}
            </SelectItem>
          ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);

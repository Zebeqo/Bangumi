import { collectionTypeEnum } from "@/lib/enum/collectionTypeEnum";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/ui/components/Select";

export const CollectionTypeSelect = (
  props: React.ComponentPropsWithoutRef<typeof Select>
) => (
  <Select {...props}>
    <SelectContent color="accent">
      <SelectGroup>
        {Object.entries(collectionTypeEnum).map(([key, { label }], index) => (
          <SelectItem color="accent" key={`${key}-${index}`} value={key}>
            {label}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);

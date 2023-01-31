"use client";

import {
  useCollectionData,
  useCollectionMutation,
} from "@/hooks/use-collection";
import {
  ratingKeyScheme,
  ratingMap,
  ratingNameCNToTypeScheme,
} from "@/lib/map/ratingMap";
import { StarIcon } from "@heroicons/react/20/solid";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/ui/primitive/Select";

export const TextWrapper = ({ children }: { children?: React.ReactNode }) => (
  <span className="flex items-center space-x-1">
    <StarIcon className="h-5 w-5" />
    <span>{children}</span>
  </span>
);

export function RatingSelect({ subject_id }: { subject_id: number }) {
  const { data: collectionData } = useCollectionData(subject_id);
  const mutateCollection = useCollectionMutation();

  return (
    <>
      {collectionData && (
        <Select
          defaultValue={
            ratingMap[ratingKeyScheme.parse(collectionData.rate)].name_cn
          }
          onValueChange={(value: string) => {
            const rating = ratingNameCNToTypeScheme.parse(value);
            mutateCollection.mutate({
              mutateCollection: {
                rate: Number(rating),
              },
              subject_id: subject_id,
              description: value,
              subject_type: collectionData.subject.type,
              collection_type: collectionData.type,
            });
          }}
        >
          <SelectContent colorType={"accent"}>
            <SelectGroup>
              {Object.values(ratingMap)
                .map((value) => value.name_cn)
                .map((value, index) => (
                  <SelectItem colorType={"accent"} value={value} key={index}>
                    <span className="flex items-center space-x-1">
                      <StarIcon className="h-5 w-5" /> <span>{value}</span>
                    </span>
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    </>
  );
}

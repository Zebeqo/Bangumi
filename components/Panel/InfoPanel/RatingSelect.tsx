"use client";

import {
  useCollectionData,
  useCollectionMutation,
} from "@/hooks/use-collection";
import { Select } from "@/ui/Select";
import type { Rating } from "@/lib/collection";
import { ratingMap } from "@/lib/collection";
import { StarIcon } from "@heroicons/react/20/solid";

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
          color={"accent"}
          selectMap={ratingMap}
          defaultValue={ratingMap[collectionData.rate as Rating]}
          textWrapper={<TextWrapper />}
          handleValueChange={(value: string) => {
            const rating = Object.keys(ratingMap).find(
              (key) => ratingMap[Number(key) as Rating] === value
            );
            mutateCollection.mutate({
              mutateCollection: {
                rate: Number(rating) as Rating,
              },
              subject_id: subject_id,
              description: value,
            });
          }}
        />
      )}
    </>
  );
}

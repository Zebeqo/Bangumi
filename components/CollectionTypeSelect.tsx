"use client";

import {
  useCollectionData,
  useCollectionMutation,
} from "@/hooks/use-collection";
import { Select } from "@/ui/Select";
import type { CollectionType } from "@/lib/collection";
import { collectionTypeMap } from "@/lib/collection";

export function CollectionTypeSelect({ subject_id }: { subject_id: number }) {
  const collectionData = useCollectionData(subject_id);
  const mutateCollection = useCollectionMutation();

  return (
    <>
      {collectionData && (
        <Select
          color={"accent"}
          selectMap={collectionTypeMap}
          defaultValue={
            collectionTypeMap[collectionData.type as CollectionType]
          }
          handleValueChange={(value: string) => {
            const collection_type = Object.keys(collectionTypeMap).find(
              (key) =>
                collectionTypeMap[Number(key) as CollectionType] === value
            );
            mutateCollection.mutate({
              mutateCollection: {
                type: Number(collection_type) as CollectionType,
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

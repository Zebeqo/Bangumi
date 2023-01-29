"use client";

import {
  useCollectionData,
  useCollectionMutation,
} from "@/hooks/use-collection";
import {
  collectionNameCNToTypeScheme,
  collectionTypeKeyScheme,
  collectionTypeMap,
} from "@/lib/map/collectionTypeMap";
import { Select, SelectOptionsContent } from "@/ui/primitive/Select";

export function CollectionTypeSelect({ subject_id }: { subject_id: number }) {
  const { data: collectionData } = useCollectionData(subject_id);
  const mutateCollection = useCollectionMutation();

  return (
    <>
      {collectionData && (
        <Select
          defaultValue={
            collectionTypeMap[
              collectionTypeKeyScheme.parse(collectionData.type)
            ].name_cn
          }
          onValueChange={(value: string) => {
            const collection_type = collectionNameCNToTypeScheme.parse(value);
            mutateCollection.mutate({
              mutateCollection: {
                type: Number(collection_type),
              },
              subject_id: subject_id,
              subject_type: collectionData.subject.type,
              collection_type: collectionData.type,
              description: value,
            });
          }}
        >
          <SelectOptionsContent
            options={Object.values(collectionTypeMap).map(
              (value) => value.name_cn
            )}
          />
        </Select>
      )}
    </>
  );
}

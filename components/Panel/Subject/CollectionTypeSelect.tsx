"use client";

import {
  useCollectionData,
  useCollectionMutation,
} from "@/hooks/use-collection";
import { Select } from "@/ui/Select";
import {
  collectionNameCNToTypeScheme,
  collectionTypeKeyScheme,
  collectionTypeMap,
} from "@/lib/map/collectionTypeMap";

export function CollectionTypeSelect({ subject_id }: { subject_id: number }) {
  const { data: collectionData } = useCollectionData(subject_id);
  const mutateCollection = useCollectionMutation();

  return (
    <>
      {collectionData && (
        <Select
          color={"accent"}
          selectOptions={Object.values(collectionTypeMap).map(
            (value) => value.name_cn
          )}
          defaultValue={
            collectionTypeMap[
              collectionTypeKeyScheme.parse(collectionData.type)
            ].name_cn
          }
          handleValueChange={(value: string) => {
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
        />
      )}
    </>
  );
}

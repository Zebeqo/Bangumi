import {
  collectionTypeEnum,
  collectionTypeEnumKeySchema,
} from "@/lib/enum/collectionTypeEnum";

import { CollectionCardList } from "@/components/Card/CollectionCardList";
import { Suspense } from "react";
import { CardGridSkeleton } from "@/components/Skeleton/CardGridSkeleton";
import { CardGrid } from "@/components/Card/CardGrid";
import {
  subjectTypeEnum,
  subjectTypeEnumKeySchema,
} from "@/lib/enum/subjectTypeEnum";

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata({
  params,
}: {
  params: { collection_type: string; subject_type: string };
}) {
  const collectionTypeLabel =
    collectionTypeEnum[
      collectionTypeEnumKeySchema.parse(params.collection_type)
    ].label;

  const subjectTypeLabel =
    subjectTypeEnum[subjectTypeEnumKeySchema.parse(params.subject_type)].label;

  return {
    title: `${collectionTypeLabel} | ${subjectTypeLabel}`,
  };
}

export default function Page({
  params,
}: {
  params: { collection_type: string; subject_type: string };
}) {
  return (
    <Suspense fallback={<CardGridSkeleton />}>
      <CardGrid className="relative my-8">
        <CollectionCardList
          subject_type={
            subjectTypeEnum[subjectTypeEnumKeySchema.parse(params.subject_type)]
              .value
          }
          collection_type={
            collectionTypeEnum[
              collectionTypeEnumKeySchema.parse(params.collection_type)
            ].value
          }
        />
      </CardGrid>
    </Suspense>
  );
}

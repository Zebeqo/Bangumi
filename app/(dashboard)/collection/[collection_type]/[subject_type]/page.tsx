import {
  collectionTypeEnum,
  collectionTypeEnumKeySchema,
} from "@/lib/enum/collectionTypeEnum";

export const dynamicParams = false;

import { CollectionCardList } from "@/components/Card/CollectionCardList";
import { Suspense } from "react";
import { CardGridSkeleton } from "@/components/Skeleton/CardGridSkeleton";
import { CardGrid } from "@/components/Card/CardGrid";
import {
  subjectTypeEnum,
  subjectTypeEnumKeySchema,
} from "@/lib/enum/subjectTypeEnum";
import { objectKeys } from "@/lib/utils";

export function generateStaticParams() {
  return objectKeys(collectionTypeEnum).flatMap((collection_type) =>
    objectKeys(subjectTypeEnum).map((subject_type) => ({
      collection_type: collection_type,
      subject_type: subject_type,
    }))
  );
}

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

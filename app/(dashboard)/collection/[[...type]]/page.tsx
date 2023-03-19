export const dynamicParams = false;

import { CollectionCardList } from "@/components/Card/CollectionCardList";
import { subjectNameToTypeScheme } from "@/lib/api/subject";
import { Suspense } from "react";
import { CardGridSkeleton } from "@/components/Skeleton/CardGridSkeleton";
import { collectionNameToTypeScheme } from "@/lib/map/collectionTypeMap";
import { GridWrapper } from "@/components/GridWrapper";

// https://github.com/nextauthjs/next-auth/issues/5647#issuecomment-1342099364
// https://github.com/vercel/next.js/issues/44764
export function generateStaticParams() {
  return [
    { type: [] },
    { type: ["do"] },
    { type: ["do", "anime"] },
    { type: ["do", "book"] },
    { type: ["do", "music"] },
    { type: ["do", "game"] },
    { type: ["do", "real"] },
    { type: ["wish"] },
    { type: ["wish", "anime"] },
    { type: ["wish", "book"] },
    { type: ["wish", "music"] },
    { type: ["wish", "game"] },
    { type: ["wish", "real"] },
    { type: ["collect"] },
    { type: ["collect", "anime"] },
    { type: ["collect", "book"] },
    { type: ["collect", "music"] },
    { type: ["collect", "game"] },
    { type: ["collect", "real"] },
    { type: ["on_hold"] },
    { type: ["on_hold", "anime"] },
    { type: ["on_hold", "book"] },
    { type: ["on_hold", "music"] },
    { type: ["on_hold", "game"] },
    { type: ["on_hold", "real"] },
    { type: ["dropped"] },
    { type: ["dropped", "anime"] },
    { type: ["dropped", "book"] },
    { type: ["dropped", "music"] },
    { type: ["dropped", "game"] },
    { type: ["dropped", "real"] },
  ];
}
export default function Page({ params }: { params: { type?: string[] } }) {
  const collection_type = params.type?.at(0) ?? "do";
  const subject_type = params.type?.at(1) ?? "anime";

  return (
    <Suspense fallback={<CardGridSkeleton />}>
      <GridWrapper className="relative my-8">
        <CollectionCardList
          subject_type={Number(subjectNameToTypeScheme.parse(subject_type))}
          collection_type={Number(
            collectionNameToTypeScheme.parse(collection_type)
          )}
        />
      </GridWrapper>
    </Suspense>
  );
}

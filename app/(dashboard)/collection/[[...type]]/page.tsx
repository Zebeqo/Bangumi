// export const dynamicParams = false;

import { notFound } from "next/navigation";
import { CollectionCardList } from "@/components/CollectionCardList";
import { subjectNameToTypeScheme } from "@/lib/subject";
import { Suspense } from "react";
import { CardGridSkeleton } from "@/ui/CardGridSkeleton";
import { collectionNameToTypeScheme } from "@/lib/map/collectionTypeMap";

// https://github.com/nextauthjs/next-auth/issues/5647#issuecomment-1342099364
// https://github.com/vercel/next.js/issues/44764
// export function generateStaticParams() {
//   return [
//     { type: [] },
//     { type: ["do"] },
//     { type: ["wish"] },
//     { type: ["collect"] },
//     { type: ["on_hold"] },
//     { type: ["dropped"] },
//   ];
// }
export default function Page({
  params,
}: {
  params: { type?: undefined } | { type: string[] };
}) {
  // compromise
  if (
    ![undefined, "do", "wish", "collect", "on_hold", "dropped"].includes(
      params.type?.at(0)
    )
  ) {
    notFound();
  }

  const collection_type = params.type?.at(0) ?? "do";
  const subject_type = params.type?.at(1) ?? "anime";

  return (
    <Suspense fallback={<CardGridSkeleton />}>
      <CollectionCardList
        subject_type={Number(subjectNameToTypeScheme.parse(subject_type))}
        collection_type={Number(
          collectionNameToTypeScheme.parse(collection_type)
        )}
      />
    </Suspense>
  );
}

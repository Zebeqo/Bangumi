// export const dynamicParams = false;

import { notFound } from "next/navigation";
import { CollectionCardList } from "@/components/CollectionCardList";
import { collectionTypeEnum, collectionTypeEnumScheme } from "@/lib/collection";
import { subjectTypeEnum, subjectTypeEnumScheme } from "@/lib/subject";
import { Suspense } from "react";
import { CardSkeleton } from "@/components/CardSkeleton";

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
    <Suspense
      fallback={
        <div className="relative grid animate-pulse grid-cols-1 justify-items-center gap-12 py-8 px-12 xl:grid-cols-2 min-[1800px]:grid-cols-3 min-[2400px]:grid-cols-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      }
    >
      <CollectionCardList
        subject_type={
          subjectTypeEnum[subjectTypeEnumScheme.parse(subject_type)].id
        }
        collection_type={
          collectionTypeEnum[collectionTypeEnumScheme.parse(collection_type)].id
        }
      />
    </Suspense>
  );
}

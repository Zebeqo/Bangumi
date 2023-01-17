// export const dynamicParams = false;

import { notFound } from "next/navigation";
import { CollectionCardList } from "@/components/CollectionCardList";
import { collectionTypeEnum, collectionTypeEnumScheme } from "@/lib/collection";
import { subjectTypeEnum, subjectTypeEnumScheme } from "@/lib/subject";

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
    <CollectionCardList
      subject_type={
        subjectTypeEnum[subjectTypeEnumScheme.parse(subject_type)].id
      }
      collection_type={
        collectionTypeEnum[collectionTypeEnumScheme.parse(collection_type)].id
      }
    />
  );
}

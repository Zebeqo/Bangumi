export const dynamicParams = false;

import { CollectionCardList } from "@/components/Card/CollectionCardList";
import { subjectNameToTypeScheme } from "@/lib/api/subject";
import { Suspense } from "react";
import { CardGridSkeleton } from "@/components/Skeleton/CardGridSkeleton";
import { collectionNameToTypeScheme } from "@/lib/map/collectionTypeMap";
import { CardGridWrapper } from "@/components/Card/CardGridWrapper";

// https://github.com/nextauthjs/next-auth/issues/5647#issuecomment-1342099364
// https://github.com/vercel/next.js/issues/44764
export function generateStaticParams() {
  return ["do", "wish", "collect", "on_hold", "dropped"].flatMap((collection) =>
    ["anime", "book", "music", "game", "real"].map((subject) => ({
      collection_type: collection,
      subject_type: subject,
    }))
  );
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata({
  params,
}: {
  params: { collection_type: string; subject_type: string };
}) {
  const collectionTypeName =
    params.collection_type === "do"
      ? "在看"
      : params.collection_type === "wish"
      ? "想看"
      : params.collection_type === "collect"
      ? "看过"
      : params.collection_type === "on_hold"
      ? "搁置"
      : params.collection_type === "dropped"
      ? "抛弃"
      : "";

  const subjectTypeValue =
    params.subject_type === "anime"
      ? "动画"
      : params.subject_type === "book"
      ? "书籍"
      : params.subject_type === "music"
      ? "音乐"
      : params.subject_type === "game"
      ? "游戏"
      : params.subject_type === "real"
      ? "三次元"
      : "";

  return {
    title: `${collectionTypeName} | ${subjectTypeValue}`,
  };
}
export default function Page({
  params,
}: {
  params: { collection_type: string; subject_type: string };
}) {
  return (
    <Suspense fallback={<CardGridSkeleton />}>
      <CardGridWrapper className="relative my-8">
        <CollectionCardList
          subject_type={Number(
            subjectNameToTypeScheme.parse(params.subject_type)
          )}
          collection_type={Number(
            collectionNameToTypeScheme.parse(params.collection_type)
          )}
        />
      </CardGridWrapper>
    </Suspense>
  );
}

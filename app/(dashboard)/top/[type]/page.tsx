export const dynamicParams = false;

import { CardServer } from "@/components/Card/CardServer";
import { CardGridWrapper } from "@/components/Card/CardGridWrapper";
import { subjectNameToTypeScheme } from "@/lib/api/subject";
import { searchResultScheme } from "@/lib/api/search";

// https://github.com/nextauthjs/next-auth/issues/5647#issuecomment-1342099364
// https://github.com/vercel/next.js/issues/44764
export function generateStaticParams() {
  return [
    { type: "anime" },
    { type: "book" },
    { type: "music" },
    { type: "game" },
    { type: "real" },
  ];
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata({
  params,
}: {
  params: { type: string };
}) {
  const typeValue =
    params.type === "anime"
      ? "动画"
      : params.type === "book"
      ? "书籍"
      : params.type === "music"
      ? "音乐"
      : params.type === "game"
      ? "游戏"
      : params.type === "real"
      ? "三次元"
      : "";

  return {
    title: `${typeValue}排行`,
  };
}

async function getRankData(type: string) {
  return searchResultScheme.parse(
    await fetch(`https://api.bgm.tv/v0/search/subjects?limit=50&offset=0`, {
      method: "POST",
      headers: {
        "User-Agent": "Zebeqo/bangumi-app (https://github.com/Zebeqo/Bangumi)",
      },
      body: JSON.stringify({
        keyword: "",
        sort: "rank",
        filter: {
          type: [Number(subjectNameToTypeScheme.parse(type))],
          rank: [">0"],
        },
      }),
      next: {
        revalidate: 3600,
      },
    }).then((res) => res.json())
  );
}
export default async function Page({ params }: { params: { type: string } }) {
  const rankData = await getRankData(params.type);

  return (
    <CardGridWrapper>
      {rankData.data.map(({ id }) => (
        /* @ts-expect-error Server Component */
        <CardServer key={id} subject_id={id} showCollectionNumber />
      ))}
    </CardGridWrapper>
  );
}

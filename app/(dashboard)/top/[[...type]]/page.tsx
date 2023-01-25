// export const dynamicParams = false;

import { notFound } from "next/navigation";
import { Card } from "@/components/Card";
import { GridWrapper } from "@/ui/GridWrapper";
import { subjectNameToTypeScheme } from "@/lib/subject";
import { searchResultScheme } from "@/lib/search";

// https://github.com/nextauthjs/next-auth/issues/5647#issuecomment-1342099364
// https://github.com/vercel/next.js/issues/44764
// export function generateStaticParams() {
//   return [
//     { type: [] },
//     { type: ["anime"] },
//     { type: ["book"] },
//     { type: ["music"] },
//     { type: ["game"] },
//     { type: ["real"] },
//   ];
// }

async function getRankData(type: string) {
  return searchResultScheme.parse(
    await fetch(`https://api.bgm.tv/v0/search/subjects?limit=50&offset=0`, {
      method: "POST",
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
export default async function Page({
  params,
}: {
  params: { type?: undefined } | { type: string[] };
}) {
  // compromise
  if (
    ![undefined, "anime", "book", "music", "game", "real"].includes(
      params.type?.at(0)
    )
  ) {
    notFound();
  }

  const type = params.type?.at(0) ?? "anime";

  const rankData = await getRankData(type);

  return (
    <GridWrapper>
      {rankData.data.map(({ id }) => (
        /* @ts-expect-error Server Component */
        <Card key={id} subject_id={id} showCollectionNumber />
      ))}
    </GridWrapper>
  );
}

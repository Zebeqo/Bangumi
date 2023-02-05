// export const dynamicParams = false;

import { notFound } from "next/navigation";
import { CardSSR } from "@/components/Card/CardSSR";
import * as cheerio from "cheerio";
import { GridWrapper } from "@/components/GridWrapper";

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

async function scrapeHotHtml(type: string) {
  return await fetch(`https://bgm.tv/${type}`, {
    next: {
      revalidate: 3600,
    },
  }).then((res) => res.text());
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

  const html = await scrapeHotHtml(type);
  const $ = cheerio.load(html);

  const list1 = [
    ...Array.from(
      new Set(
        $(".mediumImageChart")
          .html()
          ?.match(/\/subject\/\d+/g)
      )
    ),
  ];
  const list2 = [
    ...Array.from(
      new Set(
        $("#chl_subitem")
          .html()
          ?.match(/\/subject\/\d+/g)
      )
    ),
  ];
  const list = list1.concat(list2).map((item) => item.replace("/subject/", ""));

  return (
    <GridWrapper>
      {list.map((id) => (
        /* @ts-expect-error Server Component */
        <CardSSR key={id} subject_id={id} collectionInfoItemType={"doing"} />
      ))}
    </GridWrapper>
  );
}

export const dynamicParams = false;

import { CardServer } from "@/components/Card/CardServer";
import * as cheerio from "cheerio";
import { GridWrapper } from "@/components/GridWrapper";

// https://github.com/nextauthjs/next-auth/issues/5647#issuecomment-1342099364
// https://github.com/vercel/next.js/issues/44764
export function generateStaticParams() {
  return [
    { type: [] },
    { type: ["anime"] },
    { type: ["book"] },
    { type: ["music"] },
    { type: ["game"] },
    { type: ["real"] },
  ];
}

async function scrapeHotHtml(type: string) {
  return await fetch(`https://bgm.tv/${type}`, {
    headers: {
      "User-Agent": "Zebeqo/bangumi-app (https://github.com/Zebeqo/Bangumi)",
    },
    next: {
      revalidate: 3600,
    },
  }).then((res) => res.text());
}
export default async function Page({
  params,
}: {
  params: { type?: string[] };
}) {
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
        <CardServer key={id} subject_id={id} countType={"doing"} />
      ))}
    </GridWrapper>
  );
}

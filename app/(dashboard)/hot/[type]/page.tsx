import { objectKeys } from "@/lib/utils";

export const dynamicParams = false;

import {
  subjectTypeEnum,
  subjectTypeEnumKeySchema,
} from "@/lib/enum/subjectTypeEnum";
import { CardServer } from "@/components/Card/CardServer";
import * as cheerio from "cheerio";
import { CardGrid } from "@/components/Card/CardGrid";

export function generateStaticParams() {
  return objectKeys(subjectTypeEnum).map((key) => ({ type: key }));
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata({
  params,
}: {
  params: { type: string };
}) {
  const subjectTypeLabel =
    subjectTypeEnum[subjectTypeEnumKeySchema.parse(params.type)].label;

  return {
    title: `热门${subjectTypeLabel}`,
  };
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
export default async function Page({ params }: { params: { type: string } }) {
  const html = await scrapeHotHtml(params.type);
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
    <CardGrid>
      {list.map((id) => (
        /* @ts-expect-error Server Component */
        <CardServer key={id} subject_id={Number(id)} countType={"doing"} />
      ))}
    </CardGrid>
  );
}

import {
  subjectTypeEnum,
  subjectTypeEnumKeySchema,
} from "@/lib/enum/subjectTypeEnum";

export const dynamicParams = false;

import { CardServer } from "@/components/Card/CardServer";
import { CardGridWrapper } from "@/components/Card/CardGridWrapper";
import { searchResultScheme } from "@/lib/api/search";
import { objectKeys } from "@/lib/utils";

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
    title: `${subjectTypeLabel}排行`,
  };
}

async function getRankData(type: number) {
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
          type: [type],
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
  const rankData = await getRankData(
    subjectTypeEnum[subjectTypeEnumKeySchema.parse(params.type)].value
  );

  return (
    <CardGridWrapper>
      {rankData.data.map(({ id }) => (
        /* @ts-expect-error Server Component */
        <CardServer key={id} subject_id={id} showCollectionNumber />
      ))}
    </CardGridWrapper>
  );
}

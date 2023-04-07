import {
  subjectTypeEnum,
  subjectTypeEnumKeySchema,
} from "@/lib/enum/subjectTypeEnum";

import { CardServer } from "@/components/Card/CardServer";
import { CardGrid } from "@/components/Card/CardGrid";
import { searchResultScheme } from "@/lib/api/search";

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
    <CardGrid>
      {rankData.data.map(({ id }) => (
        /* @ts-expect-error Server Component */
        <CardServer key={id} subject_id={id} />
      ))}
    </CardGrid>
  );
}

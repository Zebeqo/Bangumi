"use client";

import type { personScheme, subjectPersonsScheme } from "@/lib/api/person";
import {
  AvatarCard,
  AvatarCardBadge,
  AvatarCardContent,
  AvatarCardImage,
  AvatarCardInfo,
  AvatarCardInfoItem,
  AvatarCardInfoItemName,
} from "@/ui/components/AvatarCard";
import type { z } from "zod";

export function PersonAvatarCard({
  subjectPersonData,
  personData,
}: {
  subjectPersonData: z.infer<typeof subjectPersonsScheme>[number];
  personData: z.infer<typeof personScheme>;
}) {
  return (
    <AvatarCard>
      <AvatarCardBadge color="success">
        {personData.stat.comments}
      </AvatarCardBadge>
      <AvatarCardContent>
        <AvatarCardImage
          src={personData.images.medium}
          alt="Avatar"
          href={`https://bgm.tv/person/${subjectPersonData.id}`}
        />
        <AvatarCardInfo>
          <AvatarCardInfoItem relation={subjectPersonData.relation}>
            <AvatarCardInfoItemName
              title={
                (personData.infobox.find((item) => item.key === "简体中文名")
                  ?.value as string | undefined) ?? personData.name
              }
            >
              {(personData.infobox.find((item) => item.key === "简体中文名")
                ?.value as string | undefined) ?? personData.name}
            </AvatarCardInfoItemName>
          </AvatarCardInfoItem>
        </AvatarCardInfo>
      </AvatarCardContent>
    </AvatarCard>
  );
}

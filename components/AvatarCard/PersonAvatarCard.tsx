"use client";

import { usePersonData } from "@/hooks/use-person";
import {
  AvatarCard,
  AvatarCardBadge,
  AvatarCardContent,
  AvatarCardImage,
  AvatarCardInfo,
  AvatarCardInfoItem,
  AvatarCardInfoItemName,
} from "@/ui/primitive/AvatarCard";

// FIXME: 分页 API 无法获取全部所需数据
export function PersonAvatarCard({
  id,
  relation,
}: {
  id: number;
  relation: string;
}) {
  const { data: personData } = usePersonData(id);

  return (
    <>
      {personData && (
        <AvatarCard>
          <AvatarCardBadge colorVariant={"success"}>
            {personData.stat.comments}
          </AvatarCardBadge>
          <AvatarCardContent>
            <AvatarCardImage
              src={personData.images.medium}
              alt="Avatar"
              onClick={() => {
                window.open(`https://bgm.tv/person/${id}`, "_blank");
              }}
            />
            <AvatarCardInfo>
              <AvatarCardInfoItem relation={relation}>
                <AvatarCardInfoItemName
                  title={
                    (personData.infobox.find(
                      (item) => item.key === "简体中文名"
                    )?.value as string | undefined) ?? personData.name
                  }
                >
                  {(personData.infobox.find((item) => item.key === "简体中文名")
                    ?.value as string | undefined) ?? personData.name}
                </AvatarCardInfoItemName>
              </AvatarCardInfoItem>
            </AvatarCardInfo>
          </AvatarCardContent>
        </AvatarCard>
      )}
    </>
  );
}

"use client";

import { useCharacterData } from "@/hooks/use-character";
import {
  AvatarCard,
  AvatarCardBadge,
  AvatarCardContent,
  AvatarCardImage,
  AvatarCardInfo,
  AvatarCardInfoItem,
  AvatarCardInfoItemName,
} from "@/ui/components/AvatarCard";

// FIXME: 分页 API 无法获取全部所需数据
export function CharacterAvatarCard({
  character_id,
  character_relation,
  actors,
}: {
  character_id: number;
  character_relation: string;
  actors: { id: number; name: string }[];
}) {
  const { data: characterData } = useCharacterData(character_id);

  return (
    <>
      {characterData && (
        <AvatarCard>
          <AvatarCardBadge color="success">
            {characterData.stat.comments}
          </AvatarCardBadge>
          <AvatarCardContent>
            <AvatarCardImage
              src={characterData.images.medium}
              alt="Avatar"
              onClick={() => {
                window.open(
                  `https://bgm.tv/character/${character_id}`,
                  "_blank"
                );
              }}
            />
            <AvatarCardInfo>
              <AvatarCardInfoItem relation={character_relation}>
                <AvatarCardInfoItemName
                  title={
                    (characterData.infobox.find(
                      (item) => item.key === "简体中文名"
                    )?.value as string | undefined) ?? characterData.name
                  }
                >
                  {(characterData.infobox.find(
                    (item) => item.key === "简体中文名"
                  )?.value as string | undefined) ?? characterData.name}
                </AvatarCardInfoItemName>
              </AvatarCardInfoItem>
              <AvatarCardInfoItem relation="CV">
                <div className="flex flex-col space-y-1">
                  {actors.map((actor, index) => (
                    <div key={actor.id}>
                      <AvatarCardInfoItemName title={actor.name}>
                        <span
                          className="cursor-pointer hover:text-accent-11"
                          onClick={() => {
                            window.open(
                              `https://bgm.tv/person/${actor.id}`,
                              "_blank"
                            );
                          }}
                        >
                          {actor.name}
                        </span>
                        <span className="select-none">
                          {index !== actors.length - 1 && "  /"}
                        </span>
                      </AvatarCardInfoItemName>
                    </div>
                  ))}
                </div>
              </AvatarCardInfoItem>
            </AvatarCardInfo>
          </AvatarCardContent>
        </AvatarCard>
      )}
    </>
  );
}

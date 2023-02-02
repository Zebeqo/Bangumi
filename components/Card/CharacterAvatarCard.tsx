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
} from "@/ui/primitive/AvatarCard";

export function CharacterAvatarCard({
  character_id,
  character_relation,
  actors,
  onClick,
}: {
  character_id: number;
  character_relation: string;
  actors: { id: number; name: string }[];
  onClick?: () => void;
}) {
  const { data: characterData } = useCharacterData(character_id);

  return (
    <>
      {characterData && (
        <AvatarCard>
          <AvatarCardBadge colorType={"success"}>
            {characterData.stat.comments}
          </AvatarCardBadge>
          <AvatarCardContent>
            <AvatarCardImage
              src={
                characterData.images?.medium ||
                "https://avatars.githubusercontent.com/u/7521082"
              }
              alt="Avatar"
              onClick={onClick}
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

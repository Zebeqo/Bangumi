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
import type { subjectCharactersScheme } from "@/lib/api/character";
import type { characterScheme } from "@/lib/api/character";

export function CharacterAvatarCard({
  subjectCharacterData,
  characterData,
}: {
  subjectCharacterData: z.infer<typeof subjectCharactersScheme>[number];
  characterData: z.infer<typeof characterScheme>;
}) {
  return (
    <AvatarCard>
      <AvatarCardBadge color="success">
        {characterData.stat.comments}
      </AvatarCardBadge>
      <AvatarCardContent>
        <AvatarCardImage
          src={characterData.images.medium}
          alt="Avatar"
          href={`https://bgm.tv/character/${subjectCharacterData.id}`}
        />
        <AvatarCardInfo>
          <AvatarCardInfoItem relation={subjectCharacterData.relation}>
            <AvatarCardInfoItemName
              title={
                (characterData.infobox.find((item) => item.key === "简体中文名")
                  ?.value as string | undefined) ?? characterData.name
              }
            >
              {(characterData.infobox.find((item) => item.key === "简体中文名")
                ?.value as string | undefined) ?? characterData.name}
            </AvatarCardInfoItemName>
          </AvatarCardInfoItem>
          <AvatarCardInfoItem relation="CV">
            <div className="flex flex-col space-y-1">
              {subjectCharacterData.actors.map((actor, index) => (
                <div key={actor.id}>
                  <AvatarCardInfoItemName title={actor.name}>
                    <a
                      className="cursor-pointer hover:text-accent-11"
                      href={`https://bgm.tv/person/${actor.id}`}
                      target="_blank"
                    >
                      {actor.name}
                    </a>
                    <span className="select-none">
                      {index !== subjectCharacterData.actors.length - 1 &&
                        "  /"}
                    </span>
                  </AvatarCardInfoItemName>
                </div>
              ))}
            </div>
          </AvatarCardInfoItem>
        </AvatarCardInfo>
      </AvatarCardContent>
    </AvatarCard>
  );
}

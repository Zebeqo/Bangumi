"use client";

import Image from "next/image";
import { useCharacterData } from "@/hooks/use-character";
import { CommentBadge } from "@/ui/CommentBadge";

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
        <div className="relative rounded-md bg-neutral-3 px-4 py-6 hover:bg-neutral-5">
          <CommentBadge
            count={characterData.stat.comments}
            className="absolute top-2 right-2 z-10"
          />
          <div className="flex flex-col space-y-4">
            <div className="relative h-32 w-32 self-center overflow-hidden rounded-full">
              <Image
                className="cursor-pointer object-cover object-top"
                src={
                  characterData.images?.medium ||
                  "https://avatars.githubusercontent.com/u/7521082"
                }
                alt="Avatar"
                fill={true}
                unoptimized={true}
                onClick={onClick}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex space-x-1">
                <span className="whitespace-nowrap text-xs text-neutral-11">
                  {character_relation}:
                </span>
                <span
                  data-testid="character-name"
                  className="truncate text-xs font-medium text-neutral-12"
                  title={
                    (characterData.infobox.find(
                      (item) => item.key === "简体中文名"
                    )?.value as string | undefined) ?? characterData.name
                  }
                >
                  {(characterData.infobox.find(
                    (item) => item.key === "简体中文名"
                  )?.value as string | undefined) ?? characterData.name}
                </span>
              </div>
              <div className="flex space-x-1">
                <span className="whitespace-nowrap text-xs text-neutral-11">
                  CV:
                </span>

                <span>
                  {actors.map(({ name, id }, index) => (
                    <div
                      key={id}
                      className="truncate whitespace-pre-wrap text-xs font-medium text-neutral-12 "
                      title={name}
                    >
                      <span
                        className="cursor-pointer hover:text-accent-11"
                        onClick={() => {
                          window.open(`https://bgm.tv/person/${id}`, "_blank");
                        }}
                      >
                        {name}
                      </span>
                      <span className="select-none">
                        {index !== actors.length - 1 && "  /"}
                      </span>
                    </div>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

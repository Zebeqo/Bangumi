"use client";

import Image from "next/image";
import { useCharacterData } from "@/hooks/use-character";
import { Button } from "@/ui/Button";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";

export function AvatarCard({
  character_id,
  character_relation,
  actor_names,
}: {
  character_id: number;
  character_relation: string;
  actor_names: string[];
}) {
  const { data: characterData } = useCharacterData(character_id);

  return (
    <>
      {characterData && (
        <div className="relative rounded-md bg-neutral-3 px-4 py-6">
          <Button
            colorType={"success"}
            type={"secondary"}
            label={characterData.stat.comments}
            icon={<ChatBubbleLeftRightIcon />}
            iconClassName={"w-4 h-4 mr-1"}
            className="absolute top-2 right-2 z-10 rounded-full px-3 text-xs"
          />
          <div className="flex flex-col space-y-4">
            <div className="relative h-32 w-32 self-center overflow-hidden rounded-full">
              <Image
                className="cursor-pointer object-cover object-top"
                src={
                  characterData.images.medium ||
                  "https://avatars.githubusercontent.com/u/7521082"
                }
                alt="Avatar"
                fill={true}
                unoptimized={true}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex space-x-1">
                <span className="whitespace-nowrap text-xs text-neutral-11">
                  {character_relation}:
                </span>
                <span className="cursor-pointer truncate text-xs font-medium text-neutral-12 hover:text-accent-11">
                  {(characterData.infobox.find(
                    (item) => item.key === "简体中文名"
                  )?.value as string | undefined) ?? characterData.name}
                </span>
              </div>
              <div className="flex space-x-1">
                <span className="whitespace-nowrap text-xs text-neutral-11">
                  CV:
                </span>
                <span className="cursor-pointer whitespace-pre-wrap text-xs font-medium text-neutral-12 hover:text-accent-11">
                  {actor_names.join(" /\n")}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

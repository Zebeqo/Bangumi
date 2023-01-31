"use client";

import Image from "next/image";
import { usePersonData } from "@/hooks/use-person";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";
import { Badge } from "@/ui/primitive/Badge";

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
        <div className="relative rounded-md bg-neutral-3 px-4 py-6 hover:bg-neutral-5">
          <Badge
            colorType={"success"}
            className="absolute top-2 right-2 z-10 rounded-full py-2"
          >
            <ChatBubbleLeftRightIcon className="mr-1 h-4 w-4" />
            {personData.stat.comments}
          </Badge>
          <div className="flex flex-col space-y-4">
            <div className="relative h-32 w-32 self-center overflow-hidden rounded-full">
              <Image
                className="cursor-pointer object-cover object-top"
                src={
                  personData.images?.medium ||
                  "https://avatars.githubusercontent.com/u/7521082"
                }
                alt="Avatar"
                fill={true}
                unoptimized={true}
                onClick={() => {
                  window.open(`https://bgm.tv/person/${id}`, "_blank");
                }}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex space-x-1">
                <span className="whitespace-nowrap text-xs text-neutral-11">
                  {relation}:
                </span>
                <span
                  data-testid="person-name"
                  className="truncate text-xs font-medium text-neutral-12 "
                  title={
                    (personData.infobox.find(
                      (item) => item.key === "简体中文名"
                    )?.value as string | undefined) ?? personData.name
                  }
                >
                  {(personData.infobox.find((item) => item.key === "简体中文名")
                    ?.value as string | undefined) ?? personData.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

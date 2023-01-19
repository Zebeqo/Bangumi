"use client";

import type { z } from "zod";
import type { episodesPageScheme } from "@/lib/episode";
import { Button } from "@/ui/Button";
import { cn } from "@/lib/utils";
import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
} from "@heroicons/react/20/solid";
import { useCollectionData } from "@/hooks/use-collection";
import { useEpisodeMutation } from "@/hooks/use-episode";
import { useToast } from "@/hooks/use-toast";

export function EPListItemList({
  episodesData,
  subject_id,
}: {
  episodesData?: z.infer<typeof episodesPageScheme>["data"];
  subject_id: number;
}) {
  const { data: collectionData } = useCollectionData(subject_id);
  const mutateEpisode = useEpisodeMutation();
  const openToast = useToast();
  return (
    <>
      {episodesData?.map((episodeData) => (
        <EPItem
          key={episodeData.ep}
          episodeData={episodeData}
          isSelected={
            collectionData ? episodeData.ep <= collectionData.ep_status : false
          }
          onClickIndex={() => {
            if (collectionData) {
              collectionData.ep_status === episodeData.ep
                ? mutateEpisode.mutate({
                    subject_id,
                    currentEp: collectionData.ep_status,
                    targetEp: episodeData.ep - 1,
                  })
                : mutateEpisode.mutate({
                    subject_id,
                    currentEp: collectionData.ep_status,
                    targetEp: episodeData.ep,
                  });
            } else {
              openToast({
                type: "info",
                title: "请先收藏该条目",
              });
            }
          }}
        />
      ))}
    </>
  );
}

function EPItem({
  episodeData,
  isSelected,
  onClickIndex,
}: {
  episodeData: z.infer<typeof episodesPageScheme.shape.data.element>;
  isSelected: boolean;
  onClickIndex?: () => void;
}) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex items-center space-x-4 p-2">
        <Button
          colorType={"neutral"}
          type={isSelected ? "selected" : "ghost"}
          label={episodeData.ep}
          onClick={onClickIndex}
        />
        <div className="flex flex-col space-y-1">
          <div className="flex items-center font-medium">
            <span className="text-xl text-neutral-12">
              {episodeData.name || "未知"}
            </span>
            <span
              className={cn(
                "text-neutral-11",
                episodeData.name === "" && "hidden"
              )}
            >
              （{episodeData.name_cn}）
            </span>
          </div>
          <div className="flex space-x-2 text-xs font-medium text-neutral-11">
            <div className="flex justify-center space-x-1">
              <CalendarDaysIcon className="h-4 w-4" />
              <span>{episodeData.airdate}</span>
            </div>
            <div className="flex justify-center space-x-1">
              <ClockIcon className="h-4 w-4" />
              <span>{episodeData.duration}</span>
            </div>
          </div>
        </div>
      </div>
      <Button
        colorType={"neutral"}
        aria-label="comment"
        type={"ghost"}
        label={episodeData.comment.toString()}
        icon={<ChatBubbleLeftRightIcon />}
      />
    </div>
  );
}

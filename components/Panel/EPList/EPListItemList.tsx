"use client";

import type { z } from "zod";
import type { episodesPageScheme } from "@/lib/episode";
import { cn } from "@/lib/utils";
import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
} from "@heroicons/react/20/solid";
import { useCollectionData } from "@/hooks/use-collection";
import { useEpisodeMutation } from "@/hooks/use-episode";
import { useToast } from "@/hooks/use-toast";
import { GhostButton, SelectedButton } from "@/ui/primitive/Button";

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
                    subject_type: collectionData.subject.type,
                    collection_type: collectionData.type,
                  })
                : mutateEpisode.mutate({
                    subject_id,
                    currentEp: collectionData.ep_status,
                    targetEp: episodeData.ep,
                    subject_type: collectionData.subject.type,
                    collection_type: collectionData.type,
                  });
            } else {
              openToast({
                type: "info",
                title: "请先收藏该条目",
              });
            }
          }}
          onClickBubble={() => {
            window.open(`https://bgm.tv/ep/${episodeData.id}`, "_blank");
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
  onClickBubble,
}: {
  episodeData: z.infer<typeof episodesPageScheme.shape.data.element>;
  isSelected: boolean;
  onClickIndex?: () => void;
  onClickBubble?: () => void;
}) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex items-center space-x-4 p-2">
        {isSelected ? (
          <SelectedButton colorType={"neutral"} onClick={onClickIndex}>
            {episodeData.ep}
          </SelectedButton>
        ) : (
          <GhostButton colorType={"neutral"} onClick={onClickIndex}>
            {episodeData.ep}
          </GhostButton>
        )}
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
              {episodeData.name_cn === "" ? "" : `（${episodeData.name_cn}）`}
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
      <GhostButton
        colorType={"neutral"}
        onClick={onClickBubble}
        aria-label="comment"
      >
        <ChatBubbleLeftRightIcon className="mr-2 h-5 w-5" />
        {episodeData.comment.toString()}
      </GhostButton>
    </div>
  );
}

import type { episodesScheme } from "@/lib/episode";
import type { z } from "zod";
import { Button } from "@/ui/Button";
import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
} from "@heroicons/react/20/solid";

import { useCollectionData } from "@/hooks/use-collection";
import { useEpisodeMutation, useEpisodesData } from "@/hooks/use-episode";
import { ListHeader } from "@/components/Panel/ListHeader";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export function EPList({
  subject_id,
  length,
}: {
  subject_id: number;
  length: number;
}) {
  const { data: collectionData } = useCollectionData(subject_id);
  const halfLength = Math.ceil(length / 2);
  const mutateEpisode = useEpisodeMutation();
  const openToast = useToast();

  let episodesStart = 0;
  if (collectionData) {
    if (
      collectionData.ep_status > halfLength &&
      collectionData.ep_status < collectionData.subject.eps - halfLength
    ) {
      episodesStart = collectionData.ep_status - halfLength;
    } else {
      episodesStart =
        collectionData.ep_status > halfLength
          ? Math.max(collectionData.subject.eps - length, 0)
          : 0;
    }
  }

  const { data: episodesData } = useEpisodesData(
    subject_id,
    length,
    episodesStart
  );

  return (
    <>
      {episodesData?.data.length ? (
        <div className="flex flex-col space-y-2 p-2">
          <ListHeader title={"剧集"} />
          <div className="flex flex-col space-y-2 py-2">
            {episodesData.data.map((episodeData) => (
              <EPItem
                key={episodeData.ep}
                episodeData={episodeData}
                isSelected={
                  collectionData
                    ? episodeData.ep <= collectionData.ep_status
                    : false
                }
                onClickIndex={() => {
                  if (collectionData) {
                    mutateEpisode.mutate({
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
          </div>
        </div>
      ) : null}
    </>
  );
}

function EPItem({
  episodeData,
  isSelected,
  onClickIndex,
}: {
  episodeData: z.infer<typeof episodesScheme.shape.data.element>;
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

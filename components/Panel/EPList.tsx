import type { episodesScheme } from "@/lib/episode";
import type { z } from "zod";
import { Button } from "@/ui/Button";
import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
} from "@heroicons/react/20/solid";

import { useCollectionData } from "@/hooks/use-collection";
import { useEpisodesData } from "@/hooks/use-episode";

export function EPList({ subject_id }: { subject_id: number }) {
  const { data: collectionData } = useCollectionData(subject_id);

  let episodesStart = -1;
  if (collectionData) {
    if (
      collectionData.ep_status > 3 &&
      collectionData.ep_status < collectionData.subject.eps - 3
    ) {
      episodesStart = collectionData.ep_status - 3;
    } else {
      episodesStart =
        collectionData.ep_status > 3 ? collectionData.subject.eps - 6 : 0;
    }
  }

  const { data: episodesData } = useEpisodesData(subject_id, 6, episodesStart);

  return (
    <>
      {episodesData?.data.map((episodeData) => (
        <EPItem
          key={episodeData.ep}
          episodeData={episodeData}
          isSelected={
            collectionData ? episodeData.ep <= collectionData.ep_status : false
          }
        />
      ))}
    </>
  );
}

function EPItem({
  episodeData,
  isSelected,
}: {
  episodeData: z.infer<typeof episodesScheme.shape.data.element>;
  isSelected: boolean;
}) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex items-center space-x-4 p-2">
        <Button
          colorType={"neutral"}
          type={isSelected ? "selected" : "ghost"}
          label={episodeData.ep}
        />
        <div className="flex flex-col space-y-1">
          <div className="flex items-center font-medium">
            <span className="text-xl text-neutral-12">{episodeData.name}</span>
            <span className="text-neutral-11">（{episodeData.name_cn}）</span>
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
        type={"ghost"}
        label={episodeData.comment}
        icon={<ChatBubbleLeftRightIcon />}
      />
    </div>
  );
}

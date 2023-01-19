import type { episodesPageScheme } from "@/lib/episode";
import type { z } from "zod";
import { Button } from "@/ui/Button";
import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
} from "@heroicons/react/20/solid";

import { useCollectionData } from "@/hooks/use-collection";
import { useEpisodesData } from "@/hooks/use-episode";
import { ListHeader } from "@/ui/Panel/ListHeader";
import { useReducerAtom } from "jotai/react/utils";
import { panelHistoryAtom, panelReducer } from "@/lib/panel";
import { EPListItemList } from "@/components/Panel/EPListItemList";

export function EPList({
  subject_id,
  length,
}: {
  subject_id: number;
  length: number;
}) {
  const [, dispatch] = useReducerAtom(panelHistoryAtom, panelReducer);
  const { data: collectionData } = useCollectionData(subject_id);
  const halfLength = Math.ceil(length / 2);

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
          <ListHeader
            title={"剧集"}
            showAction={
              length ? (collectionData?.subject.eps ?? 0) > length : false
            }
            onClickAction={() => {
              dispatch({
                type: "push",
                value: { target_id: subject_id, type: "episodeList" },
              });
            }}
          />
          <div className="flex flex-col space-y-2 py-2">
            <EPListItemList
              subject_id={subject_id}
              episodesData={episodesData.data}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

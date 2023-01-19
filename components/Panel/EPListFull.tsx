"use client";

import { useCollectionData } from "@/hooks/use-collection";
import { useEpisodesPageData } from "@/hooks/use-episode";
import { ListHeader } from "@/ui/Panel/ListHeader";
import { useReducerAtom } from "jotai/react/utils";
import { panelHistoryAtom, panelReducer } from "@/lib/panel";
import { EPListItemList } from "@/components/Panel/EPListItemList";
import { Fragment, useEffect } from "react";
import { LoadMoreIndicator } from "@/ui/LoadMoreIndicator";
import { useInView } from "react-intersection-observer";

export function EPListFull({ subject_id }: { subject_id: number }) {
  const [, dispatch] = useReducerAtom(panelHistoryAtom, panelReducer);
  const { data: collectionData } = useCollectionData(subject_id);
  const {
    data: episodesPageData,
    fetchNextPage,
    hasNextPage,
  } = useEpisodesPageData(subject_id, 20);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      void (async () => {
        await fetchNextPage();
      })();
    }
  }, [inView]);

  return (
    <>
      <div className="relative flex flex-col space-y-2 p-2">
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
          {episodesPageData?.pages.map((page) => (
            <Fragment key={page?.offset}>
              <EPListItemList
                episodesData={page?.data}
                subject_id={subject_id}
              />
            </Fragment>
          ))}
        </div>
        <div className="absolute inset-x-0 -bottom-4 flex w-full items-center justify-center">
          <LoadMoreIndicator ref={ref} hasMore={hasNextPage} />
        </div>
      </div>
    </>
  );
}

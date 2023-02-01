"use client";

import { useEpisodesPageData } from "@/hooks/use-episode";
import { ListHeader } from "@/components/Panel/ListHeader";
import { useReducerAtom } from "jotai/react/utils";
import { panelHistoryAtom, panelReducer } from "@/lib/panel";
import { EPListItemList } from "@/components/Panel/EPList/EPListItemList";
import { Fragment, useEffect } from "react";
import { LoadMore } from "@/components/LoadMore";
import { useInView } from "react-intersection-observer";

export function EPListFull({ subject_id }: { subject_id: number }) {
  const [, dispatch] = useReducerAtom(panelHistoryAtom, panelReducer);
  const {
    data: episodesPageData,
    fetchNextPage,
    hasNextPage,
  } = useEpisodesPageData(subject_id, 15);
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
          showAction={false}
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
        <div className="flex w-full items-center justify-center">
          <LoadMore ref={ref} hasMore={hasNextPage} />
        </div>
      </div>
    </>
  );
}

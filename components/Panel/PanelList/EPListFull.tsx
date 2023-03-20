"use client";

import { useEpisodesPageData } from "@/hooks/use-episode";
import { ListHeader } from "@/components/Panel/PanelList/ListHeader";
import { useReducerAtom } from "jotai/utils";
import { panelHistoryAtom, panelReducer } from "@/lib/panel";
import { EPItemList } from "@/components/EPItem/EPItemList";
import { Fragment, useEffect, useMemo } from "react";
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
  }, [fetchNextPage, inView]);

  const EPList = useMemo(() => {
    return episodesPageData?.pages.map((group, i) => (
      <Fragment key={i}>
        <EPItemList episodesData={group?.data} subject_id={subject_id} />
      </Fragment>
    ));
  }, [episodesPageData, subject_id]);

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
        <div className="flex flex-col space-y-2 py-2">{EPList}</div>
        <div className="flex w-full items-center justify-center">
          <LoadMore ref={ref} hasMore={hasNextPage} />
        </div>
      </div>
    </>
  );
}

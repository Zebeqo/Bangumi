"use client";

import { panelScrollToTop } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { useReducerAtom } from "jotai/utils";
import { panelHistoryAtom, panelReducer } from "@/lib/panel";
import { Suspense } from "react";
import { PanelNavSkeleton } from "@/components/Skeleton/PanelNavSkeleton";
import {
  PanelNav as PanelNavRoot,
  PanelNavButtonGroup,
  PanelNavLeftContent,
  PanelNavRightContent,
  PanelNavSubTitle,
  PanelNavTitle,
  PanelNavTitleGroup,
} from "@/ui/primitive/PanelNav";
import { DialogClose, DialogTitle } from "@/ui/primitive/Dialog";

export function PanelNav({
  title,
}: {
  title: { name?: string; name_cn?: string };
}) {
  const [panelHistory, dispatch] = useReducerAtom(
    panelHistoryAtom,
    panelReducer
  );
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "-1px",
  });
  return (
    <Suspense fallback={<PanelNavSkeleton />}>
      {/*SubjectContent.Nav*/}
      <PanelNavRoot
        ref={ref}
        className={inView ? "" : "border-b border-neutral-6 bg-neutral-1"}
      >
        <PanelNavLeftContent>
          <PanelNavButtonGroup
            onClickBack={() => {
              if (panelHistory.index) {
                dispatch({ type: "back" });
                panelScrollToTop();
              }
            }}
            onClickForward={() => {
              if (panelHistory.index < panelHistory.history.length - 1) {
                dispatch({ type: "forward" });
                panelScrollToTop();
              }
            }}
          />
          <PanelNavTitleGroup>
            <PanelNavTitle asChild>
              <DialogTitle>{(title.name_cn || title.name) ?? ""}</DialogTitle>
            </PanelNavTitle>
            <PanelNavSubTitle>{title.name ?? ""}</PanelNavSubTitle>
          </PanelNavTitleGroup>
        </PanelNavLeftContent>
        <PanelNavRightContent>
          <DialogClose />
        </PanelNavRightContent>
      </PanelNavRoot>
    </Suspense>
  );
}

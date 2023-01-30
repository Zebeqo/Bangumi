"use client";

import { cn, panelScrollToTop } from "@/lib/utils";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useInView } from "react-intersection-observer";
import { useReducerAtom } from "jotai/react/utils";
import { panelHistoryAtom, panelReducer } from "@/lib/panel";
import { Suspense } from "react";
import { GhostButton_Icon, OutlineButton_Icon } from "@/ui/primitive/Button";

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
    <Suspense
      fallback={
        <div className="flex h-[76px] animate-pulse items-center px-8 py-4">
          <div className="h-8 w-[360px] rounded-full bg-neutral-6" />
        </div>
      }
    >
      {/*SubjectContent.Nav*/}
      <div
        className={cn(
          "sticky top-0 z-50 flex justify-between py-4 px-8",
          !inView && "border-b border-neutral-6 bg-neutral-1"
        )}
        ref={ref}
      >
        {/*SubjectContent.NavLeft*/}
        <div className="flex items-center space-x-8">
          {/*SubjectContent.NavButtonGroup*/}
          <div className="flex space-x-2">
            <OutlineButton_Icon
              colorType="neutral"
              onClick={() => {
                if (panelHistory.index) {
                  dispatch({ type: "back" });
                  panelScrollToTop();
                }
              }}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </OutlineButton_Icon>
            <OutlineButton_Icon
              colorType="neutral"
              onClick={() => {
                if (panelHistory.index < panelHistory.history.length - 1) {
                  dispatch({ type: "forward" });
                  panelScrollToTop();
                }
              }}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </OutlineButton_Icon>
          </div>
          {/*SubjectContent.TitleGroup*/}
          <div className="flex flex-col">
            <DialogPrimitive.Title
              data-testid="title"
              className="text-lg font-bold text-neutral-12"
            >
              {title.name_cn}
            </DialogPrimitive.Title>
            <span className="text-xs font-medium text-neutral-11">
              {title.name}
            </span>
          </div>
        </div>
        {/*SubjectContent.NavRight*/}
        <div>
          <DialogPrimitive.Close asChild>
            <GhostButton_Icon colorType="neutral" aria-label="Close">
              <XMarkIcon className="h-6 w-6" />
            </GhostButton_Icon>
          </DialogPrimitive.Close>
        </div>
      </div>
    </Suspense>
  );
}

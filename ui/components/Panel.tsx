"use client";

import type { ReactNode } from "react";
import { forwardRef } from "react";
import type { DialogContentProps } from "@/ui/components/Dialog";
import {
  Dialog,
  DialogContent,
  DialogContentHeader,
  DialogTitle,
} from "@/ui/components/Dialog";
import type { WithRequired } from "@/lib/utils";
import { panelScrollToTop } from "@/lib/utils";
import { Button } from "@/ui/components/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useReducerAtom, useResetAtom } from "jotai/utils";
import { isOpenPanelAtom, panelHistoryAtom, panelReducer } from "@/lib/panel";
import { useAtomValue } from "jotai";
import { classed } from "@/classed.config";

interface PanelProps
  extends React.ComponentPropsWithoutRef<typeof Dialog>,
    DialogContentProps {}
const Panel = forwardRef<
  React.ElementRef<typeof DialogContent>,
  WithRequired<PanelProps, "children">
>(({ children, ...props }, ref) => {
  const resetPanelHistory = useResetAtom(panelHistoryAtom);
  const isOpenPanel = useAtomValue(isOpenPanelAtom);
  return (
    <Dialog open={isOpenPanel} onOpenChange={resetPanelHistory} {...props}>
      <DialogContent
        ref={ref}
        className="w-fit max-w-none items-center items-stretch pt-4"
      >
        {children}
      </DialogContent>
    </Dialog>
  );
});
Panel.displayName = "Panel";

const PanelNav = ({ children }: { children: ReactNode }) => {
  return (
    <DialogContentHeader className="px-8">
      <div className="flex items-center space-x-8">
        <PanelNavButtonGroup>
          <PanelNavBackButton />
          <PanelNavForwardButton />
        </PanelNavButtonGroup>
        {children}
      </div>
    </DialogContentHeader>
  );
};
PanelNav.displayName = "PanelNav";

const PanelNavButtonGroup = classed("div", "flex space-x-2");

const PanelNavBackButton = () => {
  const [panelHistory, dispatch] = useReducerAtom(
    panelHistoryAtom,
    panelReducer
  );

  return (
    <Button
      variant="outline"
      iconOnly
      onClick={() => {
        if (panelHistory.index) {
          dispatch({ type: "back" });
          panelScrollToTop();
        }
      }}
      className={
        panelHistory.index
          ? ""
          : "cursor-not-allowed opacity-50 hover:bg-neutral-1 focus:ring-0"
      }
    >
      <ChevronLeftIcon className="h-6 w-6" />
    </Button>
  );
};

const PanelNavForwardButton = () => {
  const [panelHistory, dispatch] = useReducerAtom(
    panelHistoryAtom,
    panelReducer
  );

  return (
    <Button
      variant="outline"
      iconOnly
      onClick={() => {
        if (panelHistory.index < panelHistory.history.length - 1) {
          dispatch({ type: "forward" });
          panelScrollToTop();
        }
      }}
      className={
        panelHistory.index < panelHistory.history.length - 1
          ? ""
          : "cursor-not-allowed opacity-50 hover:bg-neutral-1 focus:ring-0"
      }
    >
      <ChevronRightIcon className="h-6 w-6" />
    </Button>
  );
};

const PanelNavTitleGroup = classed("div", "flex flex-col");

const PanelNavTitle = classed(DialogTitle, "text-lg font-bold text-neutral-12");

const PanelNavSubTitle = classed("div", "text-xs font-medium text-neutral-11");

const PanelContent = classed("div", "flex flex-col space-y-2 px-8");

export {
  Panel,
  PanelNav,
  PanelNavTitleGroup,
  PanelNavTitle,
  PanelNavSubTitle,
  PanelContent,
};

"use client";

import type { ReactNode } from "react";
import { forwardRef } from "react";
import type { DialogContentProps } from "@/ui/primitive/Dialog";
import { DialogClose, DialogContent, DialogTitle } from "@/ui/primitive/Dialog";
import { Dialog } from "@/ui/primitive/Dialog";
import type { WithRequired } from "@/lib/utils";
import { cn, panelScrollToTop } from "@/lib/utils";
import { OutlineButton_Icon } from "@/ui/primitive/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useSetAtom } from "jotai";
import { useInView } from "react-intersection-observer";
import { useReducerAtom } from "jotai/utils";
import { isOpenPanelAtom, panelHistoryAtom, panelReducer } from "@/lib/panel";
import { useAtomValue } from "jotai/index";

interface PanelProps
  extends React.ComponentPropsWithoutRef<typeof Dialog>,
    DialogContentProps {}
const Panel = forwardRef<
  React.ElementRef<typeof DialogContent>,
  WithRequired<PanelProps, "children">
>(({ children, ...props }, ref) => {
  const setPanelHistory = useSetAtom(panelHistoryAtom);
  const isOpenPanel = useAtomValue(isOpenPanelAtom);
  return (
    <Dialog
      open={isOpenPanel}
      onOpenChange={(open) => {
        if (!open) {
          setPanelHistory({ history: [], index: -1 });
        }
      }}
      {...props}
    >
      <DialogContent
        ref={ref}
        className="z-40 mt-16 flex w-[1040.62px] flex-col rounded-lg bg-neutral-1 pt-4 pb-6 shadow-lg outline-none"
      >
        {children}
      </DialogContent>
    </Dialog>
  );
});
Panel.displayName = "Panel";

const PanelNav = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ children }: { children: ReactNode }) => {
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "-1px",
  });
  return (
    <div
      ref={ref}
      className={cn(
        "sticky top-0 z-50 flex justify-between py-4 px-8",
        inView ? "" : "border-b border-neutral-6 bg-neutral-1"
      )}
    >
      <div className="flex items-center space-x-8">
        <PanelNavButtonGroup>
          <PanelNavBackButton />
          <PanelNavForwardButton />
        </PanelNavButtonGroup>
        {children}
      </div>
      <DialogClose />
    </div>
  );
});
PanelNav.displayName = "PanelNav";

const PanelNavButtonGroup = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex space-x-2", className)} {...props}></div>
));
PanelNavButtonGroup.displayName = "PanelNavButtonGroup";

const PanelNavBackButton = () => {
  const [panelHistory, dispatch] = useReducerAtom(
    panelHistoryAtom,
    panelReducer
  );

  return (
    <OutlineButton_Icon
      colorVariant="neutral"
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
    </OutlineButton_Icon>
  );
};
PanelNavBackButton.displayName = "PanelNavBackButton";

const PanelNavForwardButton = () => {
  const [panelHistory, dispatch] = useReducerAtom(
    panelHistoryAtom,
    panelReducer
  );

  return (
    <OutlineButton_Icon
      colorVariant="neutral"
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
    </OutlineButton_Icon>
  );
};
PanelNavForwardButton.displayName = "PanelNavForwardButton";

const PanelNavTitleGroup = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col", className)} {...props} />
));
PanelNavTitleGroup.displayName = "PanelNavTitleGroup";

const PanelNavTitle = forwardRef<
  React.ElementRef<typeof DialogTitle>,
  WithRequired<React.ComponentPropsWithoutRef<typeof DialogTitle>, "children">
>(({ className, children, ...props }, ref) => {
  return (
    <DialogTitle
      ref={ref}
      className={cn("text-lg font-bold text-neutral-12", className)}
      {...props}
    >
      {children}
    </DialogTitle>
  );
});
PanelNavTitle.displayName = "PanelNavTitle";

const PanelNavSubTitle = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-xs font-medium text-neutral-11", className)}
    {...props}
  />
));
PanelNavSubTitle.displayName = "PanelNavSubTitle";

const PanelContent = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 px-8", className)}
    {...props}
  />
));
PanelContent.displayName = "PanelContent";

export {
  Panel,
  PanelNav,
  PanelNavTitleGroup,
  PanelNavTitle,
  PanelNavSubTitle,
  PanelContent,
};

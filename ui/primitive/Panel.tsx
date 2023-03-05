"use client";

import type { ReactNode } from "react";
import { forwardRef } from "react";
import type { DialogContentProps } from "@/ui/primitive/Dialog";
import {
  DialogContent,
  DialogContentHeader,
  DialogTitle,
} from "@/ui/primitive/Dialog";
import { Dialog } from "@radix-ui/react-dialog";
import type { WithRequired } from "@/lib/utils";
import { cn, panelScrollToTop } from "@/lib/utils";
import { OutlineButton_Icon } from "@/ui/primitive/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useReducerAtom, useResetAtom } from "jotai/utils";
import { isOpenPanelAtom, panelHistoryAtom, panelReducer } from "@/lib/panel";
import { useAtomValue } from "jotai";

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
    className={cn("flex  flex-col space-y-2 px-8", className)}
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

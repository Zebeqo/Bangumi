import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button, GhostButton } from "@/ui/components/Button";
import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
} from "@heroicons/react/20/solid";
import type { ComponentProps } from "@tw-classed/react";
import { deriveClassed } from "@tw-classed/react";
import { classed } from "@/classed.config";

const EPItem = classed("div", "flex items-center justify-between px-2");

const EPItemRightContent = classed("div");

const EPItemComment = deriveClassed<
  typeof GhostButton,
  ComponentProps<typeof GhostButton> & { count: number }
>(({ count, ...props }, ref) => {
  return (
    <GhostButton ref={ref} {...props}>
      <ChatBubbleLeftRightIcon className="mr-2 h-5 w-5" />
      {count}
    </GhostButton>
  );
});

const EPItemLeftContent = classed("div", "flex items-center space-x-4 p-2");

const EPItemIndex = Button;

interface EPItemInfo extends EPItemInfoMainProps, EPItemInfoSubProps {}
const EPItemInfo = forwardRef<HTMLDivElement, Omit<EPItemInfo, "children">>(
  ({ className, name, name_cn, airdate, duration, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1", className)}
      {...props}
    >
      <EPItemInfoMain name={name} name_cn={name_cn} />
      <EPItemInfoSub airdate={airdate} duration={duration} />
    </div>
  )
);
EPItemInfo.displayName = "EPItemInfo";

interface EPItemInfoMainProps extends React.ComponentPropsWithoutRef<"div"> {
  name: string;
  name_cn: string;
}
const EPItemInfoMain = forwardRef<
  HTMLDivElement,
  Omit<EPItemInfoMainProps, "children">
>(({ className, name, name_cn, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex max-w-[784px] items-center font-medium", className)}
    {...props}
  >
    <span className="text-xl text-neutral-12">{name}</span>
    <span className={cn("text-neutral-11")}>{name_cn && `（${name_cn}）`}</span>
  </div>
));
EPItemInfoMain.displayName = "EPItemInfoMain";

interface EPItemInfoSubProps extends React.ComponentPropsWithoutRef<"div"> {
  airdate: string;
  duration: string;
}
const EPItemInfoSub = forwardRef<
  HTMLDivElement,
  Omit<EPItemInfoSubProps, "children">
>(({ className, airdate, duration, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex space-x-2 text-xs font-medium text-neutral-11",
      className
    )}
    {...props}
  >
    <div className="flex justify-center space-x-1">
      <CalendarDaysIcon className="h-4 w-4" />
      <span>{airdate}</span>
    </div>
    <div className="flex justify-center space-x-1">
      <ClockIcon className="h-4 w-4" />
      <span>{duration}</span>
    </div>
  </div>
));
EPItemInfoSub.displayName = "EPItemInfoSub";

export {
  EPItem,
  EPItemRightContent,
  EPItemComment,
  EPItemLeftContent,
  EPItemIndex,
  EPItemInfo,
};

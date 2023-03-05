import { forwardRef } from "react";
import type { WithRequired } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/ui/primitive/Button";
import { GhostButton, SelectedButton } from "@/ui/primitive/Button";
import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
} from "@heroicons/react/20/solid";

const EPItem = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-between px-2", className)}
    {...props}
  />
));
EPItem.displayName = "EPItem";

const EPItemRightContent = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ ...props }, ref) => <div ref={ref} {...props} />);
EPItemRightContent.displayName = "EPItemRightContent";

const EPItemComment = forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, "children"> & { count: number }
>(({ count, ...props }, ref) => (
  <GhostButton ref={ref} {...props}>
    <ChatBubbleLeftRightIcon className="mr-2 h-5 w-5" />
    {count}
  </GhostButton>
));
EPItemComment.displayName = GhostButton.displayName;

const EPItemLeftContent = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center space-x-4 p-2", className)}
    {...props}
  />
));
EPItemLeftContent.displayName = "EPItemLeftContent";

interface EPItemIndexProps extends ButtonProps {
  isSelected: boolean;
  value: number;
}
const EPItemIndex = forwardRef<
  HTMLButtonElement,
  Omit<EPItemIndexProps, "children">
>(({ value, isSelected, ...props }, ref) =>
  isSelected ? (
    <SelectedButton ref={ref} {...props}>
      {value}
    </SelectedButton>
  ) : (
    <GhostButton ref={ref} {...props}>
      {value}
    </GhostButton>
  )
);
EPItemIndex.displayName = GhostButton.displayName;

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

import { forwardRef } from "react";
import type { WithRequired } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { OutlineButton_Icon } from "@/ui/primitive/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Slot } from "@radix-ui/react-slot";

const PanelNav = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "sticky top-0 z-50 flex justify-between py-4 px-8",
      className
    )}
    {...props}
  />
));
PanelNav.displayName = "PanelNav";

const PanelNavLeftContent = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center space-x-8", className)}
    {...props}
  />
));
PanelNavLeftContent.displayName = "PanelNavLeftContent";

interface PanelNavButtonGroupProps
  extends React.ComponentPropsWithoutRef<"div"> {
  onClickBack: () => void;
  onClickForward: () => void;
}
const PanelNavButtonGroup = forwardRef<
  HTMLDivElement,
  Omit<PanelNavButtonGroupProps, "children">
>(({ className, onClickBack, onClickForward, ...props }, ref) => (
  <div ref={ref} className={cn("flex space-x-2", className)} {...props}>
    <OutlineButton_Icon colorVariant="neutral" onClick={onClickBack}>
      <ChevronLeftIcon className="h-6 w-6" />
    </OutlineButton_Icon>
    <OutlineButton_Icon colorVariant="neutral" onClick={onClickForward}>
      <ChevronRightIcon className="h-6 w-6" />
    </OutlineButton_Icon>
  </div>
));
PanelNavButtonGroup.displayName = "PanelNavButtonGroup";

const PanelNavTitleGroup = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col", className)} {...props} />
));
PanelNavTitleGroup.displayName = "PanelNavTitleGroup";

interface PanelNavTitleProps extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}
const PanelNavTitle = forwardRef<
  HTMLDivElement,
  WithRequired<PanelNavTitleProps, "children">
>(({ className, asChild = false, children, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      ref={ref}
      className={cn("text-lg font-bold text-neutral-12", className)}
      {...props}
    >
      {children}
    </Comp>
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

const PanelNavRightContent = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ ...props }, ref) => <div ref={ref} {...props} />);
PanelNavRightContent.displayName = "PanelNavRightContent";

export {
  PanelNav,
  PanelNavButtonGroup,
  PanelNavLeftContent,
  PanelNavTitleGroup,
  PanelNavTitle,
  PanelNavSubTitle,
  PanelNavRightContent,
};

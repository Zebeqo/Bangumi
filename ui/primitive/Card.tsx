import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/ui/primitive/Badge";

const Card = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "group flex w-[30rem] select-none overflow-hidden rounded-2xl bg-neutral-2 ring-1 ring-neutral-6",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardImage = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative aspect-[75/106] h-full", className)}
    {...props}
  />
));
CardImage.displayName = "CardImage";

const CardContent = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full px-4 py-2", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardHeader = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-between", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-52", className)} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardTitleMain = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("truncate text-xl font-bold text-neutral-12", className)}
    {...props}
  />
));
CardTitleMain.displayName = "CardTitleMain";

const CardTitleSub = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("truncate text-xs font-medium text-neutral-11", className)}
    {...props}
  />
));
CardTitleSub.displayName = "CardTitleSub";

const CardButtonGroup = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("hidden space-x-1 group-hover:flex", className)}
    {...props}
  />
));
CardButtonGroup.displayName = "CardButtonGroup";

const CardInfo = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex justify-between py-1", className)}
    {...props}
  />
));
CardInfo.displayName = "CardInfo";

const CardInfoItem = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center space-x-2 text-xs font-medium text-neutral-11",
      className
    )}
    {...props}
  />
));
CardInfoItem.displayName = "CardInfoItem";

const CardTagGroup = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-[4.6rem] overflow-hidden py-1 leading-loose", className)}
    {...props}
  />
));
CardTagGroup.displayName = "CardTagGroup";

const CardTagGroupItem = forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof Badge>
>(({ className, ...props }, ref) => (
  <Badge ref={ref} className={cn("mr-2", className)} {...props} />
));
CardTagGroupItem.displayName = "CardTagGroupItem";

const CardFooter = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex space-x-3", className)} {...props} />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardImage,
  CardContent,
  CardHeader,
  CardTitle,
  CardTitleMain,
  CardTitleSub,
  CardButtonGroup,
  CardInfo,
  CardInfoItem,
  CardTagGroup,
  CardTagGroupItem,
  CardFooter,
};

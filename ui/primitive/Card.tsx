import { forwardRef } from "react";
import type { WithRequired } from "@/lib/utils";
import { cn } from "@/lib/utils";

const Card = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group flex w-[30rem] select-none overflow-hidden rounded-2xl bg-neutral-2 ring-1 ring-neutral-6",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardImage = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // h-full not working when using next/image in an environment other than next.js
    className={cn("relative aspect-[75/106] h-[201.59px]", className)}
    {...props}
  />
));
CardImage.displayName = "CardImage";

const CardContent = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full px-4 py-2", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardHeader = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-between", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

interface CardTitleProps extends React.ComponentPropsWithoutRef<"div"> {
  mainTitle: string;
  subTitle: string;
}
const CardTitle = forwardRef<HTMLDivElement, Omit<CardTitleProps, "children">>(
  ({ className, mainTitle, subTitle, ...props }, ref) => (
    <div ref={ref} className={cn("w-52", className)} {...props}>
      <CardTitleMain>{mainTitle}</CardTitleMain>
      <CardTitleSub>{subTitle}</CardTitleSub>
    </div>
  )
);
CardTitle.displayName = "CardTitle";

const CardTitleMain = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
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
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
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
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
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
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-1 flex justify-between py-1", className)}
    {...props}
  />
));
CardInfo.displayName = "CardInfo";

const CardInfoItem = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
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
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div className="mt-2 h-[4rem] overflow-hidden">
    <div
      ref={ref}
      className={cn("inline-flex h-fit flex-wrap items-start gap-2", className)}
      {...props}
    />
  </div>
));
CardTagGroup.displayName = "CardTagGroup";

const CardFooter = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mt-px flex space-x-3", className)} {...props} />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardImage,
  CardContent,
  CardHeader,
  CardTitle,
  CardButtonGroup,
  CardInfo,
  CardInfoItem,
  CardTagGroup,
  CardFooter,
};

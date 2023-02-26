import { forwardRef } from "react";
import type { WithRequired } from "@/lib/utils";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Badge } from "@/ui/primitive/Badge";

const SubjectContent = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex min-h-[384px] space-x-4", className)}
    {...props}
  />
));
SubjectContent.displayName = "SubjectContent";

const SubjectContentImage = forwardRef<
  React.ElementRef<typeof Image>,
  Omit<React.ComponentPropsWithoutRef<typeof Image>, "children">
>(({ className, ...props }, ref) => (
  <Image
    ref={ref}
    className={cn(
      "min-h-[384px] flex-shrink-0 self-center overflow-hidden rounded-xl object-cover",
      className
    )}
    width={288}
    height={1}
    unoptimized={true}
    {...props}
  />
));
SubjectContentImage.displayName = "SubjectContentImage";

const SubjectContentInfo = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2", className)}
    {...props}
  />
));
SubjectContentInfo.displayName = "SubjectContentInfo";

const SubjectContentInfoHeader = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex space-x-2 p-2", className)} {...props} />
));
SubjectContentInfoHeader.displayName = "SubjectContentInfoHeader";

interface SubjectContentRatingProps
  extends React.ComponentPropsWithoutRef<"div"> {
  score: number;
  total: number;
}
const SubjectContentRating = forwardRef<
  HTMLDivElement,
  Omit<SubjectContentRatingProps, "children">
>(({ className, score, total, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col items-center space-y-2 p-2", className)}
    {...props}
  >
    <Badge colorVariant={"accent"} className="w-full text-base">
      评分
    </Badge>
    <span className="text-4xl font-bold text-accent-11">
      {score.toFixed(1)}
    </span>
    <span className="whitespace-nowrap text-xs text-neutral-11">
      {total} 人评分
    </span>
  </div>
));
SubjectContentRating.displayName = "SubjectContentRating";

const SubjectContentInfoHeaderDivider = forwardRef<
  HTMLDivElement,
  Omit<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-full w-px bg-neutral-6", className)}
    {...props}
  />
));
SubjectContentInfoHeaderDivider.displayName = "SubjectContentInfoHeaderDivider";

const SubjectContentTagGroup = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("max-w-[564px] leading-loose", className)}
    {...props}
  />
));
SubjectContentTagGroup.displayName = "SubjectContentTagGroup";

const SubjectContentInfoBody = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex-grow whitespace-pre-wrap px-4 text-sm text-neutral-12",
      className
    )}
    {...props}
  />
));
SubjectContentInfoBody.displayName = "SubjectContentInfoBody";

const SubjectContentInfoFooter = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex space-x-2 p-2", className)} {...props} />
));
SubjectContentInfoFooter.displayName = "SubjectContentInfoFooter";

export {
  SubjectContent,
  SubjectContentImage,
  SubjectContentInfo,
  SubjectContentInfoHeader,
  SubjectContentRating,
  SubjectContentInfoHeaderDivider,
  SubjectContentTagGroup,
  SubjectContentInfoBody,
  SubjectContentInfoFooter,
};

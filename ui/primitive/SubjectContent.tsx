import { forwardRef, useEffect, useRef, useState } from "react";
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
>(({ className, alt, ...props }, ref) => (
  <Image
    ref={ref}
    className={cn(
      "min-h-[384px] flex-shrink-0 self-center overflow-hidden rounded-xl object-cover",
      className
    )}
    width={288}
    height={1}
    unoptimized={true}
    alt={alt}
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
    className={cn("flex max-w-[672px] flex-col space-y-2", className)}
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
  <div ref={ref} className={cn("flex flex-wrap gap-2", className)} {...props} />
));
SubjectContentTagGroup.displayName = "SubjectContentTagGroup";

const SubjectContentInfoText = ({ children }: { children: string }) => {
  const [showFullInfo, setShowFullInfo] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (ref.current) {
      setIsClamped(ref.current.scrollHeight > ref.current.clientHeight + 1);
    }
  }, []);

  return (
    <p
      ref={ref}
      onClick={() => {
        isClamped && setShowFullInfo(true);
      }}
      className={cn(
        "flex-grow whitespace-pre-wrap break-words px-4 text-sm text-neutral-12 line-clamp-9",
        showFullInfo
          ? "line-clamp-none"
          : isClamped && "hover:cursor-pointer hover:font-medium"
      )}
    >
      {children}
    </p>
  );
};

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
  SubjectContentInfoText,
  SubjectContentInfoFooter,
};

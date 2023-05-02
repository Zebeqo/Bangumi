import { forwardRef, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Badge } from "@/ui/components/Badge";
import { classed } from "@/classed.config";

const SubjectContent = classed("div", "flex min-h-[384px] space-x-4");

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

const SubjectContentInfo = classed(
  "div",
  "flex max-w-[672px] flex-col space-y-2"
);

const SubjectContentInfoHeader = classed("div", "flex space-x-2 p-2");

const SubjectContentRating = ({
  score,
  total,
}: {
  score: number;
  total: number;
}) => (
  <div className="flex flex-col items-center space-y-2 p-2">
    <Badge color="accent" className="w-full text-base">
      评分
    </Badge>
    <span className="text-4xl font-bold text-accent-11">
      {score.toFixed(1)}
    </span>
    <span className="whitespace-nowrap text-xs text-neutral-11">
      {total} 人评分
    </span>
  </div>
);

const SubjectContentInfoHeaderDivider = classed(
  "div",
  "h-full w-px bg-neutral-6"
);

const SubjectContentTagGroup = classed(
  "div",
  "flex h-fit flex-wrap items-start gap-2"
);

const SubjectContentInfoText = ({ text }: { text: string }) => {
  const [showFullInfo, setShowFullInfo] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setShowFullInfo(false);
  }, [text]);

  return (
    <p
      ref={ref}
      onMouseEnter={() => {
        if (ref.current) {
          setIsClamped(ref.current.scrollHeight > ref.current.clientHeight);
        }
      }}
      onClick={() => {
        isClamped && setShowFullInfo(true);
      }}
      className={cn(
        "flex-grow whitespace-pre-wrap break-words px-4 text-sm text-neutral-12 line-clamp-[9]",
        showFullInfo
          ? "line-clamp-none"
          : isClamped && "hover:cursor-pointer hover:font-medium"
      )}
    >
      {text}
    </p>
  );
};

const SubjectContentInfoFooter = classed("div", "flex space-x-2 p-2");

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

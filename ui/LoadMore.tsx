import Image from "next/image";
import img_cry from "public/images/cry-face-by-dsm.png";
import img_happy from "public/images/happy-face-by-dsm.png";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface Props extends React.ComponentPropsWithoutRef<"span"> {
  hasMore?: boolean;
}
export const LoadMore = forwardRef<HTMLSpanElement, Props>(
  ({ hasMore = true, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center space-x-1 text-sm font-medium text-neutral-11",
          className
        )}
        {...props}
      >
        <Image
          className={hasMore ? "animate-bounce" : ""}
          src={hasMore ? img_cry : img_happy}
          alt={"expression-image"}
          width={20}
          height={20}
        />
        <span>{hasMore ? "正在加载..." : "没有更多了。"}</span>
      </span>
    );
  }
);

LoadMore.displayName = "LoadMore";

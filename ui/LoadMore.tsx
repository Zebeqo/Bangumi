import Image from "next/image";
import img_cry from "public/images/cry-face-by-dsm.png";
import img_happy from "public/images/happy-face-by-dsm.png";
import { forwardRef } from "react";

interface Props {
  hasMore?: boolean;
}
export const LoadMore = forwardRef<HTMLDivElement, Props>(
  ({ hasMore = true }, ref) => {
    return (
      <span ref={ref} className="inline-flex items-center space-x-1">
        <Image
          className={hasMore ? "animate-bounce" : ""}
          src={hasMore ? img_cry : img_happy}
          alt={"expression-image"}
          width={20}
          height={20}
        />
        <span className="text-sm font-medium text-neutral-11">
          {hasMore ? "正在加载..." : "没有更多了。"}
        </span>
      </span>
    );
  }
);

LoadMore.displayName = "LoadMore";

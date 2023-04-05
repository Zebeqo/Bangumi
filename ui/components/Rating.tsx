import { StarIcon as FillStarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { classed } from "@/classed.config";
import type { ComponentProps } from "@tw-classed/react";
import { deriveClassed } from "@tw-classed/react";

const ClassedRating = classed("div", {
  base: "flex space-x-1",
  variants: {
    color: {
      primary: "text-primary-11",
      accent: "text-accent-11",
      neutral: "text-neutral-11",
    },
  },
  defaultVariants: {
    color: "neutral",
  },
});

interface RatingProps extends ComponentProps<typeof ClassedRating> {
  score: number;
  maxScore: number;
  totalIconCount: number;
}
const Rating = deriveClassed<typeof ClassedRating, RatingProps>(
  ({ color, score, maxScore, totalIconCount, ...props }, ref) => {
    if (score > maxScore || score < 0) {
      return null;
    }
    const rating = Math.round(score);
    const fillStarCount = Math.floor(rating / (maxScore / totalIconCount));
    const halfStarCount =
      rating % (maxScore / totalIconCount) < maxScore / totalIconCount / 2
        ? 0
        : 1;
    const outlineStarCount = totalIconCount - fillStarCount - halfStarCount;

    return (
      <ClassedRating ref={ref} color={color} {...props}>
        {Array.from({ length: fillStarCount }).map((_, index) => (
          <RatingFillIcon key={index} />
        ))}
        {halfStarCount > 0 && <RatingHalfIcon />}
        {Array.from({ length: outlineStarCount }).map((_, index) => (
          <RatingEmptyIcon key={index} />
        ))}
      </ClassedRating>
    );
  }
);
Rating.displayName = "Rating";

const RatingFillIcon = ({ className }: { className?: string }) => (
  <FillStarIcon
    data-testid="fill-rating-icon"
    className={cn("h-4 w-4", className)}
  />
);

const RatingEmptyIcon = ({ className }: { className?: string }) => (
  <OutlineStarIcon
    data-testid="empty-rating-icon"
    className={cn("h-4 w-4", className)}
  />
);

const RatingHalfIcon = ({ className }: { className?: string }) => (
  <span className="relative">
    <div className={"w-1/2 overflow-hidden"}>
      <RatingFillIcon className={className} />
    </div>
    <RatingEmptyIcon className={cn("absolute top-0 left-0", className)} />
  </span>
);

export { Rating };

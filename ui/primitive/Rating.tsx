import { StarIcon as FillStarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const ratingVariant = cva("flex space-x-1", {
  variants: {
    color: {
      primary: "text-primary-11",
      accent: "text-accent-11",
      neutral: "text-neutral-11",
      success: "text-success-11",
      error: "text-error-11",
      info: "text-info-11",
    },
  },
  defaultVariants: {
    color: "neutral",
  },
});
interface RatingProps extends React.ComponentPropsWithoutRef<"div"> {
  score: number;
  maxScore: number;
  totalIconCount: number;
  variant: {
    color?: VariantProps<typeof ratingVariant>["color"];
  };
}
const Rating = forwardRef<HTMLDivElement, RatingProps>(
  ({ className, variant, score, maxScore, totalIconCount, ...props }, ref) => {
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
      <div
        ref={ref}
        className={cn(ratingVariant({ color: variant.color }), className)}
        {...props}
      >
        {Array.from({ length: fillStarCount }).map((_, index) => (
          <RatingFillIcon key={index} />
        ))}
        {halfStarCount > 0 && <RatingHalfIcon />}
        {Array.from({ length: outlineStarCount }).map((_, index) => (
          <RatingEmptyIcon key={index} />
        ))}
      </div>
    );
  }
);
Rating.displayName = "Rating";

const RatingFillIcon = forwardRef<
  SVGSVGElement,
  Omit<React.ComponentPropsWithoutRef<"svg">, "children">
>(({ className, ...props }, ref) => (
  <FillStarIcon
    data-testid="fill-rating-icon"
    ref={ref}
    className={cn("h-4 w-4", className)}
    {...props}
  />
));
RatingFillIcon.displayName = "RatingIcon";

const RatingEmptyIcon = forwardRef<
  SVGSVGElement,
  Omit<React.ComponentPropsWithoutRef<"svg">, "children">
>(({ className, ...props }, ref) => (
  <OutlineStarIcon
    data-testid="empty-rating-icon"
    ref={ref}
    className={cn("h-4 w-4", className)}
    {...props}
  />
));
RatingEmptyIcon.displayName = "RatingIcon";

const RatingHalfIcon = forwardRef<
  HTMLSpanElement,
  Omit<React.ComponentPropsWithoutRef<"span">, "children">
>(({ className, ...props }, ref) => (
  <span ref={ref} className="relative" {...props}>
    <div className={"w-1/2 overflow-hidden"}>
      <RatingFillIcon className={className} />
    </div>
    <RatingEmptyIcon className={cn("absolute top-0 left-0", className)} />
  </span>
));
RatingHalfIcon.displayName = "RatingIcon";

export { Rating };

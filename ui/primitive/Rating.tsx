import { StarIcon as FillStarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";
import type { WithRequired } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const ratingVariant = cva("flex space-x-1", {
  variants: {
    colorType: {
      primary: "text-primary-11",
      accent: "text-accent-11",
      neutral: "text-neutral-11",
      success: "text-success-11",
      error: "text-error-11",
      info: "text-info-11",
    },
  },
});
interface RatingProps
  extends React.ComponentPropsWithoutRef<"div">,
    Required<VariantProps<typeof ratingVariant>> {}
const Rating = forwardRef<
  HTMLDivElement,
  WithRequired<RatingProps, "children">
>(({ className, colorType, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(ratingVariant({ colorType }), className)}
      {...props}
    >
      {children}
    </div>
  );
});
Rating.displayName = "Rating";

const RatingFillIcon = forwardRef<
  SVGSVGElement,
  Omit<React.ComponentPropsWithoutRef<"svg">, "children">
>(({ className, ...props }, ref) => (
  <FillStarIcon ref={ref} className={cn("h-4 w-4", className)} {...props} />
));
RatingFillIcon.displayName = "RatingIcon";

const RatingEmptyIcon = forwardRef<
  SVGSVGElement,
  Omit<React.ComponentPropsWithoutRef<"svg">, "children">
>(({ className, ...props }, ref) => (
  <OutlineStarIcon ref={ref} className={cn("h-4 w-4", className)} {...props} />
));
RatingEmptyIcon.displayName = "RatingIcon";

const RatingHalfIcon = forwardRef<
  HTMLSpanElement,
  Omit<React.ComponentPropsWithoutRef<"span">, "children">
>(({ className, ...props }, ref) => (
  <span ref={ref} className="relative" {...props}>
    <div className={"w-1/2 overflow-hidden"}>
      <RatingFillIcon className={cn("h-4 w-4", className)} />
    </div>
    <RatingEmptyIcon
      className={cn("absolute top-0 left-0 h-4 w-4", className)}
    />
  </span>
));
RatingHalfIcon.displayName = "RatingIcon";

export { Rating, RatingFillIcon, RatingEmptyIcon, RatingHalfIcon };

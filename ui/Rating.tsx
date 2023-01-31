import { StarIcon as FillStarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ratingVariant = cva("", {
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

interface RatingProps extends Required<VariantProps<typeof ratingVariant>> {
  point: number;
}

export function Rating({ point, colorType }: RatingProps) {
  if (point > 10 || point < 0) {
    return null;
  }

  const rating = Math.round(point);
  const fillStarCount = Math.floor(rating / 2);
  const halfStarCount = rating % 2;
  const outlineStarCount = 5 - fillStarCount - halfStarCount;

  return (
    <div className={cn("flex space-x-1", ratingVariant({ colorType }))}>
      {Array.from({ length: fillStarCount }).map((_, index) => (
        <FillStarIcon key={index} className="h-4 w-4" />
      ))}

      {halfStarCount > 0 && (
        <div className=" relative h-4 w-4">
          <div className="w-2 overflow-hidden">
            <FillStarIcon className="h-4 w-4" />
          </div>

          <OutlineStarIcon className="absolute top-0 left-0 h-4 w-4" />
        </div>
      )}

      {Array.from({ length: outlineStarCount }).map((_, index) => (
        <OutlineStarIcon key={index} className="h-4 w-4" />
      ))}
    </div>
  );
}

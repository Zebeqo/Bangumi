import { StarIcon as FillStarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";

interface RatingProps {
  point: number;
}

export function Rating({ point }: RatingProps) {
  if (point > 10 || point < 0) {
    return null;
  }

  const rating = Math.round(point);
  const fillStarCount = Math.floor(rating / 2);
  const halfStarCount = rating % 2;
  const outlineStarCount = 5 - fillStarCount - halfStarCount;

  return (
    <div className="flex space-x-1">
      {Array.from({ length: fillStarCount }).map((_, index) => (
        <FillStarIcon key={index} className="h-4 w-4 text-accent-11" />
      ))}

      {halfStarCount > 0 && (
        <div className=" relative h-4 w-4">
          <div className="w-2 overflow-hidden">
            <FillStarIcon className="h-4 w-4 text-accent-11" />
          </div>

          <OutlineStarIcon className="absolute top-0 left-0 h-4 w-4 text-accent-11" />
        </div>
      )}

      {Array.from({ length: outlineStarCount }).map((_, index) => (
        <OutlineStarIcon key={index} className="h-4 w-4 text-accent-11" />
      ))}
    </div>
  );
}

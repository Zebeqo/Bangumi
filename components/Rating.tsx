import {
  Rating as RatingRoot,
  RatingEmptyIcon,
  RatingFillIcon,
  RatingHalfIcon,
} from "@/ui/primitive/Rating";

export const Rating = ({ score }: { score: number }) => {
  if (score > 10 || score < 0) {
    return <></>;
  }
  const rating = Math.round(score);
  const fillStarCount = Math.floor(rating / 2);
  const halfStarCount = rating % 2;
  const outlineStarCount = 5 - fillStarCount - halfStarCount;

  return (
    <RatingRoot colorType={"accent"}>
      <>
        {Array.from({ length: fillStarCount }).map((_, index) => (
          <RatingFillIcon key={index} />
        ))}
        {halfStarCount > 0 && <RatingHalfIcon />}
        {Array.from({ length: outlineStarCount }).map((_, index) => (
          <RatingEmptyIcon key={index} />
        ))}
      </>
    </RatingRoot>
  );
};

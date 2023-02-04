import type { Meta, StoryObj } from "@storybook/react";
import {
  Rating,
  RatingEmptyIcon,
  RatingFillIcon,
  RatingHalfIcon,
} from "@/ui/primitive/Rating";

const meta: Meta = {
  title: "Rating",
};

export default meta;

export const Rating_: StoryObj<{
  score: number;
  maxScore: number;
  totalIconCount: number;
}> = {
  args: { score: 6.6, maxScore: 10, totalIconCount: 5 },
  render: ({ score, maxScore, totalIconCount }) => {
    if (score > maxScore || score < 0) {
      return <></>;
    }
    const rating = Math.round(score);
    const fillStarCount = Math.floor(rating / (maxScore / totalIconCount));
    const halfStarCount =
      rating % (maxScore / totalIconCount) < maxScore / totalIconCount / 2
        ? 0
        : 1;
    const outlineStarCount = totalIconCount - fillStarCount - halfStarCount;

    return (
      <Rating colorType={"accent"}>
        {Array.from({ length: fillStarCount }).map((_, index) => (
          <RatingFillIcon key={index} />
        ))}
        {halfStarCount > 0 && <RatingHalfIcon />}
        {Array.from({ length: outlineStarCount }).map((_, index) => (
          <RatingEmptyIcon key={index} />
        ))}
      </Rating>
    );
  },
};

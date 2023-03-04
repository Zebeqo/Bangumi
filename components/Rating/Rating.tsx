import { Rating as RatingRoot } from "@/ui/primitive/Rating";

export const Rating = ({ score }: { score: number }) => (
  <RatingRoot
    score={score}
    maxScore={10}
    totalIconCount={5}
    colorVariant={"accent"}
  />
);

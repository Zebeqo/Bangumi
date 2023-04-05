import { Rating as RatingRoot } from "@/ui/components/Rating";

export const Rating = ({ score }: { score: number }) => (
  <RatingRoot score={score} maxScore={10} totalIconCount={5} color="accent" />
);

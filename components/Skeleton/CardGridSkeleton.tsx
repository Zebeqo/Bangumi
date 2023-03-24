import { CardSkeleton } from "@/components/Skeleton/CardSkeleton";
import { CardGridWrapper } from "@/components/Card/CardGridWrapper";

export function CardGridSkeleton() {
  return (
    <CardGridWrapper>
      {Array.from({ length: 20 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </CardGridWrapper>
  );
}

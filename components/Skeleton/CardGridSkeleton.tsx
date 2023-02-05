import { CardSkeleton } from "@/components/Skeleton/CardSkeleton";
import { GridWrapper } from "@/components/GridWrapper";

export function CardGridSkeleton() {
  return (
    <GridWrapper>
      {Array.from({ length: 20 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </GridWrapper>
  );
}

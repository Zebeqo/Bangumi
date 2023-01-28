import { CardSkeleton } from "@/components/Skeleton/CardSkeleton";
import { GridWrapper } from "@/ui/GridWrapper";

export function CardGridSkeleton() {
  return (
    <GridWrapper className="animate-pulse">
      {Array.from({ length: 20 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </GridWrapper>
  );
}

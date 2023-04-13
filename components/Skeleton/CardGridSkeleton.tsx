import { CardSkeleton } from "@/components/Skeleton/CardSkeleton";
import { CardGrid } from "@/components/Card/CardGrid";

export function CardGridSkeleton() {
  return (
    <CardGrid>
      <CardSkeletonList />
    </CardGrid>
  );
}

export const CardSkeletonList = () => (
  <>
    {Array.from({ length: 20 }).map((_, index) => (
      <CardSkeleton key={index} />
    ))}
  </>
);

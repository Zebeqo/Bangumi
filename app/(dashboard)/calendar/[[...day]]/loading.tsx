import { CardSkeleton } from "@/components/CardSkeleton";
import { GridWrapper } from "@/ui/GridWrapper";

export default function Loading() {
  return (
    <GridWrapper className="animate-pulse">
      {Array.from({ length: 20 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </GridWrapper>
  );
}

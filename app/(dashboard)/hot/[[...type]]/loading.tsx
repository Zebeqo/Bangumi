import { CardSkeleton } from "@/components/CardSkeleton";

export default function Loading() {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </>
  );
}

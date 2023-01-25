import TopPage from "./top/[[...type]]/page";
import TopLayout from "./top/[[...type]]/layout";
import { Suspense } from "react";
import { CardGridSkeleton } from "@/ui/CardGridSkeleton";

export default function Page() {
  return (
    <TopLayout params={{ type: ["anime"] }}>
      <Suspense fallback={<CardGridSkeleton />}>
        {/* @ts-expect-error Server Component */}
        <TopPage params={{ type: ["anime"] }} />
      </Suspense>
    </TopLayout>
  );
}

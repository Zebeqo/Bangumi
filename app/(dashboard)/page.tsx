// import { redirect } from "next/navigation";
//
// export default function Page() {
//   redirect("/hot/");
//
//   return <></>;
// }

import HotPage from "./hot/[[...type]]/page";
import HotLayout from "./hot/[[...type]]/layout";
import { Suspense } from "react";
import { CardGridSkeleton } from "@/ui/CardGridSkeleton";

export default function Page() {
  return (
    <HotLayout params={{ type: ["anime"] }}>
      <Suspense fallback={<CardGridSkeleton />}>
        {/* @ts-expect-error Server Component */}
        <HotPage params={{ type: ["anime"] }} />
      </Suspense>
    </HotLayout>
  );
}

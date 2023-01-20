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
import { CardSkeleton } from "@/components/CardSkeleton";

export default function Page() {
  return (
    <HotLayout params={{ type: ["anime"] }}>
      <Suspense
        fallback={Array.from({ length: 20 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      >
        {/* @ts-expect-error Server Component */}
        <HotPage params={{ type: ["anime"] }} />
      </Suspense>
    </HotLayout>
  );
}

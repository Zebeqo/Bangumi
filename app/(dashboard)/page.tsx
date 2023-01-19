// import { redirect } from "next/navigation";
//
// export default function Page() {
//   redirect("/hot/");
//
//   return <></>;
// }

import HotPage from "./hot/[[...type]]/page";
import HotLayout from "./hot/[[...type]]/layout";

export default function Page() {
  return (
    <HotLayout params={{ type: ["anime"] }}>
      {/* @ts-expect-error Server Component */}
      <HotPage params={{ type: ["anime"] }} />
    </HotLayout>
  );
}

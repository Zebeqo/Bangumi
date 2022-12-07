import { unstable_getServerSession } from "next-auth/next";
import { Sign } from "./Sign";
import { authOptions } from "@/lib/auth";

export default async function Page() {
  const session = await unstable_getServerSession(authOptions);
  return (
    <>
      <h1 className="text-3xl font-bold underline ?">Hello, Next.js!</h1>
      <Sign />
      <div>{JSON.stringify(session, null, 2)}</div>
    </>
  );
}

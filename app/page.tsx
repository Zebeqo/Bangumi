import { unstable_getServerSession } from "next-auth/next";
import { SignIn } from "./SignIn";
import { authOptions } from "@/lib/auth";

export default async function Page() {
  const session = await unstable_getServerSession(authOptions);
  return (
    <>
      <h1 className="text-3xl font-bold underline ?">Hello, Next.js!</h1>
      <SignIn />
      <div>{JSON.stringify(session, null, 2)}</div>
    </>
  );
}

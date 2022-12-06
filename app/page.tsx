import { unstable_getServerSession } from "next-auth";
import { SignIn } from "./SignIn";
import * as console from "console";

export default async function Page() {
  const session = await unstable_getServerSession();
  console.log(session);
  return (
    <>
      <h1 className="text-3xl font-bold underline ?">Hello, Next.js!</h1>
      <SignIn />
      <div>{JSON.stringify(session, null, 2)}</div>
    </>
  );
}

"use client";

import { signIn, useSession } from "next-auth/react";

export function SignIn() {
  const { data } = useSession();

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <button onClick={() => signIn()}>Sign In</button>
      <div className="text-red-900">{JSON.stringify(data, null, 2)}</div>
    </>
  );
}

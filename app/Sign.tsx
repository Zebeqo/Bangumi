"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function Sign() {
  const { data: session } = useSession();

  return (
    <>
      {!session ? (
        <button onClick={() => signIn()}>Sign in</button>
      ) : (
        <button onClick={() => signOut()}>Sign out</button>
      )}
    </>
  );
}

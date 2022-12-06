"use client";

import { signIn } from "next-auth/react";

export function SignIn() {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return <button onClick={() => signIn()}>Sign In</button>;
}

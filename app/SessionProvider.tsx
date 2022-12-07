"use client";

import type { SessionProviderProps } from "next-auth/react";
import { SessionProvider } from "next-auth/react";

export function ClientSessionProvider(props: SessionProviderProps) {
  return <SessionProvider {...props} />;
}

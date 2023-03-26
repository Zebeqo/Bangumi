"use client";

import { createStore, Provider } from "jotai";
import { DevTools } from "jotai-devtools";

export const rootStore = createStore();

export default function JotaiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={rootStore}>{children}</Provider>;
}
export { DevTools as JotaiDevTools };

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "jotai/react";
import { createStore } from "jotai/vanilla";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      suspense: true,
    },
  },
});

const store = createStore();

export function StateProvider({
  children,
  noDevtools = false,
}: {
  children: React.ReactNode;
  noDevtools?: boolean;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{children}</Provider>
      {!noDevtools && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}

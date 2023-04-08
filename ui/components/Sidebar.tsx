"use client";
import Link from "next/link";
import { classed } from "@/classed.config";
import { Button } from "@/ui/components/Button";
import { useMemo } from "react";
import { atom, createStore, Provider, useAtomValue } from "jotai";
import * as Separator from "@radix-ui/react-separator";

export const sidebarStore = createStore();

const activeValueAtom = atom<string | null>(null);

const Sidebar = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => {
  sidebarStore.set(activeValueAtom, value);

  return (
    <Provider store={sidebarStore}>
      <nav className="fixed h-full w-52 border-r border-r-neutral-6 px-4 py-4">
        {children}
      </nav>
    </Provider>
  );
};

const SidebarItem = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => {
  const isSelectedAtom = useMemo(
    () => atom((get) => get(activeValueAtom)?.startsWith(value)),
    [value]
  );

  const isSelected = useAtomValue(isSelectedAtom);

  return (
    <Button
      as={Link}
      variant={isSelected ? "selected" : "ghost"}
      color={isSelected ? "primary" : "neutral"}
      href={`${value}`}
      className="w-full justify-start"
    >
      {children}
    </Button>
  );
};

const SidebarGroup = classed("div", "flex flex-col space-y-1");

const SidebarSeparator = classed(
  Separator.Root,
  "mt-2 mb-4 h-px w-full bg-neutral-6"
);

const SidebarLabel = classed("p", "px-4 text-neutral-9");

export { Sidebar, SidebarItem, SidebarGroup, SidebarSeparator, SidebarLabel };

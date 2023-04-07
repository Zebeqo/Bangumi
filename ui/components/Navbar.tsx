"use client";

import { useMemo } from "react";
import { atom, createStore, Provider, useAtomValue } from "jotai";
import Link from "next/link";
import { Button } from "@/ui/components/Button";

export const navbarStore = createStore();

const activeValueAtom = atom<string | null>(null);

const Navbar = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => {
  navbarStore.set(activeValueAtom, value);

  return (
    <Provider store={navbarStore}>
      <nav className="flex h-fit items-center space-x-1">{children}</nav>
    </Provider>
  );
};

const NavbarItem = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => {
  const isSelectedAtom = useMemo(
    () => atom((get) => get(activeValueAtom) === value),
    [value]
  );

  const isSelected = useAtomValue(isSelectedAtom);

  return (
    <Button
      as={Link}
      variant={isSelected ? "selected" : "ghost"}
      href={`${value}`}
    >
      {children}
    </Button>
  );
};
NavbarItem.displayName = "NavbarItem";

export { Navbar, NavbarItem };

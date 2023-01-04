"use client";

import type { ReactNode } from "react";
import {
  UserIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/20/solid";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { Button } from "@/ui/Button";

interface RadixMenuItem {
  label: string;
  icon: ReactNode;
  handleSelect: () => void;
}

const generalMenuItems: RadixMenuItem[] = [
  {
    label: "个人主页",
    icon: <UserIcon />,
    // TODO: link to profile page /user/:id
    handleSelect: () => {
      return;
    },
  },
  {
    label: "设置",
    icon: <Cog6ToothIcon />,
    // TODO: popup settings
    handleSelect: () => {
      return;
    },
  },
  {
    label: "登出",
    icon: <ArrowRightOnRectangleIcon />,
    handleSelect: () => {
      void signOut();
    },
  },
];
export const AvatarDropdownMenu = ({ imageURL }: { imageURL: string }) => (
  <DropdownMenuPrimitive.Root>
    <DropdownMenuPrimitive.Trigger asChild>
      <Image
        src={imageURL}
        alt={"Avatar"}
        width={48}
        height={48}
        className="rounded-lg hover:cursor-pointer"
      />
    </DropdownMenuPrimitive.Trigger>
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        align="end"
        sideOffset={4}
        className="z-50 w-auto rounded-lg bg-neutral-1 px-2 py-2 shadow-lg ring-1 ring-neutral-6 radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up"
      >
        {generalMenuItems.map(({ label, icon, handleSelect }, i) => (
          <DropdownMenuPrimitive.Item
            key={i}
            onSelect={handleSelect}
            className="outline-none"
          >
            <Button
              color="neutral"
              icon={icon}
              type="ghost"
              label={label}
              className="w-full justify-start"
            />
          </DropdownMenuPrimitive.Item>
        ))}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  </DropdownMenuPrimitive.Root>
);

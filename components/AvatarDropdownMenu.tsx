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
import { useToast } from "@/hooks/use-toast";
import { createIssueToast } from "@/lib/toast";

interface RadixMenuItem {
  label: string;
  icon: ReactNode;
  handleSelect: () => void;
}

export const AvatarDropdownMenu = ({
  imageURL,
  ...props
}: {
  imageURL: string;
}) => {
  const avatarMenuItems: RadixMenuItem[] = [
    {
      label: "个人主页",
      icon: <UserIcon />,
      handleSelect: () => {
        openToast(createIssueToast(38));
      },
    },
    {
      label: "设置",
      icon: <Cog6ToothIcon />,
      handleSelect: () => {
        openToast(createIssueToast(40));
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
  const openToast = useToast();

  return (
    <DropdownMenuPrimitive.Root {...props}>
      <DropdownMenuPrimitive.Trigger className="relative outline-none">
        <Image
          src={imageURL}
          alt={"Avatar"}
          width={48}
          height={48}
          className="rounded-lg"
        />
        <div className="absolute top-0 left-0 h-full w-full rounded-lg shadow-[inset_0_0_8px_rgba(0,0,0,0.15)]" />
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          align="end"
          sideOffset={4}
          className="z-50 w-auto rounded-lg bg-neutral-1 px-2 py-2 shadow-lg outline-none ring-1 ring-neutral-6 radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up"
        >
          {avatarMenuItems.map(({ label, icon, handleSelect }, i) => (
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
};

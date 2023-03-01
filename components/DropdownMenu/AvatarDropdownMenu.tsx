"use client";

import {
  UserIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import type { MenuItem } from "@/ui/primitive/DropdownMenu";
import {
  DropdownMenu,
  DropdownMenuContent_Simple,
  DropdownMenuTrigger,
} from "@/ui/primitive/DropdownMenu";

export const AvatarDropdownMenu = ({ imageURL }: { imageURL: string }) => {
  const toast = useToast();

  const menuItems: MenuItem[] = [
    {
      label: "个人主页",
      icon: <UserIcon />,
      handleSelect: () => {
        toast({
          type: "info",
          title: "功能尚未实现！",
        });
      },
    },
    {
      label: "设置",
      icon: <Cog6ToothIcon />,
      handleSelect: () => {
        toast({
          type: "info",
          title: "功能尚未实现！",
        });
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="relative rounded-lg outline-none ring-neutral-7 focus:outline-none focus:ring-2"
        aria-label="more"
      >
        <Image
          src={imageURL}
          alt={"Avatar"}
          width={48}
          height={48}
          className="rounded-lg"
          unoptimized={true}
        />
        <div className="absolute top-0 left-0 h-full w-full rounded-lg shadow-[inset_0_0_8px_rgba(0,0,0,0.15)]" />
      </DropdownMenuTrigger>
      <DropdownMenuContent_Simple
        colorVariant="neutral"
        menuItems={menuItems}
        align="end"
        sideOffset={4}
      />
    </DropdownMenu>
  );
};

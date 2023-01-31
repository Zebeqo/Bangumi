"use client";

import {
  UserIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import { createIssueToast } from "@/lib/toast";
import type { MenuItem } from "@/ui/primitive/DropdownMenu";
import {
  DropdownMenu,
  DropdownMenuContent_Simple,
  DropdownMenuTrigger,
} from "@/ui/primitive/DropdownMenu";

export const AvatarDropdownMenu = ({ imageURL }: { imageURL: string }) => {
  const openToast = useToast();

  const menuItems: MenuItem[] = [
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative outline-none" aria-label="more">
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
        colorType="neutral"
        menuItems={menuItems}
        align="end"
        sideOffset={4}
      />
    </DropdownMenu>
  );
};

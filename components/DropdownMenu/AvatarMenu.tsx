"use client";

import {
  UserIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/primitive/DropdownMenu";
import { Tooltip } from "@/ui/primitive/Tooltip";
import { LoginButton } from "@/components/Button/LoginButton";

export const AvatarMenu = () => {
  const { data: session } = useSession();

  const toast = useToast();

  const menuItems = [
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

  if (!session) {
    return <LoginButton />;
  }

  return (
    <DropdownMenu>
      <Tooltip content={`你好，${session.user.nickname} 😊`} side="bottom">
        <DropdownMenuTrigger
          className="relative rounded-lg outline-none ring-neutral-7 focus:outline-none focus:ring-2"
          aria-label="avatar-menu"
        >
          <Image
            src={session.user.image}
            alt={"Avatar"}
            width={48}
            height={48}
            className="rounded-lg"
            unoptimized={true}
          />
          <div className="absolute top-0 left-0 h-full w-full rounded-lg shadow-[inset_0_0_8px_rgba(0,0,0,0.15)]" />
        </DropdownMenuTrigger>
      </Tooltip>
      <DropdownMenuContent align="end" sideOffset={4}>
        {menuItems.map(({ label, icon, handleSelect }, i) => (
          <DropdownMenuItem key={`${label}-${i}`} onSelect={handleSelect}>
            <span className="mr-2 h-5 w-5">{icon}</span>
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

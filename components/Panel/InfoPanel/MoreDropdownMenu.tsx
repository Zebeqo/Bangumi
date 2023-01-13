"use client";

import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Button } from "@/ui/Button";
import { useToast } from "@/hooks/use-toast";
import { createIssueToast } from "@/lib/toast";

interface RadixMenuItem {
  label: string;
  handleSelect: () => void;
}

export const MoreDropdownMenu = ({
  subject_id,
  hasCollectionData = false,
}: {
  subject_id: number;
  hasCollectionData?: boolean;
}) => {
  const openToast = useToast();
  const avatarMenuItems: RadixMenuItem[] = [
    {
      label: "取消收藏",
      handleSelect: () => {
        openToast(createIssueToast(42));
      },
    },
    {
      label: "复制链接",
      handleSelect: () => {
        void (async () => {
          await navigator.clipboard.writeText(
            `https://www.bgm.tv/subject/${subject_id}`
          );
        })();
      },
    },
    {
      label: "在主站中打开",
      handleSelect: () => {
        window.open(`https://www.bgm.tv/subject/${subject_id}`, "_blank");
      },
    },
  ];
  if (!hasCollectionData) {
    avatarMenuItems.shift();
  }

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <Button
          colorType={"neutral"}
          type={"outline"}
          icon={<EllipsisVerticalIcon />}
        />
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          align="start"
          sideOffset={8}
          className="z-50 w-auto rounded-lg bg-neutral-1 px-2 py-2 shadow-lg outline-none ring-1 ring-neutral-6 radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up"
        >
          {avatarMenuItems.map(({ label, handleSelect }, i) => (
            <DropdownMenuPrimitive.Item
              key={i}
              onSelect={handleSelect}
              className="outline-none"
            >
              <Button
                colorType="neutral"
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

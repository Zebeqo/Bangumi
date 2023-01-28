"use client";

import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { Button } from "@/ui/Button";
import { useToast } from "@/hooks/use-toast";
import type { MenuItem } from "@/ui/primitive/DropdownMenu";
import {
  DropdownMenu,
  DropdownMenuContent_Simple,
  DropdownMenuTrigger,
} from "@/ui/primitive/DropdownMenu";

export const MoreDropdownMenu = ({
  subject_id,
  hasCollectionData = false,
}: {
  subject_id: number;
  hasCollectionData?: boolean;
}) => {
  const openToast = useToast();
  const menuItems: MenuItem[] = [
    {
      label: "取消收藏",
      handleSelect: () => {
        openToast({
          type: "info",
          title: "取消收藏条目失败",
          description: "收藏 api 暂未开放，请先自行前往主站取消收藏。",
          action: {
            label: "前往主站",
            onClick: () => {
              window.open(`https://bgm.tv/subject/${subject_id}`, "_blank");
            },
          },
        });
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
    menuItems.shift();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label={"more"}
          colorType={"neutral"}
          type={"outline"}
          icon={<EllipsisVerticalIcon />}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent_Simple menuItems={menuItems} />
    </DropdownMenu>
  );
};

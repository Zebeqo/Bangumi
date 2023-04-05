"use client";

import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/components/DropdownMenu";
import { Button } from "@/ui/components/Button";
import { Tooltip } from "@/ui/components/Tooltip";

export const MoreMenu = ({
  subject_id,
  hasCollectionData = false,
}: {
  subject_id: number;
  hasCollectionData?: boolean;
}) => {
  const toast = useToast();
  const menuItems = [
    {
      label: "取消收藏",
      handleSelect: () => {
        toast({
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
      <Tooltip content="更多选项">
        <DropdownMenuTrigger asChild>
          <Button variant="outline" iconOnly aria-label={"more"}>
            <EllipsisVerticalIcon className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
      </Tooltip>
      <DropdownMenuContent>
        {menuItems.map(({ label, handleSelect }, i) => (
          <DropdownMenuItem key={`${label}-${i}`} onSelect={handleSelect}>
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

import type { Meta, StoryObj } from "@storybook/react";
import type { MenuItem } from "@/ui/primitive/DropdownMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuContent_Simple,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/ui/primitive/DropdownMenu";
import {
  ArrowRightOnRectangleIcon,
  ArrowsUpDownIcon,
  Cog6ToothIcon,
  EllipsisVerticalIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";
import { useToast } from "@/hooks/use-toast";
import { createIssueToast } from "@/lib/toast";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { screen, userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { OutlineButton, OutlineButton_Icon } from "@/ui/primitive/Button";

const meta: Meta = {
  title: "DropdownMenu",
};

export default meta;

type Story = StoryObj;

export const MoreDropdownMenu: Story = {
  render: () => {
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
                window.open(
                  `https://bgm.tv/subject/${STORYBOOK_SUBJECT_ID}`,
                  "_blank"
                );
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
              `https://www.bgm.tv/subject/${STORYBOOK_SUBJECT_ID}`
            );
          })();
        },
      },
      {
        label: "在主站中打开",
        handleSelect: () => {
          window.open(
            `https://www.bgm.tv/subject/${STORYBOOK_SUBJECT_ID}`,
            "_blank"
          );
        },
      },
    ];

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <OutlineButton_Icon aria-label={"more"} colorType={"neutral"}>
            <EllipsisVerticalIcon className="h-6 w-6" />
          </OutlineButton_Icon>
        </DropdownMenuTrigger>
        <DropdownMenuContent_Simple menuItems={menuItems} align="start" />
      </DropdownMenu>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", { name: "more" });
    await userEvent.click(button);
    const menu = await screen.findByRole("menu");
    const items = within(menu).getAllByRole("menuitem");
    await expect(items.length).toEqual(3);
    for (const item of items) {
      await expect(item).toHaveTextContent(/./);
    }
  },
};

export const AvatarDropdownMenu: Story = {
  render: () => {
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
        <DropdownMenuTrigger
          className="relative outline-none"
          aria-label="more"
        >
          <Image
            src={
              "https://lain.bgm.tv/pic/user/l/000/76/09/760931.jpg?r=1674400223&hd=1"
            }
            alt={"Avatar"}
            width={48}
            height={48}
            className="rounded-lg"
            unoptimized={true}
          />
          <div className="absolute top-0 left-0 h-full w-full rounded-lg shadow-[inset_0_0_8px_rgba(0,0,0,0.15)]" />
        </DropdownMenuTrigger>
        <DropdownMenuContent_Simple menuItems={menuItems} />
      </DropdownMenu>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", { name: "more" });
    await userEvent.click(button);
    const menu = await screen.findByRole("menu");
    const items = within(menu).getAllByRole("menuitem");
    await expect(items.length).toEqual(3);
    for (const item of items) {
      await expect(item).toHaveTextContent(/./);
    }
  },
};

export const SortDropdownMenu: Story = {
  render: () => {
    const [sortRadioItem, setSortRadioItem] = useState("do");
    const [orderRadioItem, setOrderRadioItem] = useState("desc");

    const sortRadioItems = [
      {
        label: "在看人数",
        value: "do",
      },
      {
        label: "评分人数",
        value: "count",
      },
      {
        label: "评分",
        value: "rating",
      },
    ];

    const orderRadioItems = [
      {
        label: "升序",
        value: "asc",
      },
      {
        label: "降序",
        value: "desc",
      },
    ];

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <OutlineButton aria-label={"sort"} colorType={"neutral"}>
            <ArrowsUpDownIcon className="mr-2 h-5 w-5" />
            排序
          </OutlineButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={8} className="w-36">
          <DropdownMenuRadioGroup
            value={sortRadioItem}
            onValueChange={setSortRadioItem}
          >
            {sortRadioItems.map(({ value, label }, index) => (
              <DropdownMenuRadioItem value={value} key={`${value}-${index}`}>
                {label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={orderRadioItem}
            onValueChange={setOrderRadioItem}
          >
            {orderRadioItems.map(({ value, label }, index) => (
              <DropdownMenuRadioItem value={value} key={`${value}-${index}`}>
                {label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", { name: "sort" });
    await userEvent.click(button);
    const menu = await screen.findByRole("menu");
    const items = within(menu).getAllByRole("menuitemradio");
    await expect(items.length).toEqual(5);
    for (const item of items) {
      await expect(item).toHaveTextContent(/./);
    }
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import type { DropdownMenuColor, MenuItem } from "@/ui/primitive/DropdownMenu";
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
import Image from "next/image";
import { useState } from "react";
import { screen, userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { OutlineButton, OutlineButton_Icon } from "@/ui/primitive/Button";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
  title: "DropdownMenu",
  argTypes: {
    colorVariant: {
      control: {
        type: "radio",
      },
      options: ["primary", "accent", "neutral"],
    },
  },
};

export default meta;

export const MoreDropdownMenu: StoryObj<{
  menuItems: MenuItem[];
  colorVariant: DropdownMenuColor;
}> = {
  args: {
    menuItems: [
      {
        label: "取消收藏",
        handleSelect: action("取消收藏"),
      },
      {
        label: "复制链接",
        handleSelect: action("复制链接"),
      },
      {
        label: "在主站中打开",
        handleSelect: action("在主站中打开"),
      },
    ],
    colorVariant: "neutral",
  },
  render: ({ menuItems, colorVariant }) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <OutlineButton_Icon aria-label={"more"} colorVariant={colorVariant}>
            <EllipsisVerticalIcon className="h-6 w-6" />
          </OutlineButton_Icon>
        </DropdownMenuTrigger>
        <DropdownMenuContent_Simple
          colorVariant={colorVariant}
          menuItems={menuItems}
          align="start"
        />
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

export const AvatarDropdownMenu: StoryObj<{
  menuItems: MenuItem[];
  colorVariant: DropdownMenuColor;
}> = {
  args: {
    menuItems: [
      {
        label: "个人主页",
        icon: <UserIcon />,
        handleSelect: action("个人主页"),
      },
      {
        label: "设置",
        icon: <Cog6ToothIcon />,
        handleSelect: action("设置"),
      },
      {
        label: "登出",
        icon: <ArrowRightOnRectangleIcon />,
        handleSelect: action("登出"),
      },
    ],
    colorVariant: "neutral",
  },
  render: ({ menuItems, colorVariant }) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger
          className="relative rounded-lg outline-none ring-neutral-7 focus:outline-none focus:ring-2"
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
        <DropdownMenuContent_Simple
          colorVariant={colorVariant}
          menuItems={menuItems}
        />
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

export const SortDropdownMenu: StoryObj<{
  sortRadioItems: { label: string; value: string }[];
  orderRadioItems: { label: string; value: string }[];
  colorVariant: DropdownMenuColor;
}> = {
  args: {
    sortRadioItems: [
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
    ],
    orderRadioItems: [
      {
        label: "升序",
        value: "asc",
      },
      {
        label: "降序",
        value: "desc",
      },
    ],
    colorVariant: "neutral",
  },
  render: ({ sortRadioItems, colorVariant, orderRadioItems }) => {
    const [sortRadioItem, setSortRadioItem] = useState("do");
    const [orderRadioItem, setOrderRadioItem] = useState("desc");

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <OutlineButton aria-label={"sort"} colorVariant={colorVariant}>
            <ArrowsUpDownIcon className="mr-2 h-5 w-5" />
            排序
          </OutlineButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          colorVariant={colorVariant}
          align="end"
          sideOffset={8}
          className="w-36"
        >
          <DropdownMenuRadioGroup
            value={sortRadioItem}
            onValueChange={setSortRadioItem}
          >
            {sortRadioItems.map(({ value, label }, index) => (
              <DropdownMenuRadioItem
                colorVariant={colorVariant}
                value={value}
                key={`${value}-${index}`}
              >
                {label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator colorVariant={colorVariant} />
          <DropdownMenuRadioGroup
            value={orderRadioItem}
            onValueChange={setOrderRadioItem}
          >
            {orderRadioItems.map(({ value, label }, index) => (
              <DropdownMenuRadioItem
                colorVariant={colorVariant}
                value={value}
                key={`${value}-${index}`}
              >
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

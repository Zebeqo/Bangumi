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
    colorType: {
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
  colorType: DropdownMenuColor;
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
    colorType: "neutral",
  },
  render: ({ menuItems, colorType }) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <OutlineButton_Icon aria-label={"more"} colorType={colorType}>
            <EllipsisVerticalIcon className="h-6 w-6" />
          </OutlineButton_Icon>
        </DropdownMenuTrigger>
        <DropdownMenuContent_Simple
          colorType={colorType}
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
  colorType: DropdownMenuColor;
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
    colorType: "neutral",
  },
  render: ({ menuItems, colorType }) => {
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
        <DropdownMenuContent_Simple
          colorType={colorType}
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
  colorType: DropdownMenuColor;
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
    colorType: "neutral",
  },
  render: ({ sortRadioItems, colorType }) => {
    const [sortRadioItem, setSortRadioItem] = useState("do");
    const [orderRadioItem, setOrderRadioItem] = useState("desc");

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
          <OutlineButton aria-label={"sort"} colorType={colorType}>
            <ArrowsUpDownIcon className="mr-2 h-5 w-5" />
            排序
          </OutlineButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          colorType={colorType}
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
                colorType={colorType}
                value={value}
                key={`${value}-${index}`}
              >
                {label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator colorType={colorType} />
          <DropdownMenuRadioGroup
            value={orderRadioItem}
            onValueChange={setOrderRadioItem}
          >
            {orderRadioItems.map(({ value, label }, index) => (
              <DropdownMenuRadioItem
                colorType={colorType}
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

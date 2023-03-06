import type { Meta, StoryObj } from "@storybook/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/ui/primitive/DropdownMenu";
import {
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  EllipsisVerticalIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import { screen, userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Button } from "@/ui/primitive/Button";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "DropdownMenu",
} satisfies Meta;

export default meta;

export const DropdownMenu_: StoryObj<{
  menuItems: {
    label: string;
    handleSelect: () => void;
  }[];
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
  },
  render: ({ menuItems }) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={{
              type: "outline",
              iconOnly: true,
            }}
            data-testid="Dropdown Menu"
          >
            <EllipsisVerticalIcon className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {menuItems.map(({ label, handleSelect }, i) => (
            <DropdownMenuItem key={`${label}-${i}`} onSelect={handleSelect}>
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByTestId("Dropdown Menu");
    await userEvent.click(button);
    const menu = await screen.findByRole("menu");
    const items = within(menu).getAllByRole("menuitem");
    await expect(items.length).toEqual(3);
    for (const item of items) {
      await expect(item).toHaveTextContent(/./);
    }
  },
};

export const DropdownMenu_Icon: StoryObj<{
  menuItems: {
    label: string;
    icon: JSX.Element;
    handleSelect: () => void;
  }[];
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
  },
  render: ({ menuItems }) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={{
              type: "outline",
              iconOnly: true,
            }}
            data-testid="Dropdown Menu"
          >
            <EllipsisVerticalIcon className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {menuItems.map(({ label, icon, handleSelect }, i) => (
            <DropdownMenuItem key={`${label}-${i}`} onSelect={handleSelect}>
              <span className="mr-2 h-5 w-5">{icon}</span>
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByTestId("Dropdown Menu");
    await userEvent.click(button);
    const menu = await screen.findByRole("menu");
    const items = within(menu).getAllByRole("menuitem");
    await expect(items.length).toEqual(3);
    for (const item of items) {
      await expect(item).toHaveTextContent(/./);
    }
  },
};

export const DropdownMenu_Radio: StoryObj<{
  sortRadioItems: { label: string; value: string }[];
  orderRadioItems: { label: string; value: string }[];
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
  },
  render: ({ sortRadioItems, orderRadioItems }) => {
    const [sortRadioItem, setSortRadioItem] = useState("do");
    const [orderRadioItem, setOrderRadioItem] = useState("desc");

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={{
              type: "outline",
              iconOnly: true,
            }}
            data-testid="Dropdown Menu"
          >
            <EllipsisVerticalIcon className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" sideOffset={8} className="w-36">
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
    const button = await canvas.findByTestId("Dropdown Menu");
    await userEvent.click(button);
    const menu = await screen.findByRole("menu");
    const items = within(menu).getAllByRole("menuitemradio");
    await expect(items.length).toEqual(5);
    for (const item of items) {
      await expect(item).toHaveTextContent(/./);
    }
  },
};

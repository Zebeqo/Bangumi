import type { Meta, StoryObj } from "@storybook/react";
import { Navbar, NavbarItem } from "@/ui/primitive/Navbar";

const meta = {
  title: "Navbar",
} satisfies Meta;

export default meta;

export const Navbar_: StoryObj<{ value: string }> = {
  args: { value: "home" },
  render: ({ value }) => {
    return (
      <Navbar value={value}>
        <NavbarItem value="home">主页</NavbarItem>
        <NavbarItem value="posts">文章</NavbarItem>
        <NavbarItem value="projects">项目</NavbarItem>
        <NavbarItem value="collections">收藏</NavbarItem>
      </Navbar>
    );
  },
  argTypes: {
    value: {
      control: {
        type: "radio",
      },
      options: ["home", "posts", "projects", "collections"],
    },
  },
};

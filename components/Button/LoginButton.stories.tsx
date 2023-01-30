import type { Meta, StoryObj } from "@storybook/react";
import { LoginButton as LoginButtonComponent } from "./LoginButton";

const meta: Meta = {
  title: "Button/LoginButton",
};

export default meta;

type Story = StoryObj;

export const LoginButton: Story = {
  render: () => (
    <>
      <LoginButtonComponent />
    </>
  ),
};

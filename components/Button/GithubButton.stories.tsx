import type { Meta, StoryObj } from "@storybook/react";
import { GithubButton as GithubButtonComponent } from "./GithubButton";

const meta: Meta = {
  title: "Button/GithubButton",
};

export default meta;

type Story = StoryObj;

export const GithubButton: Story = {
  render: () => (
    <>
      <GithubButtonComponent />
    </>
  ),
};

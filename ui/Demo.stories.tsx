import type { Meta, StoryObj } from "@storybook/react";
import app from "./Demo";

const meta: Meta = {
  title: "Demo",
};

export default meta;

export const Demo: StoryObj = {
  render: () => {
    return app();
  },
};

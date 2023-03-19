import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import type { ButtonColor } from "@/ui/primitive/Button";
import { Button } from "@/ui/primitive/Button";
import { RowDecorator } from "@/ui/StorybookDecorator";
import { BoltIcon } from "@heroicons/react/20/solid";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";
import { colorArray } from "@/lib/color";

const meta = {
  title: "Button",
  decorators: [RowDecorator],
  argTypes: {
    color: {
      control: {
        type: "radio",
      },
      options: colorArray,
    },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    for (const button of buttons) {
      await userEvent.click(button);
    }
    await expect(args.onClick).toHaveBeenCalledTimes(3);
  },
} satisfies Meta;

export default meta;

type ButtonStory = StoryObj<{
  color: ButtonColor;
  text: string;
  onClick: () => void;
}>;

export const Primary: ButtonStory = {
  args: {
    color: "accent",
    text: "Button",
    onClick: action("button clicked"),
  },
  render: ({ color, text, onClick }) => (
    <>
      <Button
        variant={{
          type: "primary",
          color: color,
        }}
        onClick={onClick}
      >
        {text}
      </Button>

      <Button
        variant={{
          type: "primary",
          color: color,
        }}
        onClick={onClick}
      >
        <BoltIcon className="mr-2 h-5 w-5" />
        {text}
      </Button>

      <Button
        variant={{
          type: "primary",
          color: color,
          iconOnly: true,
        }}
        onClick={onClick}
      >
        <BoltIcon className="h-6 w-6" />
      </Button>
    </>
  ),
};

export const Secondary: ButtonStory = {
  args: {
    color: "accent",
    text: "Button",
    onClick: action("button clicked"),
  },
  render: ({ color, text, onClick }) => (
    <>
      <Button
        variant={{
          type: "secondary",
          color: color,
        }}
        onClick={onClick}
      >
        {text}
      </Button>

      <Button
        variant={{
          type: "secondary",
          color: color,
        }}
        onClick={onClick}
      >
        <BoltIcon className="mr-2 h-5 w-5" />
        {text}
      </Button>

      <Button
        variant={{
          type: "secondary",
          color: color,
          iconOnly: true,
        }}
        onClick={onClick}
      >
        <BoltIcon className="h-6 w-6" />
      </Button>
    </>
  ),
};

export const Outline: ButtonStory = {
  args: {
    color: "accent",
    text: "Button",
    onClick: action("button clicked"),
  },
  render: ({ color, text, onClick }) => (
    <>
      <Button
        variant={{
          type: "outline",
          color: color,
        }}
        onClick={onClick}
      >
        {text}
      </Button>

      <Button
        variant={{
          type: "outline",
          color: color,
        }}
        onClick={onClick}
      >
        <BoltIcon className="mr-2 h-5 w-5" />
        {text}
      </Button>

      <Button
        variant={{
          type: "outline",
          color: color,
          iconOnly: true,
        }}
        onClick={onClick}
      >
        <BoltIcon className="h-6 w-6" />
      </Button>
    </>
  ),
};

export const Ghost: ButtonStory = {
  args: {
    color: "accent",
    text: "Button",
    onClick: action("button clicked"),
  },
  render: ({ color, text, onClick }) => (
    <>
      <Button
        variant={{
          type: "ghost",
          color: color,
        }}
        onClick={onClick}
      >
        {text}
      </Button>

      <Button
        variant={{
          type: "ghost",
          color: color,
        }}
        onClick={onClick}
      >
        <BoltIcon className="mr-2 h-5 w-5" />
        {text}
      </Button>

      <Button
        variant={{
          type: "ghost",
          color: color,
          iconOnly: true,
        }}
        onClick={onClick}
      >
        <BoltIcon className="h-6 w-6" />
      </Button>
    </>
  ),
};

export const Selected: ButtonStory = {
  args: {
    color: "accent",
    text: "Button",
    onClick: action("button clicked"),
  },
  render: ({ color, text, onClick }) => (
    <>
      <Button
        variant={{
          type: "selected",
          color: color,
        }}
        onClick={onClick}
      >
        {text}
      </Button>

      <Button
        variant={{
          type: "selected",
          color: color,
        }}
        onClick={onClick}
      >
        <BoltIcon className="mr-2 h-5 w-5" />
        {text}
      </Button>

      <Button
        variant={{
          type: "selected",
          color: color,
          iconOnly: true,
        }}
        onClick={onClick}
      >
        <BoltIcon className="h-6 w-6" />
      </Button>
    </>
  ),
};

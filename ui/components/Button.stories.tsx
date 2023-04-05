import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/ui/components/Button";
import { RowDecorator } from "@/ui/StorybookDecorator";
import { BoltIcon } from "@heroicons/react/20/solid";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";
import type { Color } from "@/lib/color";
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
  color: Color;
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
      <Button variant="primary" color={color} onClick={onClick}>
        {text}
      </Button>

      <Button variant="primary" color={color} onClick={onClick}>
        <BoltIcon className="mr-2 h-5 w-5" />
        {text}
      </Button>

      <Button variant="primary" color={color} iconOnly={true} onClick={onClick}>
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
      <Button variant="secondary" color={color} onClick={onClick}>
        {text}
      </Button>

      <Button variant="secondary" color={color} onClick={onClick}>
        <BoltIcon className="mr-2 h-5 w-5" />
        {text}
      </Button>

      <Button
        variant="secondary"
        color={color}
        iconOnly={true}
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
      <Button variant="outline" color={color} onClick={onClick}>
        {text}
      </Button>

      <Button variant="outline" color={color} onClick={onClick}>
        <BoltIcon className="mr-2 h-5 w-5" />
        {text}
      </Button>

      <Button variant="outline" color={color} iconOnly={true} onClick={onClick}>
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
      <Button variant="ghost" color={color} onClick={onClick}>
        {text}
      </Button>

      <Button variant="ghost" color={color} onClick={onClick}>
        <BoltIcon className="mr-2 h-5 w-5" />
        {text}
      </Button>

      <Button variant="ghost" color={color} iconOnly={true} onClick={onClick}>
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
      <Button variant="selected" color={color} onClick={onClick}>
        {text}
      </Button>

      <Button variant="selected" color={color} onClick={onClick}>
        <BoltIcon className="mr-2 h-5 w-5" />
        {text}
      </Button>

      <Button
        variant="selected"
        color={color}
        iconOnly={true}
        onClick={onClick}
      >
        <BoltIcon className="h-6 w-6" />
      </Button>
    </>
  ),
};

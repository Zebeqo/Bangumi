import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import {
  GhostButton,
  GhostButton_Icon,
  OutlineButton,
  OutlineButton_Icon,
  PrimaryButton,
  PrimaryButton_Icon,
  SecondaryButton,
  SecondaryButton_Icon,
  SelectedButton,
  SelectedButton_Icon,
} from "@/ui/primitive/Button";
import { colorArgTypes, rowDecorator } from "@/ui/storybook";
import { BoltIcon } from "@heroicons/react/20/solid";
import type { Color } from "@/ui/color";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta = {
  title: "Button",
  decorators: [rowDecorator],
  argTypes: colorArgTypes,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");
    for (const button of buttons) {
      await userEvent.click(button);
    }
    await expect(args.onClick).toHaveBeenCalledTimes(3);
  },
};

export default meta;

type ButtonStory = StoryObj<{
  colorType: Color;
  buttonText: string;
  onClick: () => void;
}>;

export const Primary: ButtonStory = {
  args: {
    colorType: "accent",
    buttonText: "Button",
    onClick: action("button clicked"),
  },
  render: ({ colorType, buttonText, onClick }) => (
    <>
      <PrimaryButton colorType={colorType} onClick={onClick}>
        {buttonText}
      </PrimaryButton>

      <PrimaryButton colorType={colorType} onClick={onClick}>
        <BoltIcon className="mr-2 h-5 w-5" />
        {buttonText}
      </PrimaryButton>

      <PrimaryButton_Icon colorType={colorType} onClick={onClick}>
        <BoltIcon className="h-6 w-6" />
      </PrimaryButton_Icon>
    </>
  ),
};

export const Secondary: ButtonStory = {
  args: {
    colorType: "accent",
    buttonText: "Button",
    onClick: action("button clicked"),
  },
  render: ({ colorType, buttonText, onClick }) => (
    <>
      <SecondaryButton colorType={colorType} onClick={onClick}>
        {buttonText}
      </SecondaryButton>

      <SecondaryButton colorType={colorType} onClick={onClick}>
        <BoltIcon className="mr-2 h-5 w-5" />
        {buttonText}
      </SecondaryButton>

      <SecondaryButton_Icon colorType={colorType} onClick={onClick}>
        <BoltIcon className="h-6 w-6" />
      </SecondaryButton_Icon>
    </>
  ),
};

export const Outline: ButtonStory = {
  args: {
    colorType: "accent",
    buttonText: "Button",
    onClick: action("button clicked"),
  },
  render: ({ colorType, buttonText, onClick }) => (
    <>
      <OutlineButton colorType={colorType} onClick={onClick}>
        {buttonText}
      </OutlineButton>

      <OutlineButton colorType={colorType} onClick={onClick}>
        <BoltIcon className="mr-2 h-5 w-5" />
        {buttonText}
      </OutlineButton>

      <OutlineButton_Icon colorType={colorType} onClick={onClick}>
        <BoltIcon className="h-6 w-6" />
      </OutlineButton_Icon>
    </>
  ),
};

export const Ghost: ButtonStory = {
  args: {
    colorType: "accent",
    buttonText: "Button",
    onClick: action("button clicked"),
  },
  render: ({ colorType, buttonText, onClick }) => (
    <>
      <GhostButton colorType={colorType} onClick={onClick}>
        {buttonText}
      </GhostButton>

      <GhostButton colorType={colorType} onClick={onClick}>
        <BoltIcon className="mr-2 h-5 w-5" />
        {buttonText}
      </GhostButton>

      <GhostButton_Icon colorType={colorType} onClick={onClick}>
        <BoltIcon className="h-6 w-6" />
      </GhostButton_Icon>
    </>
  ),
};

export const Selected: ButtonStory = {
  args: {
    colorType: "accent",
    buttonText: "Button",
    onClick: action("button clicked"),
  },
  render: ({ colorType, buttonText, onClick }) => (
    <>
      <SelectedButton colorType={colorType} onClick={onClick}>
        {buttonText}
      </SelectedButton>

      <SelectedButton colorType={colorType} onClick={onClick}>
        <BoltIcon className="mr-2 h-5 w-5" />
        {buttonText}
      </SelectedButton>

      <SelectedButton_Icon colorType={colorType} onClick={onClick}>
        <BoltIcon className="h-6 w-6" />
      </SelectedButton_Icon>
    </>
  ),
};

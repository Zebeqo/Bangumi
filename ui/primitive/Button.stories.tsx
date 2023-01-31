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
import { colorArgTypes, rowDecorator } from "@/lib/storybook";
import { BoltIcon } from "@heroicons/react/20/solid";
import type { Color } from "@/ui/color";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
  title: "Button",
  decorators: [rowDecorator],
  argTypes: colorArgTypes,
};

export default meta;

export const Primary: StoryObj<{ colorType: Color; buttonText: string }> = {
  args: {
    colorType: "accent",
    buttonText: "Button",
  },
  render: ({ colorType, buttonText }) => (
    <>
      <PrimaryButton colorType={colorType} onClick={action("onClick")}>
        {buttonText}
      </PrimaryButton>

      <PrimaryButton colorType={colorType} onClick={action("onClick")}>
        <BoltIcon className="mr-2 h-5 w-5" />
        {buttonText}
      </PrimaryButton>

      <PrimaryButton_Icon colorType={colorType} onClick={action("onClick")}>
        <BoltIcon className="h-6 w-6" />
      </PrimaryButton_Icon>
    </>
  ),
};

export const Secondary: StoryObj<{ colorType: Color; buttonText: string }> = {
  args: {
    colorType: "accent",
    buttonText: "Button",
  },
  render: ({ colorType, buttonText }) => (
    <>
      <SecondaryButton colorType={colorType} onClick={action("onClick")}>
        {buttonText}
      </SecondaryButton>

      <SecondaryButton colorType={colorType} onClick={action("onClick")}>
        <BoltIcon className="mr-2 h-5 w-5" />
        {buttonText}
      </SecondaryButton>

      <SecondaryButton_Icon colorType={colorType} onClick={action("onClick")}>
        <BoltIcon className="h-6 w-6" />
      </SecondaryButton_Icon>
    </>
  ),
};

export const Outline: StoryObj<{ colorType: Color; buttonText: string }> = {
  args: {
    colorType: "accent",
    buttonText: "Button",
  },
  render: ({ colorType, buttonText }) => (
    <>
      <OutlineButton colorType={colorType} onClick={action("onClick")}>
        {buttonText}
      </OutlineButton>

      <OutlineButton colorType={colorType} onClick={action("onClick")}>
        <BoltIcon className="mr-2 h-5 w-5" />
        {buttonText}
      </OutlineButton>

      <OutlineButton_Icon colorType={colorType} onClick={action("onClick")}>
        <BoltIcon className="h-6 w-6" />
      </OutlineButton_Icon>
    </>
  ),
};

export const Ghost: StoryObj<{ colorType: Color; buttonText: string }> = {
  args: {
    colorType: "accent",
    buttonText: "Button",
  },
  render: ({ colorType, buttonText }) => (
    <>
      <GhostButton colorType={colorType} onClick={action("onClick")}>
        {buttonText}
      </GhostButton>

      <GhostButton colorType={colorType} onClick={action("onClick")}>
        <BoltIcon className="mr-2 h-5 w-5" />
        {buttonText}
      </GhostButton>

      <GhostButton_Icon colorType={colorType} onClick={action("onClick")}>
        <BoltIcon className="h-6 w-6" />
      </GhostButton_Icon>
    </>
  ),
};

export const Selected: StoryObj<{ colorType: Color; buttonText: string }> = {
  args: {
    colorType: "accent",
    buttonText: "Button",
  },
  render: ({ colorType, buttonText }) => (
    <>
      <SelectedButton colorType={colorType} onClick={action("onClick")}>
        {buttonText}
      </SelectedButton>

      <SelectedButton colorType={colorType} onClick={action("onClick")}>
        <BoltIcon className="mr-2 h-5 w-5" />
        {buttonText}
      </SelectedButton>

      <SelectedButton_Icon colorType={colorType} onClick={action("onClick")}>
        <BoltIcon className="h-6 w-6" />
      </SelectedButton_Icon>
    </>
  ),
};

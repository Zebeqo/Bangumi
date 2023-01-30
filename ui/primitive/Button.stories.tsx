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
import { rowDecorator } from "@/lib/storybook";
import { BoltIcon } from "@heroicons/react/20/solid";

const meta: Meta = {
  title: "Button",
  decorators: [rowDecorator],
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () => (
    <>
      <PrimaryButton colorType={"primary"}>Button</PrimaryButton>
      <PrimaryButton colorType={"accent"}>Button</PrimaryButton>
      <PrimaryButton colorType={"neutral"}>Button</PrimaryButton>
      <PrimaryButton colorType={"success"}>Button</PrimaryButton>

      <PrimaryButton colorType={"primary"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </PrimaryButton>
      <PrimaryButton colorType={"accent"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </PrimaryButton>
      <PrimaryButton colorType={"neutral"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </PrimaryButton>
      <PrimaryButton colorType={"success"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </PrimaryButton>

      <PrimaryButton_Icon colorType={"primary"}>
        <BoltIcon className="h-6 w-6" />
      </PrimaryButton_Icon>
      <PrimaryButton_Icon colorType={"accent"}>
        <BoltIcon className="h-6 w-6" />
      </PrimaryButton_Icon>
      <PrimaryButton_Icon colorType={"neutral"}>
        <BoltIcon className="h-6 w-6" />
      </PrimaryButton_Icon>
      <PrimaryButton_Icon colorType={"success"}>
        <BoltIcon className="h-6 w-6" />
      </PrimaryButton_Icon>
    </>
  ),
};

export const Secondary: Story = {
  render: () => (
    <>
      <SecondaryButton colorType={"primary"}>Button</SecondaryButton>
      <SecondaryButton colorType={"accent"}>Button</SecondaryButton>
      <SecondaryButton colorType={"neutral"}>Button</SecondaryButton>
      <SecondaryButton colorType={"success"}>Button</SecondaryButton>

      <SecondaryButton colorType={"primary"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </SecondaryButton>
      <SecondaryButton colorType={"accent"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </SecondaryButton>
      <SecondaryButton colorType={"neutral"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </SecondaryButton>
      <SecondaryButton colorType={"success"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </SecondaryButton>

      <SecondaryButton_Icon colorType={"primary"}>
        <BoltIcon className="h-6 w-6" />
      </SecondaryButton_Icon>
      <SecondaryButton_Icon colorType={"accent"}>
        <BoltIcon className="h-6 w-6" />
      </SecondaryButton_Icon>
      <SecondaryButton_Icon colorType={"neutral"}>
        <BoltIcon className="h-6 w-6" />
      </SecondaryButton_Icon>
      <SecondaryButton_Icon colorType={"success"}>
        <BoltIcon className="h-6 w-6" />
      </SecondaryButton_Icon>
    </>
  ),
};

export const Outline: Story = {
  render: () => (
    <>
      <OutlineButton colorType={"primary"}>Button</OutlineButton>
      <OutlineButton colorType={"accent"}>Button</OutlineButton>
      <OutlineButton colorType={"neutral"}>Button</OutlineButton>
      <OutlineButton colorType={"success"}>Button</OutlineButton>

      <OutlineButton colorType={"primary"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </OutlineButton>
      <OutlineButton colorType={"accent"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </OutlineButton>
      <OutlineButton colorType={"neutral"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </OutlineButton>
      <OutlineButton colorType={"success"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </OutlineButton>

      <OutlineButton_Icon colorType={"primary"}>
        <BoltIcon className="h-6 w-6" />
      </OutlineButton_Icon>
      <OutlineButton_Icon colorType={"accent"}>
        <BoltIcon className="h-6 w-6" />
      </OutlineButton_Icon>
      <OutlineButton_Icon colorType={"neutral"}>
        <BoltIcon className="h-6 w-6" />
      </OutlineButton_Icon>
      <OutlineButton_Icon colorType={"success"}>
        <BoltIcon className="h-6 w-6" />
      </OutlineButton_Icon>
    </>
  ),
};

export const Ghost: Story = {
  render: () => (
    <>
      <GhostButton colorType={"primary"}>Button</GhostButton>
      <GhostButton colorType={"accent"}>Button</GhostButton>
      <GhostButton colorType={"neutral"}>Button</GhostButton>
      <GhostButton colorType={"success"}>Button</GhostButton>

      <GhostButton colorType={"primary"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </GhostButton>
      <GhostButton colorType={"accent"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </GhostButton>
      <GhostButton colorType={"neutral"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </GhostButton>
      <GhostButton colorType={"success"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </GhostButton>

      <GhostButton_Icon colorType={"primary"}>
        <BoltIcon className="h-6 w-6" />
      </GhostButton_Icon>
      <GhostButton_Icon colorType={"accent"}>
        <BoltIcon className="h-6 w-6" />
      </GhostButton_Icon>
      <GhostButton_Icon colorType={"neutral"}>
        <BoltIcon className="h-6 w-6" />
      </GhostButton_Icon>
      <GhostButton_Icon colorType={"success"}>
        <BoltIcon className="h-6 w-6" />
      </GhostButton_Icon>
    </>
  ),
};

export const Selected: Story = {
  render: () => (
    <>
      <SelectedButton colorType={"primary"}>Button</SelectedButton>
      <SelectedButton colorType={"accent"}>Button</SelectedButton>
      <SelectedButton colorType={"neutral"}>Button</SelectedButton>
      <SelectedButton colorType={"success"}>Button</SelectedButton>

      <SelectedButton colorType={"primary"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </SelectedButton>
      <SelectedButton colorType={"accent"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </SelectedButton>
      <SelectedButton colorType={"neutral"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </SelectedButton>
      <SelectedButton colorType={"success"}>
        <BoltIcon className="mr-2 h-5 w-5" />
        Button
      </SelectedButton>

      <SelectedButton_Icon colorType={"primary"}>
        <BoltIcon className="h-6 w-6" />
      </SelectedButton_Icon>
      <SelectedButton_Icon colorType={"accent"}>
        <BoltIcon className="h-6 w-6" />
      </SelectedButton_Icon>
      <SelectedButton_Icon colorType={"neutral"}>
        <BoltIcon className="h-6 w-6" />
      </SelectedButton_Icon>
      <SelectedButton_Icon colorType={"success"}>
        <BoltIcon className="h-6 w-6" />
      </SelectedButton_Icon>
    </>
  ),
};

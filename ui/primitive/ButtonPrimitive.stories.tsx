import type { Meta, StoryObj } from "@storybook/react";
import { ButtonPrimitive } from "./ButtonPrimitive";
import { BangumiRawIcon } from "@/ui/icon/BangumiRawIcon";
import { BoltIcon } from "@heroicons/react/20/solid";
const meta: Meta<typeof ButtonPrimitive> = {
  title: "_ButtonPrimitive",
  component: ButtonPrimitive,
};

export default meta;
type Story = StoryObj<typeof ButtonPrimitive>;

export const Primary: Story = {
  render: () => (
    <ButtonPrimitive className="inline-flex items-center justify-center rounded-md bg-primary-9 px-4 py-2 font-medium text-white hover:bg-primary-10">
      <ButtonPrimitive.Label>Button</ButtonPrimitive.Label>
    </ButtonPrimitive>
  ),
};

export const Secondary: Story = {
  render: () => (
    <ButtonPrimitive className="inline-flex items-center justify-center rounded-md bg-primary-4 px-4 py-2 font-medium text-primary-11 hover:bg-primary-5 active:bg-primary-6">
      <ButtonPrimitive.Label>Button</ButtonPrimitive.Label>
    </ButtonPrimitive>
  ),
};

export const Outline: Story = {
  render: () => (
    <ButtonPrimitive className="inline-flex items-center justify-center rounded-md border border-primary-7 bg-primary-1 px-4 py-2 font-medium text-primary-11 hover:bg-primary-4 active:bg-primary-5">
      <ButtonPrimitive.Label>Button</ButtonPrimitive.Label>
    </ButtonPrimitive>
  ),
};

export const Ghost: Story = {
  render: () => (
    <ButtonPrimitive className="inline-flex items-center justify-center rounded-md px-4 py-2 font-medium text-primary-11 hover:bg-primary-4 active:bg-primary-5">
      <ButtonPrimitive.Label>Button</ButtonPrimitive.Label>
    </ButtonPrimitive>
  ),
};

export const PrimaryWithHeroIcon: Story = {
  render: () => (
    <ButtonPrimitive className="inline-flex items-center justify-center rounded-md bg-primary-9 px-4 py-2 font-medium text-white hover:bg-primary-10">
      <ButtonPrimitive.Label>Button</ButtonPrimitive.Label>
      <ButtonPrimitive.Icon className="mr-2 h-5 w-5">
        <BoltIcon />
      </ButtonPrimitive.Icon>
    </ButtonPrimitive>
  ),
};

export const PrimaryWithCustomIcon: Story = {
  render: () => (
    <ButtonPrimitive className="inline-flex items-center justify-center rounded-md bg-primary-9 px-4 py-2 font-medium text-white hover:bg-primary-10">
      <ButtonPrimitive.Label>Button</ButtonPrimitive.Label>
      <ButtonPrimitive.Icon className="mr-2 h-5 w-5">
        <BangumiRawIcon />
      </ButtonPrimitive.Icon>
    </ButtonPrimitive>
  ),
};

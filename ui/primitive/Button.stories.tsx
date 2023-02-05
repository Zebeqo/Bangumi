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
import { BoltIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import type { Color } from "@/ui/color";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";

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

export const EpisodeButton: StoryObj<{
  defaultValue: number;
  eps: number;
  onClick: () => void;
}> = {
  args: {
    defaultValue: 6,
    eps: 13,
  },
  render: ({ defaultValue, eps }) => {
    const [value, setValue] = useState<number>(defaultValue);
    const [prevValue, setPrevValue] = useState<number>(defaultValue);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      setValue(defaultValue);
      setPrevValue(defaultValue);
    }, [defaultValue]);

    const episodeScheme = z.number().min(0).max(eps).int();

    return (
      <OutlineButton
        colorType="neutral"
        className="bg-neutral-1 hover:bg-neutral-1 active:bg-neutral-1"
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
          }
        }}
      >
        <span>
          进度:{" "}
          <input
            type={"number"}
            min={0}
            max={eps}
            onChange={(e) => {
              setValue(Number(e.target.value));
            }}
            value={value}
            ref={inputRef}
            onKeyDown={(e) => {
              e.stopPropagation();
              if (e.key === "Enter") {
                inputRef.current?.blur();
              } else if (e.key === "Escape") {
                inputRef.current?.blur();
              }
            }}
            onBlur={() => {
              if (value === prevValue) {
                return;
              }
              const epResult = episodeScheme.safeParse(value);

              if (epResult.success) {
                setPrevValue(value);
              } else {
                setValue(prevValue);
              }
            }}
            className="w-8 appearance-none bg-neutral-1 text-center outline-none selection:bg-neutral-9 selection:text-neutral-1 hover:pointer-events-auto"
          />
          / {eps}
        </span>
        <PlusCircleIcon
          className="ml-2 h-5 w-5"
          aria-label="increase episode"
          onClick={(e) => {
            e.stopPropagation();
            setValue((value) => (value < 13 ? value + 1 : value));
            setPrevValue((value) => (value < 13 ? value + 1 : value));
          }}
        />
      </OutlineButton>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getByRole<HTMLInputElement>("spinbutton");
    await expect(buttons.value).toBe(args.defaultValue.toString());
    await userEvent.click(canvas.getByLabelText("increase episode"));
    await expect(buttons.value).toBe((args.defaultValue + 1).toString());
  },
  parameters: {
    controls: { exclude: ["colorType"] },
  },
};

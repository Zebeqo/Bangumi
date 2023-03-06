import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "@/ui/primitive/Tooltip";
import { Button } from "@/ui/primitive/Button";
import { BoltIcon } from "@heroicons/react/20/solid";
import { userEvent, within, screen } from "@storybook/testing-library";

const meta = {
  title: "Tooltip",
} satisfies Meta;

export default meta;

export const Tooltip_: StoryObj<{
  content: string;
  side: "top" | "right" | "bottom" | "left";
  align: "start" | "center" | "end";
  sideOffset: number;
}> = {
  args: {
    content: "This is a tooltip.",
    side: "top",
    align: "center",
    sideOffset: 4,
  },
  render: ({ content, side, align, sideOffset }) => {
    return (
      <Tooltip
        content={content}
        side={side}
        align={align}
        sideOffset={sideOffset}
      >
        <Button variant={{ type: "ghost", iconOnly: true }}>
          <BoltIcon className="h-6 w-6" />
        </Button>
      </Tooltip>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.hover(button);

    const tooltip = await screen.findByRole("tooltip");
    await expect(tooltip).toHaveTextContent(args.content);
  },
  argTypes: {
    side: {
      control: {
        type: "radio",
      },
      options: ["top", "right", "bottom", "left"],
    },
    align: {
      control: {
        type: "radio",
      },
      options: ["start", "center", "end"],
    },
    sideOffset: {
      control: {
        type: "range",
        min: 0,
        max: 20,
        step: 1,
      },
    },
  },
};

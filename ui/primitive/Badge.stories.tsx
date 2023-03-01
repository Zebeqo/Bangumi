import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/ui/primitive/Badge";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";
import type { Color } from "@/lib/color";
import { colorArray } from "@/lib/color";

const meta: Meta = {
  title: "Badge",
  argTypes: {
    colorVariant: {
      control: {
        type: "radio",
      },
      options: colorArray,
    },
  },
};

export default meta;

export const CommentBadge: StoryObj<{ colorVariant: Color; count: number }> = {
  args: {
    colorVariant: "success",
    count: 123,
  },
  render: ({ colorVariant, count }) => (
    <Badge colorVariant={colorVariant} className="rounded-full py-2">
      <ChatBubbleLeftRightIcon className="mr-1 h-4 w-4" />
      {count}
    </Badge>
  ),
};

export const TagBadge: StoryObj<{
  colorVariant: Color;
  count: number;
  label: string;
}> = {
  args: {
    colorVariant: "primary",
    count: 123,
    label: "神作",
  },
  render: ({ label, colorVariant, count }) => (
    <Badge colorVariant={colorVariant}>
      {label}
      <span className="ml-1 text-neutral-11">{count}</span>
    </Badge>
  ),
};

export const DefaultBadge: StoryObj<{ colorVariant: Color; label: string }> = {
  args: {
    colorVariant: "primary",
    label: "神作",
  },
  render: ({ label, colorVariant }) => (
    <Badge colorVariant={colorVariant}>{label}</Badge>
  ),
};

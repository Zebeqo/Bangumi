import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/ui/primitive/Badge";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";
import type { Color } from "@/ui/color";
import { colorArgTypes } from "@/ui/storybook";

const meta: Meta = {
  title: "Badge",
  argTypes: colorArgTypes,
};

export default meta;

export const CommentBadge: StoryObj<{ colorType: Color; count: number }> = {
  args: {
    colorType: "success",
    count: 123,
  },
  render: ({ colorType, count }) => (
    <Badge colorType={colorType} className="rounded-full py-2">
      <ChatBubbleLeftRightIcon className="mr-1 h-4 w-4" />
      {count}
    </Badge>
  ),
};

export const TagBadge: StoryObj<{
  colorType: Color;
  count: number;
  label: string;
}> = {
  args: {
    colorType: "primary",
    count: 123,
    label: "神作",
  },
  render: ({ label, colorType, count }) => (
    <Badge colorType={colorType}>
      {label}
      <span className="ml-1 text-neutral-11">{count}</span>
    </Badge>
  ),
};

export const DefaultBadge: StoryObj<{ colorType: Color; label: string }> = {
  args: {
    colorType: "primary",
    label: "神作",
  },
  render: ({ label, colorType }) => (
    <Badge colorType={colorType}>{label}</Badge>
  ),
};

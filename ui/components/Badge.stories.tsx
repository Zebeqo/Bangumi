import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/ui/components/Badge";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";
import type { Color } from "@/lib/color";
import { colorArray } from "@/lib/color";

const meta = {
  title: "Badge",
  argTypes: {
    color: {
      control: {
        type: "radio",
      },
      options: colorArray,
    },
  },
} satisfies Meta;

export default meta;

export const CommentBadge: StoryObj<{ color: Color; count: number }> = {
  args: {
    color: "success",
    count: 123,
  },
  render: ({ color, count }) => (
    <Badge color={color} className="rounded-full py-2">
      <ChatBubbleLeftRightIcon className="mr-1 h-4 w-4" />
      {count}
    </Badge>
  ),
};

export const TagBadge: StoryObj<{
  color: Color;
  count: number;
  label: string;
}> = {
  args: {
    color: "primary",
    count: 123,
    label: "神作",
  },
  render: ({ label, color, count }) => (
    <Badge color={color}>
      {label}
      <span className="ml-1 text-neutral-11">{count}</span>
    </Badge>
  ),
};

export const DefaultBadge: StoryObj<{ color: Color; label: string }> = {
  args: {
    color: "primary",
    label: "神作",
  },
  render: ({ label, color }) => <Badge color={color}>{label}</Badge>,
};

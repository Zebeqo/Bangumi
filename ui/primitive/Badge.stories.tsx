import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/ui/primitive/Badge";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";

const meta: Meta = {
  title: "Badge",
};

export default meta;

type Story = StoryObj;

export const CommentBadge: Story = {
  render: () => (
    <Badge colorType={"success"} className="rounded-full py-2">
      <ChatBubbleLeftRightIcon className="mr-1 h-4 w-4" />
      123
    </Badge>
  ),
};

export const TagBadge: Story = {
  render: () => (
    <Badge colorType={"primary"}>
      神作<span className="ml-1 text-neutral-11">123</span>
    </Badge>
  ),
};

export const DefaultBadge: Story = {
  render: () => <Badge colorType={"primary"}>神作</Badge>,
};

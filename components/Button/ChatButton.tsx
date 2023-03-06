"use client";

import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { forwardRef } from "react";
import { Button } from "@/ui/primitive/Button";
import { useToast } from "@/hooks/use-toast";
import { Tooltip } from "@/ui/primitive/Tooltip";

interface ChatButtonProps {
  subject_id: number;
}
export const ChatButton = forwardRef<HTMLButtonElement, ChatButtonProps>(
  ({ subject_id, ...props }, ref) => {
    const toast = useToast();

    return (
      <Tooltip content="显示讨论">
        <Button
          variant={{ type: "primary", color: "accent", iconOnly: true }}
          ref={ref}
          onClick={() => {
            toast({
              type: "info",
              title: "功能尚未实现！",
            });
          }}
          aria-label="open-chat-panel"
          {...props}
        >
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
        </Button>
      </Tooltip>
    );
  }
);

ChatButton.displayName = "ChatButton";

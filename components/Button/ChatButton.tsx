"use client";

import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { forwardRef } from "react";
import { PrimaryButton_Icon } from "@/ui/primitive/Button";
import { useToast } from "@/hooks/use-toast";

interface ChatButtonProps {
  subject_id: number;
}
export const ChatButton = forwardRef<HTMLButtonElement, ChatButtonProps>(
  ({ subject_id, ...props }, ref) => {
    const toast = useToast();

    return (
      <PrimaryButton_Icon
        colorVariant={"accent"}
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
      </PrimaryButton_Icon>
    );
  }
);

ChatButton.displayName = "InfoButton";

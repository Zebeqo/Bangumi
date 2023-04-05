"use client";

import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { forwardRef } from "react";
import { Button } from "@/ui/components/Button";
import { useToast } from "@/hooks/use-toast";
import { Tooltip } from "@/ui/components/Tooltip";
import { rootStore } from "@/components/Provider/JotaiProvider";
import { Provider } from "jotai";

interface ChatButtonProps {
  subject_id: number;
}
export const ChatButton_ = forwardRef<HTMLButtonElement, ChatButtonProps>(
  ({ subject_id, ...props }, ref) => {
    const toast = useToast();

    return (
      <Tooltip content="显示讨论">
        <Button
          variant="primary"
          color="accent"
          iconOnly
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

ChatButton_.displayName = "ChatButton";

export const ChatButton = forwardRef<HTMLButtonElement, ChatButtonProps>(
  (props, ref) => (
    <Provider store={rootStore}>
      <ChatButton_ {...props} ref={ref} />
    </Provider>
  )
);
ChatButton.displayName = "ChatButton";

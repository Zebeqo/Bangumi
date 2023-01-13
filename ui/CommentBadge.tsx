import { ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";

export interface BadgesProps {
  count: number;
  className?: string;
}
export const CommentBadge: React.FC<BadgesProps> = ({ count, className }) => (
  <span
    className={cn(
      "inline-flex select-none items-center rounded-full bg-success-4 py-2 px-3 text-xs font-medium text-success-11 outline-none",
      className
    )}
  >
    <span className="mr-1 h-4 w-4">
      <ChatBubbleLeftRightIcon />
    </span>
    <span className="whitespace-nowrap">{count}</span>
  </span>
);

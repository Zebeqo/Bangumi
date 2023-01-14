import type { Color } from "@/lib/colorWrapper";
import { colorWrapper } from "@/lib/colorWrapper";
import { cn } from "@/lib/utils";

export interface BadgesProps {
  color?: Color;
  label: string;
  count?: number;
  className?: string;
}
export const TagBadge: React.FC<BadgesProps> = ({
  color = "primary",
  label,
  count,
  className,
}) => (
  <span
    className={cn(
      colorWrapper(
        "mr-2 inline-flex select-none items-center justify-center space-x-1 rounded-md bg-primary-4 px-3 py-1 text-xs font-medium text-primary-11",
        color
      ),
      className
    )}
  >
    <span>{label}</span>
    {count && <span className="text-neutral-11">{count}</span>}
  </span>
);

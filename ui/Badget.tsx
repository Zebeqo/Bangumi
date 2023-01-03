import type { Color } from "@/lib/colorWrapper";
import { colorWrapper } from "@/lib/colorWrapper";

export interface BadgesProps {
  color?: Color;
  label: string;
  count?: number;
}
export const Badges: React.FC<BadgesProps> = ({
  color = "primary",
  label,
  count,
}) => (
  <div
    className={colorWrapper(
      "mr-2 inline-flex items-center justify-center space-x-1 rounded-md bg-primary-4 px-3 py-1 text-xs font-medium text-primary-11",
      color
    )}
  >
    <span>{label}</span>
    {count && <span className="text-neutral-11">{count}</span>}
  </div>
);

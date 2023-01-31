import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const badge = cva(
  "inline-flex select-none items-center justify-center font-medium whitespace-nowrap text-xs px-3 rounded-md py-1",
  {
    variants: {
      colorType: {
        primary: "bg-primary-4 text-primary-11",
        accent: "bg-accent-4 text-accent-11",
        neutral: "bg-neutral-4 text-neutral-11",
        success: "bg-success-4 text-success-11",
        error: "bg-error-4 text-error-11",
        info: "bg-info-4 text-info-11",
      },
    },
  }
);
type BadgeVariantsProps = VariantProps<typeof badge>;

interface BadgeProps
  extends React.ComponentPropsWithoutRef<"span">,
    Required<BadgeVariantsProps> {}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, colorType, ...props }, ref) => (
    <span
      className={cn(badge({ colorType }), className)}
      ref={ref}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

export { Badge };

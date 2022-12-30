import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { Color } from "@/lib/colorWrapper";
import { colorWrapper } from "@/lib/colorWrapper";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const button = cva(
  "inline-flex items-center rounded-md px-4 py-2 font-medium",
  {
    variants: {
      type: {
        primary: "bg-primary-9 text-white hover:bg-primary-10",
        secondary:
          "bg-primary-4 text-primary-11 hover:bg-primary-5 active:bg-primary-6",
        outline:
          "border border-primary-7 bg-primary-1 text-primary-11 hover:bg-primary-4 active:bg-primary-5",
        ghost: "text-primary-11 hover:bg-primary-4 active:bg-primary-5",
        selected: "bg-primary-5 text-primary-11",
      },
    },
  }
);

type ButtonVariantProps = VariantProps<typeof button>;

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    Required<ButtonVariantProps> {
  color: Color;
  label?: string;
  icon?: React.ReactNode;
  revert?: boolean;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, color, label, icon, onClick, revert = false, className }, ref) => (
    <button
      ref={ref}
      className={cn(
        colorWrapper(button({ type }), color),
        !label && "px-2",
        revert && "flex-row-reverse",
        className
      )}
      onClick={onClick}
    >
      {icon && (
        <span
          className={cn(
            "h-5 w-5",
            label ? (revert ? "ml-2" : "mr-2") : "h-6 w-6"
          )}
        >
          {icon}
        </span>
      )}
      {label && <span>{label}</span>}
    </button>
  )
);

Button.displayName = "Button";

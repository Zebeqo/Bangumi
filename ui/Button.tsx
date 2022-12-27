import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { Color } from "@/lib/colorWrapper";
import { colorWrapper } from "@/lib/colorWrapper";
import { cn } from "@/lib/utils";

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
      width: {
        full: "w-full",
        auto: "w-auto justify-center",
      },
    },
    defaultVariants: {
      width: "auto",
    },
  }
);

type ButtonVariantProps = VariantProps<typeof button>;

export interface ButtonProps
  extends Pick<ButtonVariantProps, "width">,
    Required<Omit<ButtonVariantProps, "width">> {
  color: Color;
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  revert?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  type,
  color,
  label,
  icon,
  onClick,
  width = "auto",
  revert = false,
}) => (
  <button
    className={cn(
      colorWrapper(button({ type, width }), color),
      !label && "px-2"
    )}
    onClick={onClick}
  >
    {revert && label && <span>{label}</span>}
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
    {!revert && label && <span>{label}</span>}
  </button>
);

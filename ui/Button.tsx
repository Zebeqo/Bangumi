import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { ButtonPrimitive } from "@/ui/primitive/ButtonPrimitive";
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

export interface ButtonProps extends VariantProps<typeof button> {
  color: Color;
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}
export const Button: React.FC<ButtonProps> = ({
  type,
  color,
  label,
  icon,
  onClick,
  width = "auto",
}) => (
  <ButtonPrimitive
    className={cn(
      colorWrapper(button({ type, width }), color),
      !label && "px-2"
    )}
    onClick={onClick}
  >
    {label && <ButtonPrimitive.Label>{label}</ButtonPrimitive.Label>}
    {icon && (
      <ButtonPrimitive.Icon
        className={cn("h-5 w-5", label ? "mr-2" : "h-6 w-6")}
      >
        {icon}
      </ButtonPrimitive.Icon>
    )}
  </ButtonPrimitive>
);

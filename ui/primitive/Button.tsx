import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { Color } from "@/ui/color";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const baseButtonClass =
  "inline-flex items-center whitespace-nowrap rounded-md px-4 py-2 font-medium outline-none w-fit";

const primaryButton = cva(baseButtonClass, {
  variants: {
    colorType: {
      primary: "bg-primary-9 text-white hover:bg-primary-10",
      accent: "bg-accent-9 text-white hover:bg-accent-10",
      neutral: "bg-neutral-9 text-white hover:bg-neutral-10",
      success: "bg-success-9 text-white hover:bg-success-10",
      error: "bg-error-9 text-white hover:bg-error-10",
      info: "bg-info-9 text-white hover:bg-info-10",
    },
  },
});

const secondaryButton = cva(baseButtonClass, {
  variants: {
    colorType: {
      primary:
        "bg-primary-4 text-primary-11 hover:bg-primary-5 active:bg-primary-6",
      accent: "bg-accent-4 text-accent-11 hover:bg-accent-5 active:bg-accent-6",
      neutral:
        "bg-neutral-4 text-neutral-11 hover:bg-neutral-5 active:bg-neutral-6",
      success:
        "bg-success-4 text-success-11 hover:bg-success-5 active:bg-success-6",
      error: "bg-error-4 text-error-11 hover:bg-error-5 active:bg-error-6",
      info: "bg-info-4 text-info-11 hover:bg-info-5 active:bg-info-6",
    },
  },
});

const outlineButton = cva(baseButtonClass, {
  variants: {
    colorType: {
      primary:
        "border border-primary-7 bg-primary-1 text-primary-11 hover:bg-primary-4 active:bg-primary-5",
      accent:
        "border border-accent-7 bg-accent-1 text-accent-11 hover:bg-accent-4 active:bg-accent-5",
      neutral:
        "border border-neutral-7 bg-neutral-1 text-neutral-11 hover:bg-neutral-4 active:bg-neutral-5",
      success:
        "border border-success-7 bg-success-1 text-success-11 hover:bg-success-4 active:bg-success-5",
      error:
        "border border-error-7 bg-error-1 text-error-11 hover:bg-error-4 active:bg-error-5",
      info: "border border-info-7 bg-info-1 text-info-11 hover:bg-info-4 active:bg-info-5",
    },
  },
});

const ghostButton = cva(baseButtonClass, {
  variants: {
    colorType: {
      primary:
        "bg-transparent text-primary-11 hover:bg-primary-4 active:bg-primary-5",
      accent:
        "bg-transparent text-accent-11 hover:bg-accent-4 active:bg-accent-5",
      neutral:
        "bg-transparent text-neutral-11 hover:bg-neutral-4 active:bg-neutral-5",
      success:
        "bg-transparent text-success-11 hover:bg-success-4 active:bg-success-5",
      error: "bg-transparent text-error-11 hover:bg-error-4 active:bg-error-5",
      info: "bg-transparent text-info-11 hover:bg-info-4 active:bg-info-5",
    },
  },
});

const selectedButton = cva(baseButtonClass, {
  variants: {
    colorType: {
      primary: "bg-primary-5 text-primary-11",
      accent: "bg-accent-5 text-accent-11",
      neutral: "bg-neutral-5 text-neutral-11",
      success: "bg-success-5 text-success-11",
      error: "bg-error-5 text-error-11",
      info: "bg-info-5 text-info-11",
    },
  },
});

export type ButtonVariantProps = VariantProps<typeof primaryButton>;
export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    Required<ButtonVariantProps> {}

const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ colorType, className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(primaryButton({ colorType }), className)}
      {...props}
    />
  )
);
PrimaryButton.displayName = "PrimaryButton";

const PrimaryButton_Icon = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <PrimaryButton ref={ref} className={cn("px-2", className)} {...props} />
  )
);
PrimaryButton_Icon.displayName = PrimaryButton.displayName;

const SecondaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ colorType, className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(secondaryButton({ colorType }), className)}
      {...props}
    />
  )
);
SecondaryButton.displayName = "SecondaryButton";

const SecondaryButton_Icon = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <SecondaryButton ref={ref} className={cn("px-2", className)} {...props} />
  )
);
SecondaryButton_Icon.displayName = SecondaryButton.displayName;

const OutlineButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ colorType, className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(outlineButton({ colorType }), className)}
      {...props}
    />
  )
);
OutlineButton.displayName = "OutlineButton";

const OutlineButton_Icon = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <OutlineButton ref={ref} className={cn("px-2", className)} {...props} />
  )
);
OutlineButton_Icon.displayName = OutlineButton.displayName;

const GhostButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ colorType, className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(ghostButton({ colorType }), className)}
      {...props}
    />
  )
);
GhostButton.displayName = "GhostButton";

const GhostButton_Icon = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <GhostButton ref={ref} className={cn("px-2", className)} {...props} />
  )
);
GhostButton_Icon.displayName = GhostButton.displayName;

const SelectedButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ colorType, className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(selectedButton({ colorType }), className)}
      {...props}
    />
  )
);
SelectedButton.displayName = "SelectedButton";

const SelectedButton_Icon = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <SelectedButton ref={ref} className={cn("px-2", className)} {...props} />
  )
);
SelectedButton_Icon.displayName = SelectedButton.displayName;

export {
  PrimaryButton,
  PrimaryButton_Icon,
  SecondaryButton,
  SecondaryButton_Icon,
  OutlineButton,
  OutlineButton_Icon,
  GhostButton,
  GhostButton_Icon,
  SelectedButton,
  SelectedButton_Icon,
};

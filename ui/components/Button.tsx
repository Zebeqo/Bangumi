import { classed } from "classed.config";
import type { ComponentProps } from "@tw-classed/react";
import { makeStrict } from "@tw-classed/react";
import { objectKeys } from "@/lib/utils";

const base =
  "inline-flex items-center whitespace-nowrap rounded-md px-4 py-2 font-medium outline-none w-fit focus:outline-none focus:ring-2 select-none cursor-pointer";

interface ColorVariant {
  primary: string;
  accent: string;
  neutral: string;
  success: string;
  error: string;
  info: string;
}

const primaryColorVariant = {
  primary: "bg-primary-9 text-white hover:bg-primary-10 ring-primary-7",
  accent: "bg-accent-9 text-white hover:bg-accent-10 ring-accent-7",
  neutral: "bg-neutral-9 text-white hover:bg-neutral-10 ring-neutral-7",
  success: "bg-success-9 text-white hover:bg-success-10 ring-success-7",
  error: "bg-error-9 text-white hover:bg-error-10 ring-error-7",
  info: "bg-info-9 text-white hover:bg-info-10 ring-info-7",
};

const secondaryColorVariant = {
  primary:
    "bg-primary-4 text-primary-11 hover:bg-primary-5 active:bg-primary-6 ring-primary-7",
  accent:
    "bg-accent-4 text-accent-11 hover:bg-accent-5 active:bg-accent-6 ring-accent-7",
  neutral:
    "bg-neutral-4 text-neutral-11 hover:bg-neutral-5 active:bg-neutral-6 ring-neutral-7",
  success:
    "bg-success-4 text-success-11 hover:bg-success-5 active:bg-success-6 ring-success-7",
  error:
    "bg-error-4 text-error-11 hover:bg-error-5 active:bg-error-6 ring-error-7",
  info: "bg-info-4 text-info-11 hover:bg-info-5 active:bg-info-6 ring-info-7",
};

const outlineColorVariant = {
  primary:
    "border border-primary-7 bg-primary-1 text-primary-11 hover:bg-primary-3 ring-primary-7 focus:ring-1",
  accent:
    "border border-accent-7 bg-accent-1 text-accent-11 hover:bg-accent-3 ring-accent-7 focus:ring-1",
  neutral:
    "border border-neutral-7 bg-neutral-1 text-neutral-11 hover:bg-neutral-3 ring-neutral-7 focus:ring-1",
  success:
    "border border-success-7 bg-success-1 text-success-11 hover:bg-success-3 ring-success-7 focus:ring-1",
  error:
    "border border-error-7 bg-error-1 text-error-11 hover:bg-error-3 ring-error-7",
  info: "border border-info-7 bg-info-1 text-info-11 hover:bg-info-3 ring-info-7",
};

const ghostColorVariant = {
  primary:
    "bg-transparent text-primary-11 hover:bg-primary-4 active:bg-primary-5 ring-primary-7",
  accent:
    "bg-transparent text-accent-11 hover:bg-accent-4 active:bg-accent-5 ring-accent-7",
  neutral:
    "bg-transparent text-neutral-11 hover:bg-neutral-4 active:bg-neutral-5 ring-neutral-7",
  success:
    "bg-transparent text-success-11 hover:bg-success-4 active:bg-success-5 ring-success-7",
  error:
    "bg-transparent text-error-11 hover:bg-error-4 active:bg-error-5 ring-error-7",
  info: "bg-transparent text-info-11 hover:bg-info-4 active:bg-info-5 ring-info-7",
};

const selectedColorVariant = {
  primary: "bg-primary-5 text-primary-11 ring-primary-7",
  accent: "bg-accent-5 text-accent-11 ring-accent-7",
  neutral: "bg-neutral-5 text-neutral-11 ring-neutral-7",
  success: "bg-success-5 text-success-11 ring-success-7",
  error: "bg-error-5 text-error-11 ring-error-7",
  info: "bg-info-5 text-info-11 ring-info-7",
};

const toCompound = (colorVariant: ColorVariant, variant: string) => {
  const colors = objectKeys(colorVariant);
  const result: { color: string; variant: string; className: string }[] = [];

  colors.forEach((color) => {
    const className = colorVariant[color];
    result.push({ color, variant, className });
  });

  return result;
};

export const ClassedButton = classed("button", {
  base,
  variants: {
    color: {
      primary: "",
      accent: "",
      neutral: "",
      success: "",
      error: "",
      info: "",
    },
    variant: {
      primary: "",
      secondary: "",
      outline: "",
      ghost: "",
      selected: "",
    },
    iconOnly: {
      true: "px-2",
    },
  },
  compoundVariants: [
    ...toCompound(primaryColorVariant, "primary"),
    ...toCompound(secondaryColorVariant, "secondary"),
    ...toCompound(outlineColorVariant, "outline"),
    ...toCompound(ghostColorVariant, "ghost"),
    ...toCompound(selectedColorVariant, "selected"),
  ],
  defaultVariants: {
    color: "neutral",
    iconOnly: false,
  },
});

const StrictButton = makeStrict(ClassedButton);

export type ButtonType = typeof ClassedButton;
export type ButtonProps = ComponentProps<typeof StrictButton>;

export { StrictButton as Button };

// ------------------------------ Individual Button ------------------------------

export const PrimaryButton = classed("button", {
  base,
  variants: {
    color: primaryColorVariant,
    iconOnly: {
      true: "px-2",
    },
  },
  defaultVariants: {
    color: "neutral",
    iconOnly: false,
  },
});

export const SecondaryButton = classed("button", {
  base,
  variants: {
    color: secondaryColorVariant,
    iconOnly: {
      true: "px-2",
    },
  },
  defaultVariants: {
    color: "neutral",
    iconOnly: false,
  },
});

export const OutlineButton = classed("button", {
  base,
  variants: {
    color: outlineColorVariant,
    iconOnly: {
      true: "px-2",
    },
  },
  defaultVariants: {
    color: "neutral",
    iconOnly: false,
  },
});

export const GhostButton = classed("button", {
  base,
  variants: {
    color: ghostColorVariant,
    iconOnly: {
      true: "px-2",
    },
  },
  defaultVariants: {
    color: "neutral",
    iconOnly: false,
  },
});

export const SelectedButton = classed("button", {
  base,
  variants: {
    color: selectedColorVariant,
    iconOnly: {
      true: "px-2",
    },
  },
  defaultVariants: {
    color: "neutral",
    iconOnly: false,
  },
});

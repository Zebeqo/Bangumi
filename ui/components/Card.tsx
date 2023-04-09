import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { classed } from "@/classed.config";
import { TooltipProvider } from "@/ui/components/Tooltip";
import type { ComponentProps } from "@tw-classed/react";
import { deriveClassed } from "@tw-classed/react";

const CardContent = classed(
  "div",
  "group flex w-[30rem] select-none overflow-hidden rounded-2xl bg-neutral-2 ring-1 ring-neutral-6 h-[200px]"
);

const Card = deriveClassed<
  typeof CardContent,
  ComponentProps<typeof CardContent>
>((props, ref) => (
  <TooltipProvider>
    <CardContent ref={ref} {...props} />
  </TooltipProvider>
));

const CardImageContainer = classed("div", "relative aspect-[75/106] h-full");

const CardBody = classed("div", "w-full px-4 py-2");

const CardHeader = classed("div", "flex items-center justify-between");

interface CardTitleProps extends React.ComponentPropsWithoutRef<"div"> {
  mainTitle: string;
  subTitle: string;
}
const CardTitle = forwardRef<HTMLDivElement, Omit<CardTitleProps, "children">>(
  ({ className, mainTitle, subTitle, ...props }, ref) => (
    <div ref={ref} className={cn("w-52", className)} {...props}>
      <CardTitleMain>{mainTitle}</CardTitleMain>
      <CardTitleSub>{subTitle}</CardTitleSub>
    </div>
  )
);
CardTitle.displayName = "CardTitle";

const CardTitleMain = classed(
  "div",
  "truncate text-xl font-bold text-neutral-12"
);

const CardTitleSub = classed(
  "div",
  "truncate text-xs font-medium text-neutral-11"
);

const CardButtonGroup = classed("div", "hidden space-x-1 group-hover:flex");

const CardInfo = classed("div", "mt-1 flex justify-between py-1");

const CardInfoItem = classed(
  "div",
  "flex items-center space-x-2 text-xs font-medium text-neutral-11"
);

const CardTagGroup = classed(
  "div",
  "inline-flex h-fit flex-wrap items-start gap-2 mt-2 h-[4rem] overflow-hidden w-full"
);

const CardFooter = classed("div", "flex space-x-3");

export {
  Card,
  CardImageContainer,
  CardBody,
  CardHeader,
  CardTitle,
  CardButtonGroup,
  CardInfo,
  CardInfoItem,
  CardTagGroup,
  CardFooter,
};

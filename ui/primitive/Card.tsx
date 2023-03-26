"use client";

import { forwardRef, useRef } from "react";
import type { WithRequired } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { useHover } from "ahooks";
import { atom, Provider, useAtomValue, useSetAtom } from "jotai";

const isHoveredAtom = atom(false);

const CardProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>;
};

const CardContent = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  const ref = useRef(null);
  const isHovering = useHover(ref);
  const setHovered = useSetAtom(isHoveredAtom);

  setHovered(isHovering);

  return (
    <div
      ref={ref}
      className={cn(
        "group flex w-[30rem] select-none overflow-hidden rounded-2xl bg-neutral-2 ring-1 ring-neutral-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const Card = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <CardProvider>
    <CardContent {...props}>{children}</CardContent>
  </CardProvider>
);

const CardImage = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // h-full not working when using next/image in an environment other than next.js
    className={cn("relative aspect-[75/106] h-[201.59px]", className)}
    {...props}
  />
));
CardImage.displayName = "CardImage";

const CardBody = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full px-4 py-2", className)} {...props} />
));
CardBody.displayName = "CardBody";

const CardHeader = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-between", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

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

const CardTitleMain = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("truncate text-xl font-bold text-neutral-12", className)}
    {...props}
  />
));
CardTitleMain.displayName = "CardTitleMain";

const CardTitleSub = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("truncate text-xs font-medium text-neutral-11", className)}
    {...props}
  />
));
CardTitleSub.displayName = "CardTitleSub";

const CardButtonGroup = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, children, ...props }, ref) => {
  const isHovered = useAtomValue(isHoveredAtom);

  return (
    <div ref={ref} className={cn("flex space-x-1", className)} {...props}>
      {isHovered && children}
    </div>
  );
});
CardButtonGroup.displayName = "CardButtonGroup";

const CardInfo = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-1 flex justify-between py-1", className)}
    {...props}
  />
));
CardInfo.displayName = "CardInfo";

const CardInfoItem = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center space-x-2 text-xs font-medium text-neutral-11",
      className
    )}
    {...props}
  />
));
CardInfoItem.displayName = "CardInfoItem";

const CardTagGroup = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div className="mt-2 h-[4rem] overflow-hidden">
    <div
      ref={ref}
      className={cn("inline-flex h-fit flex-wrap items-start gap-2", className)}
      {...props}
    />
  </div>
));
CardTagGroup.displayName = "CardTagGroup";

const CardFooter = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mt-px flex space-x-3", className)} {...props} />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardImage,
  CardBody,
  CardHeader,
  CardTitle,
  CardButtonGroup,
  CardInfo,
  CardInfoItem,
  CardTagGroup,
  CardFooter,
};

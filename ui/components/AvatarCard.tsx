import { forwardRef } from "react";
import type { WithRequired } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Badge } from "@/ui/components/Badge";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { classed } from "@/classed.config";
import type { ComponentProps } from "@tw-classed/react";
import { deriveClassed } from "@tw-classed/react";

const AvatarCard = classed(
  "div",
  "relative flex justify-center rounded-lg bg-neutral-3 px-4 py-6 hover:bg-neutral-5"
);

const AvatarCardBadge = deriveClassed<
  typeof Badge,
  ComponentProps<typeof Badge>
>(({ className, children, ...props }, ref) => (
  <Badge
    ref={ref}
    className={cn("absolute top-2 right-2 z-10 rounded-full py-2", className)}
    {...props}
  >
    <ChatBubbleLeftRightIcon className="mr-1 h-4 w-4" />
    {children}
  </Badge>
));

const AvatarCardContent = classed("div", "flex w-32 flex-col space-y-4");

const AvatarCardImage = forwardRef<
  React.ElementRef<typeof Image>,
  Omit<React.ComponentPropsWithoutRef<typeof Image>, "children"> & {
    href?: string;
  }
>(({ className, alt, href, ...props }, ref) => (
  <a
    target="_blank"
    className={cn(
      "relative h-32 w-32 self-center overflow-hidden rounded-full",
      className
    )}
    href={href}
  >
    <Image
      ref={ref}
      className="cursor-pointer object-cover object-top"
      fill={true}
      unoptimized={true}
      alt={alt}
      {...props}
    />
  </a>
));
AvatarCardImage.displayName = "AvatarCardImage";

const AvatarCardInfo = classed("div", "flex flex-col space-y-1");

interface AvatarCardInfoItemProps
  extends React.ComponentPropsWithoutRef<"div"> {
  relation: string;
}
const AvatarCardInfoItem = forwardRef<
  HTMLDivElement,
  WithRequired<AvatarCardInfoItemProps, "children">
>(({ children, className, relation, ...props }, ref) => (
  <div ref={ref} className={cn("flex space-x-1", className)} {...props}>
    <span className="whitespace-nowrap text-xs text-neutral-11">
      {relation}:
    </span>
    {children}
  </div>
));
AvatarCardInfoItem.displayName = "AvatarCardInfoItem";

const AvatarCardInfoItemName = classed(
  "span",
  "whitespace-pre-wrap text-xs font-medium text-neutral-12 line-clamp-1"
);

export {
  AvatarCard,
  AvatarCardBadge,
  AvatarCardContent,
  AvatarCardImage,
  AvatarCardInfo,
  AvatarCardInfoItem,
  AvatarCardInfoItemName,
};

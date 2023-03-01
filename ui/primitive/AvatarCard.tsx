import { forwardRef } from "react";
import type { WithRequired } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Badge } from "@/ui/primitive/Badge";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const AvatarCard = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex justify-center rounded-lg bg-neutral-3 px-4 py-6 hover:bg-neutral-5",
      className
    )}
    {...props}
  />
));
AvatarCard.displayName = "AvatarCard";

const AvatarCardBadge = forwardRef<
  React.ElementRef<typeof Badge>,
  React.ComponentPropsWithoutRef<typeof Badge>
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
AvatarCardBadge.displayName = Badge.displayName;

const AvatarCardContent = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex w-32 flex-col space-y-4", className)}
    {...props}
  />
));
AvatarCardContent.displayName = "AvatarCardContent";

const AvatarCardImage = forwardRef<
  React.ElementRef<typeof Image>,
  Omit<React.ComponentPropsWithoutRef<typeof Image>, "children">
>(({ className, alt, ...props }, ref) => (
  <div
    className={cn(
      "relative h-32 w-32 self-center overflow-hidden rounded-full",
      className
    )}
  >
    <Image
      ref={ref}
      className="cursor-pointer object-cover object-top"
      fill={true}
      unoptimized={true}
      alt={alt}
      {...props}
    />
  </div>
));
AvatarCardImage.displayName = "AvatarCardImage";

const AvatarCardInfo = forwardRef<
  HTMLDivElement,
  WithRequired<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1", className)}
    {...props}
  />
));
AvatarCardInfo.displayName = "AvatarCardInfo";

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

const AvatarCardInfoItemName = forwardRef<
  HTMLSpanElement,
  WithRequired<React.ComponentPropsWithoutRef<"span">, "children">
>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "whitespace-pre-wrap text-xs font-medium text-neutral-12 line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
  </span>
));
AvatarCardInfoItemName.displayName = "AvatarCardInfoItemName";

export {
  AvatarCard,
  AvatarCardBadge,
  AvatarCardContent,
  AvatarCardImage,
  AvatarCardInfo,
  AvatarCardInfoItem,
  AvatarCardInfoItemName,
};

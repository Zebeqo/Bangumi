import Image from "next/image";
import { InfoButton } from "@/components/Button/InfoButton";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import {
  CalendarDaysIcon,
  ClockIcon,
  TableCellsIcon,
} from "@heroicons/react/20/solid";
import { Rating } from "@/ui/Rating";
import { cn } from "@/lib/utils";
import type { z } from "zod";
import type { collectionsPageScheme } from "@/lib/collection";
import { useAtomValue } from "jotai/react";
import { personalViewModeAtom } from "@/components/Switch/personalViewSwitch";
import { useRef, useState } from "react";
import { useDialog } from "@/hooks/use-dialog";
import { PrimaryButton_Icon } from "@/ui/primitive/Button";
import { Badge } from "@/ui/primitive/Badge";

export function CollectionCard({
  collection,
}: {
  collection: z.infer<typeof collectionsPageScheme>["data"][number];
}) {
  const pvMode = useAtomValue(personalViewModeAtom);
  const [isClamped, setIsClamped] = useState(false);
  const commentRef = useRef<HTMLParagraphElement>(null);
  const openDialog = useDialog();

  return (
    <div className="group flex w-[30rem] select-none overflow-hidden rounded-2xl bg-neutral-2 ring-1 ring-neutral-6">
      {/*Card.Image*/}
      <div className="relative aspect-[75/106] h-full">
        <Image
          className="object-cover"
          src={collection.subject.images.common}
          alt="card-image"
          fill={true}
          unoptimized={true}
        />
      </div>
      {/*Card.Content*/}
      <div className="w-full px-4 py-2">
        {/*Card.Header*/}
        <div className="flex justify-between">
          {/*Card.Title*/}
          <div className="w-52">
            <div className="truncate text-xl font-bold text-neutral-12">
              {collection.subject.name_cn || collection.subject.name}
            </div>
            <div className="truncate text-xs font-medium text-neutral-11">
              {collection.subject.name}
            </div>
          </div>
          {/*Card.HoverButton*/}
          <div className="hidden space-x-1 group-hover:flex">
            <InfoButton subject_id={collection.subject.id} />
            <PrimaryButton_Icon colorType={"accent"}>
              <ChatBubbleLeftRightIcon className="h-6 w-6" />
            </PrimaryButton_Icon>
          </div>
        </div>
        {/*Card.Info*/}
        <div className="mt-1 flex justify-between py-1">
          {/*Card.InfoItem*/}
          <div className="flex items-center space-x-2 text-xs font-medium text-neutral-11">
            <span className="h-4 w-4">
              <CalendarDaysIcon />
            </span>
            <span>{collection.subject.date || "未知"}</span>
          </div>
          {/*Card.InfoItem*/}
          <div className="flex items-center space-x-2 text-xs font-medium text-neutral-11">
            <span className="h-4 w-4">
              <TableCellsIcon />
            </span>
            <span>
              {collection.subject.eps
                ? `${collection.ep_status} / ${collection.subject.eps} 集`
                : "未知"}
            </span>
          </div>
          {/*Card.InfoItem*/}
          <div className="flex items-center space-x-2 text-xs font-medium text-neutral-11">
            <span className="h-4 w-4">
              <ClockIcon />
            </span>
            <span>{collection.subject.collection_total} 人收藏</span>
          </div>
        </div>
        {/*Card.TagGroup*/}
        <div className="h-[4.6rem] overflow-hidden py-1 leading-loose">
          {pvMode
            ? collection.tags.map((tag) => (
                <Badge colorType={"primary"} key={tag} className="mr-2">
                  {tag}
                </Badge>
              ))
            : collection.subject.tags.map((tag) => (
                <Badge colorType={"primary"} key={tag.name} className="mr-2">
                  {tag.name}
                </Badge>
              ))}
        </div>
        {/*Card.Footer*/}
        <div className="flex justify-between">
          {/*Card.Rating*/}
          <div className="flex space-x-3">
            {/*Card.RatingPoint*/}
            <div className="text-4xl font-bold text-accent-11">
              {pvMode ? collection.rate : collection.subject.score.toFixed(1)}
            </div>
            <div className="flex flex-col justify-center space-y-1">
              {/*Card.RatingStar*/}
              <div>
                <Rating
                  point={pvMode ? collection.rate : collection.subject.score}
                />
              </div>
              {/*Rating.RatingDescription*/}
              {collection.comment ? (
                <div
                  ref={commentRef}
                  className={cn(
                    "whitespace-pre-wrap text-xs font-medium italic text-accent-12 line-clamp-1",
                    isClamped && "hover:cursor-pointer hover:not-italic"
                  )}
                  onMouseEnter={() => {
                    if (commentRef.current) {
                      setIsClamped(
                        commentRef.current.scrollHeight >
                          commentRef.current.clientHeight + 1
                      );
                    }
                  }}
                  onClick={() =>
                    isClamped &&
                    openDialog({
                      title: "评论",
                      description: collection.comment ?? "",
                    })
                  }
                >
                  “ {collection.comment} ”
                </div>
              ) : (
                <span className="text-xs text-neutral-11">未发表吐槽</span>
              )}
            </div>
          </div>
          {/*Card.Status*/}
          <div></div>
        </div>
      </div>
    </div>
  );
}

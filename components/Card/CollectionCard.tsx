import Image from "next/image";
import { InfoButton } from "@/components/Button/InfoButton";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import {
  BookmarkIcon,
  CalendarDaysIcon,
  TableCellsIcon,
} from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";
import type { z } from "zod";
import type { collectionsPageScheme } from "@/lib/api/collection";
import { useAtomValue } from "jotai/react";
import { personalViewModeAtom } from "@/components/Switch/personalViewSwitch";
import { useRef, useState } from "react";
import { useDialog } from "@/hooks/use-dialog";
import { PrimaryButton_Icon } from "@/ui/primitive/Button";
import { Rating } from "@/components/Rating";
import {
  Card,
  CardButtonGroup,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
  CardInfo,
  CardInfoItem,
  CardTagGroup,
  CardTagGroupItem,
  CardTitle,
  CardTitleMain,
  CardTitleSub,
} from "@/ui/primitive/Card";

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
    <Card>
      <CardImage>
        <Image
          className="object-cover"
          src={collection.subject.images.common}
          fill={true}
          unoptimized={true}
          alt={"card-image"}
        />
      </CardImage>
      <CardContent>
        <CardHeader>
          <CardTitle>
            <CardTitleMain>
              {collection.subject.name_cn || collection.subject.name}
            </CardTitleMain>
            <CardTitleSub>{collection.subject.name}</CardTitleSub>
          </CardTitle>
          <CardButtonGroup>
            <InfoButton subject_id={collection.subject.id} />
            <PrimaryButton_Icon colorType={"accent"}>
              <ChatBubbleLeftRightIcon className="h-6 w-6" />
            </PrimaryButton_Icon>
          </CardButtonGroup>
        </CardHeader>
        <CardInfo className="mt-1">
          <CardInfoItem>
            <span className="h-4 w-4">
              <CalendarDaysIcon />
            </span>
            <span>{collection.subject.date || "未知"}</span>
          </CardInfoItem>
          <CardInfoItem>
            <span className="h-4 w-4">
              <TableCellsIcon />
            </span>
            <span>
              {" "}
              {collection.subject.eps
                ? `${collection.ep_status} / ${collection.subject.eps} 集`
                : "未知"}
            </span>
          </CardInfoItem>
          <CardInfoItem>
            <span className="h-4 w-4">
              <BookmarkIcon />
            </span>
            <span>{collection.subject.collection_total} 人收藏</span>
          </CardInfoItem>
        </CardInfo>
        <CardTagGroup>
          {pvMode
            ? collection.tags.map((tag) => (
                <CardTagGroupItem colorType={"primary"} key={tag}>
                  {tag}
                </CardTagGroupItem>
              ))
            : collection.subject.tags.map((tag) => (
                <CardTagGroupItem colorType={"primary"} key={tag.name}>
                  {tag.name}
                </CardTagGroupItem>
              ))}
        </CardTagGroup>
        <CardFooter>
          <div className="h-10 text-4xl font-bold text-accent-11">
            {pvMode
              ? collection.rate || null
              : collection.subject.score.toFixed(1)}
          </div>
          <div className="flex flex-col justify-center space-y-1">
            <div>
              <Rating
                score={pvMode ? collection.rate : collection.subject.score}
              />
            </div>
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
        </CardFooter>
      </CardContent>
    </Card>
  );
}

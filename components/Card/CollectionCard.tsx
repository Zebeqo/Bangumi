import Image from "next/image";
import { InfoButton } from "@/components/Button/InfoButton";
import {
  BookmarkIcon,
  CalendarDaysIcon,
  TableCellsIcon,
} from "@heroicons/react/20/solid";
import type { z } from "zod";
import type { collectionsPageScheme } from "@/lib/api/collection";
import { Rating } from "@/components/Rating/Rating";
import {
  Card,
  CardButtonGroup,
  CardBody,
  CardFooter,
  CardHeader,
  CardImageContainer,
  CardInfo,
  CardInfoItem,
  CardTagGroup,
  CardTitle,
} from "@/ui/components/Card";
import { CardComment } from "@/components/Dialog/CardComment";
import { ChatButton } from "@/components/Button/ChatButton";
import { Badge } from "@/ui/components/Badge";

export function CollectionCard({
  collection,
  pvMode = false,
}: {
  collection: z.infer<typeof collectionsPageScheme>["data"][number];
  pvMode?: boolean;
}) {
  return (
    <Card>
      <CardImageContainer>
        <Image
          className="object-cover"
          src={collection.subject.images.common}
          fill={true}
          unoptimized={true}
          alt={"card-image"}
        />
      </CardImageContainer>
      <CardBody>
        <CardHeader>
          <CardTitle
            mainTitle={collection.subject.name_cn || collection.subject.name}
            subTitle={collection.subject.name}
          />
          <CardButtonGroup>
            <InfoButton subject_id={collection.subject.id} />
            <ChatButton subject_id={collection.subject.id} />
          </CardButtonGroup>
        </CardHeader>
        <CardInfo>
          <CardInfoItem>
            <span className="h-4 w-4">
              <CalendarDaysIcon />
            </span>
            <span>{collection.subject.date}</span>
          </CardInfoItem>
          <CardInfoItem>
            <span className="h-4 w-4">
              <TableCellsIcon />
            </span>
            <span>
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
                <Badge color="primary" key={tag}>
                  {tag}
                </Badge>
              ))
            : collection.subject.tags.map((tag) => (
                <Badge color="primary" key={tag.name}>
                  {tag.name}
                </Badge>
              ))}
          <span className="text-transparent">placeholder</span>
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
              <CardComment comment={collection.comment} />
            ) : (
              <span className="text-xs text-neutral-11">未发表吐槽</span>
            )}
          </div>
        </CardFooter>
      </CardBody>
    </Card>
  );
}

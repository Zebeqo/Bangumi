import Image from "next/image";
import {
  BookmarkIcon,
  CalendarDaysIcon,
  ClockIcon,
  TableCellsIcon,
} from "@heroicons/react/20/solid";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { subjectScheme } from "@/lib/api/subject";
import { PrimaryButton_Icon } from "@/ui/primitive/Button";
import { Rating } from "../Rating";
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
import { InfoButton } from "@/components/Button/InfoButton";
import { cva } from "class-variance-authority";

async function getSubjectData(id: number) {
  return subjectScheme.safeParse(
    await fetch(`https://api.bgm.tv/v0/subjects/${id}`, {
      next: {
        revalidate: 3600,
      },
    }).then((res) => res.json())
  );
}

interface CardProps {
  subject_id: number;
  collectionInfoItemType?: "all" | "doing";
}

export async function CardSSR({
  subject_id,
  collectionInfoItemType = "all",
}: CardProps) {
  const result = await getSubjectData(subject_id);
  if (!result.success) {
    return null;
  }
  const { date, images, name, name_cn, tags, rating, collection, eps } =
    result.data;

  const cardSSR = cva(null, {
    variants: {
      collectionInfoItemType: {
        all: `${
          collection.doing +
          collection.collect +
          collection.dropped +
          collection.wish +
          collection.on_hold
        } 人收藏`,
        doing: `${collection.doing} 人在看`,
      },
    },
  });

  return (
    <Card>
      <CardImage>
        <Image
          className="object-cover"
          src={images.common}
          fill={true}
          unoptimized={true}
          alt={"card-image"}
        />
      </CardImage>
      <CardContent>
        <CardHeader>
          <CardTitle>
            <CardTitleMain>{name_cn || name}</CardTitleMain>
            <CardTitleSub>{name}</CardTitleSub>
          </CardTitle>
          <CardButtonGroup>
            <InfoButton subject_id={subject_id} />
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
            <span>{date || "未知"}</span>
          </CardInfoItem>
          <CardInfoItem>
            <span className="h-4 w-4">
              <TableCellsIcon />
            </span>
            <span>{eps ? `${eps} 集` : "未知"}</span>
          </CardInfoItem>
          <CardInfoItem>
            <span className="h-4 w-4">
              {collectionInfoItemType === "all" ? (
                <BookmarkIcon />
              ) : collectionInfoItemType === "doing" ? (
                <ClockIcon />
              ) : null}
            </span>
            <span>{cardSSR({ collectionInfoItemType })}</span>
          </CardInfoItem>
        </CardInfo>
        <CardTagGroup>
          {tags.slice(0, 10).map((tag) => (
            <CardTagGroupItem colorType={"primary"} key={tag.name}>
              {tag.name}
            </CardTagGroupItem>
          ))}
        </CardTagGroup>
        <CardFooter>
          <div className="text-4xl font-bold text-accent-11">
            {rating.score.toFixed(1)}
          </div>
          <div className="flex flex-col justify-center space-y-1">
            <div>
              <Rating score={rating.score} />
            </div>
            <div className="text-xs text-neutral-11">{rating.total} 人评分</div>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}

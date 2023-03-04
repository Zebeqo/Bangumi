import Image from "next/image";
import {
  BookmarkIcon,
  CalendarDaysIcon,
  ClockIcon,
  TableCellsIcon,
} from "@heroicons/react/20/solid";
import { subjectScheme } from "@/lib/api/subject";
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
} from "@/ui/primitive/Card";
import { InfoButton } from "@/components/Button/InfoButton";
import { cva } from "class-variance-authority";
import { ChatButton } from "@/components/Button/ChatButton";
import { Rating } from "@/components/Rating/Rating";

async function getSubjectData(id: number) {
  return subjectScheme.safeParse(
    await fetch(`https://api.bgm.tv/v0/subjects/${id}`, {
      headers: {
        "User-Agent": "Zebeqo/bangumi-app (https://github.com/Zebeqo/Bangumi)",
      },
      next: {
        revalidate: 3600,
      },
    }).then((res) => res.json())
  );
}

interface CardProps {
  subject_id: number;
  countType?: "all" | "doing";
}

export async function CardServer({ subject_id, countType = "all" }: CardProps) {
  const result = await getSubjectData(subject_id);
  if (!result.success) {
    return null;
  }
  const { date, images, name, name_cn, tags, rating, collection, eps } =
    result.data;

  const cardServer = cva(null, {
    variants: {
      countType: {
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
          <CardTitle mainTitle={name_cn || name} subTitle={name} />
          <CardButtonGroup>
            <InfoButton subject_id={subject_id} />
            <ChatButton subject_id={subject_id} />
          </CardButtonGroup>
        </CardHeader>
        <CardInfo>
          <CardInfoItem>
            <span className="h-4 w-4">
              <CalendarDaysIcon />
            </span>
            <span>{date}</span>
          </CardInfoItem>
          <CardInfoItem>
            <span className="h-4 w-4">
              <TableCellsIcon />
            </span>
            <span>{eps ? `${eps} 集` : "未知"}</span>
          </CardInfoItem>
          <CardInfoItem>
            <span className="h-4 w-4">
              {countType === "all" ? <BookmarkIcon /> : <ClockIcon />}
            </span>
            <span>{cardServer({ countType })}</span>
          </CardInfoItem>
        </CardInfo>
        <CardTagGroup>
          {tags.slice(0, 10).map((tag) => (
            <CardTagGroupItem colorVariant={"primary"} key={tag.name}>
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

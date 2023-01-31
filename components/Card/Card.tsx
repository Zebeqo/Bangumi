import Image from "next/image";
import {
  CalendarDaysIcon,
  ClockIcon,
  TableCellsIcon,
} from "@heroicons/react/20/solid";
import { Rating } from "@/ui/Rating";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { InfoButton } from "@/components/Button/InfoButton";
import { subjectScheme } from "@/lib/subject";
import { PrimaryButton_Icon } from "@/ui/primitive/Button";
import { Badge } from "@/ui/primitive/Badge";

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
  showCollectionNumber?: boolean;
}

export async function Card({
  subject_id,
  showCollectionNumber = false,
}: CardProps) {
  const result = await getSubjectData(subject_id);
  if (!result.success) {
    return null;
  }
  const { date, images, name, name_cn, tags, rating, collection, eps } =
    result.data;

  return (
    <div className="group flex w-[30rem] select-none overflow-hidden rounded-2xl bg-neutral-2 ring-1 ring-neutral-6">
      {/*Card.Image*/}
      <div className="relative aspect-[75/106] h-full">
        <Image
          className="object-cover"
          src={images.common}
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
              {name_cn || name}
            </div>
            <div className="truncate text-xs font-medium text-neutral-11">
              {name}
            </div>
          </div>
          {/*Card.HoverButton*/}
          <div className="hidden space-x-1 group-hover:flex">
            <InfoButton subject_id={subject_id} />
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
            <span>{date || "未知"}</span>
          </div>
          {/*Card.InfoItem*/}
          <div className="flex items-center space-x-2 text-xs font-medium text-neutral-11">
            <span className="h-4 w-4">
              <TableCellsIcon />
            </span>
            <span>{eps ? `${eps} 集` : "未知"}</span>
          </div>
          {/*Card.InfoItem*/}
          <div className="flex items-center space-x-2 text-xs font-medium text-neutral-11">
            <span className="h-4 w-4">
              <ClockIcon />
            </span>
            <span>
              {showCollectionNumber
                ? `${
                    collection.doing +
                    collection.collect +
                    collection.dropped +
                    collection.wish +
                    collection.on_hold
                  } 人收藏`
                : `${collection.doing} 人在看`}
            </span>
          </div>
        </div>
        {/*Card.TagGroup*/}
        <div className="h-[4.6rem] overflow-hidden py-1 leading-loose">
          {tags.slice(0, 10).map((tag) => (
            <Badge key={tag.name} className="mr-2" colorType={"primary"}>
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
              {rating.score.toFixed(1)}
            </div>
            <div className="flex flex-col justify-center space-y-1">
              {/*Card.RatingStar*/}
              <div>
                <Rating point={rating.score} />
              </div>
              {/*Rating.RatingDescription*/}
              <div className="text-xs text-neutral-11">
                {rating.total} 人评分
              </div>
            </div>
          </div>
          {/*Card.Status*/}
          <div></div>
        </div>
      </div>
    </div>
  );
}

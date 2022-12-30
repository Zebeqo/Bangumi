import Image from "next/image";
import {
  CalendarDaysIcon,
  ClockIcon,
  TableCellsIcon,
} from "@heroicons/react/20/solid";
import { Badges } from "@/ui/Badget";
import { Rating } from "@/ui/Rating";
import { Button } from "@/ui/Button";
import {
  ChatBubbleLeftRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { z } from "zod";

const subjectScheme = z.object({
  date: z.string(),
  images: z.object({
    large: z.string().url(),
    common: z.string().url(),
  }),
  name: z.string(),
  name_cn: z.string(),
  tags: z.array(
    z.object({
      name: z.string(),
      count: z.number(),
    })
  ),
  rating: z.object({
    score: z.number(),
    total: z.number(),
  }),
  collection: z.object({
    doing: z.number(),
    on_hold: z.number(),
    dropped: z.number(),
    wish: z.number(),
    collect: z.number(),
  }),
  eps: z.number(),
});

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
  id: number;
}

export async function Card({ id }: CardProps) {
  const result = await getSubjectData(id);
  if (!result.success) {
    return null;
  }
  const { date, images, name, name_cn, tags, rating, collection, eps } =
    result.data;

  return (
    <div className="group flex w-[30rem] cursor-pointer select-none overflow-hidden rounded-2xl outline outline-1 outline-neutral-7">
      {/*Card.Image*/}
      <div className="relative aspect-[75/106] h-full">
        <Image
          className="object-cover"
          src={images.common}
          alt=""
          fill={true}
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
            <Button
              color="accent"
              type="primary"
              icon={<InformationCircleIcon />}
            />
            <Button
              color="accent"
              type="primary"
              icon={<ChatBubbleLeftRightIcon />}
            />
          </div>
        </div>
        {/*Card.Info*/}
        <div className="mt-1 flex justify-between py-1">
          {/*Card.InfoItem*/}
          <div className="flex items-center space-x-2 text-xs font-medium text-neutral-11">
            <span className="h-4 w-4">
              <CalendarDaysIcon />
            </span>
            <span>{date}</span>
          </div>
          {/*Card.InfoItem*/}
          <div className="flex items-center space-x-2 text-xs font-medium text-neutral-11">
            <span className="h-4 w-4">
              <TableCellsIcon />
            </span>
            <span>{eps} 集</span>
          </div>
          {/*Card.InfoItem*/}
          <div className="flex items-center space-x-2 text-xs font-medium text-neutral-11">
            <span className="h-4 w-4">
              <ClockIcon />
            </span>
            <span>{collection.doing} 人在看</span>
          </div>
        </div>
        {/*Card.TagGroup*/}
        <div className="h-[4.6rem] overflow-hidden py-1 leading-loose">
          {/*<Balancer>*/}
          {tags.slice(0, 10).map((tag, index) => (
            <Badges key={index} color="primary" label={tag.name} />
          ))}
          {/*</Balancer>*/}
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
          <div>
            <Button color="accent" label="待定" type="outline" />
          </div>
        </div>
      </div>
    </div>
  );
}

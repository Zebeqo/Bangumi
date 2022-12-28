import Image from "next/image";
import {
  BookmarkIcon,
  CalendarDaysIcon,
  StarIcon,
  TableCellsIcon,
} from "@heroicons/react/20/solid";
import { Badges } from "@/ui/Badget";
import Balancer from "react-wrap-balancer";
import { Rating } from "@/ui/Rating";
import { Button } from "@/ui/Button";
import {
  ChatBubbleLeftRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export function Card() {
  return (
    <div className="group flex w-[30rem] cursor-pointer select-none overflow-hidden rounded-2xl outline outline-1 outline-neutral-7">
      {/*Card.Image*/}
      <div className="relative aspect-[75/106] h-full">
        <Image
          className="object-cover"
          src="https://lain.bgm.tv/pic/cover/l/b7/58/302286_s3o3E.jpg"
          alt=""
          fill={true}
        />
      </div>
      {/*Card.Content*/}
      <div className="w-full px-4 py-2">
        {/*Card.Header*/}
        <div className="flex justify-between">
          {/*Card.Title*/}
          <div>
            <div className="text-xl font-bold text-neutral-12">
              死神 千年血战篇
            </div>
            <div className="text-xs font-medium text-neutral-11">
              BLEACH 千年血戦篇
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
            <span>2022-10-10</span>
          </div>
          {/*Card.InfoItem*/}
          <div className="flex items-center space-x-2 text-xs font-medium text-neutral-11">
            <span className="h-4 w-4">
              <TableCellsIcon />
            </span>
            <span>13集</span>
          </div>
          {/*Card.InfoItem*/}
          <div className="flex items-center space-x-2 text-xs font-medium text-neutral-11">
            <span className="h-4 w-4">
              <BookmarkIcon />
            </span>
            <span>2937 人收藏</span>
          </div>
        </div>
        {/*Card.TagGroup*/}
        <div className="pt-1 pb-2 leading-loose">
          <Balancer>
            <Badges color="primary" label="2022年10月" />
            <Badges color="primary" label="BLEACH" />
            <Badges color="primary" label="死神" />
            <Badges color="primary" label="TV" />
            <Badges color="primary" label="热血" />
            <Badges color="primary" label="漫改" />
            <Badges color="primary" label="StudioPierrot" />
            <Badges color="primary" label="漫画改" />
          </Balancer>
        </div>
        {/*Card.Footer*/}
        <div className="flex justify-between">
          {/*Card.Rating*/}
          <div className="flex space-x-3">
            {/*Card.RatingPoint*/}
            <div className="text-4xl font-bold text-accent-11">8.0</div>
            <div className="flex flex-col justify-center space-y-1">
              {/*Card.RatingStar*/}
              <div>
                <Rating point={8} />
              </div>
              {/*Rating.RatingDescription*/}
              <div className="text-xs text-neutral-11">791 人评分</div>
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

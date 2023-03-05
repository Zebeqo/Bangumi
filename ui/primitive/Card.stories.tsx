import type { Meta, StoryObj } from "@storybook/react";
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
  CardTitle,
} from "@/ui/primitive/Card";
import Image from "next/image";
import { PrimaryButton_Icon } from "@/ui/primitive/Button";
import {
  ChatBubbleLeftRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { action } from "@storybook/addon-actions";
import {
  CalendarDaysIcon,
  ClockIcon,
  TableCellsIcon,
} from "@heroicons/react/20/solid";
import { Rating } from "@/components/Rating/Rating";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Badge } from "@/ui/primitive/Badge";

const meta = {
  title: "Card",
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const infoButton = canvas.getByLabelText("open-info-panel");
    await userEvent.click(infoButton);
    await expect(args.onClickInfoButton).toHaveBeenCalledTimes(1);
  },
} satisfies Meta;

export default meta;

export const Card_: StoryObj<{
  image: string;
  name_cn: string;
  name: string;
  date: string;
  eps: number;
  collectionCount: number;
  tags: string[];
  rating: number;
  ratingCount: number;
  onClickInfoButton: () => void;
}> = {
  args: {
    image: "https://lain.bgm.tv/r/400/pic/cover/l/b7/58/302286_s3o3E.jpg",
    name_cn: "死神 千年血战篇",
    name: "BLEACH 千年血戦篇",
    date: "2022-10-10",
    eps: 13,
    collectionCount: 3816,
    tags: [
      "2022年10月",
      "死神",
      "BLEACH",
      "TV",
      "热血",
      "漫改",
      "StudioPierrot",
      "漫画改",
      "JUMP",
      "2022",
      "战斗",
      "爷青回",
      "田口智久",
      "日本动画",
      "奇幻",
      "久保带人",
      "续作",
      "2022年",
      "ぴえろ",
      "民工",
      "TVA",
      "未上映",
      "续篇",
      "鹭巢诗郎",
      "民工漫",
      "动画",
      "10月",
      "未确定",
      "studioぴえろ",
      "久保帯人",
    ],
    rating: 8.0,
    ratingCount: 1757,
    onClickInfoButton: action("click info button"),
  },
  render: ({
    image,
    name_cn,
    name,
    date,
    eps,
    collectionCount,
    tags,
    rating,
    ratingCount,
    onClickInfoButton,
  }) => (
    <Card>
      <CardImage className="h-[201.6px]">
        <Image
          className="object-cover"
          src={image}
          fill={true}
          unoptimized={true}
          alt={"card-image"}
        />
      </CardImage>
      <CardContent>
        <CardHeader>
          <CardTitle mainTitle={name_cn} subTitle={name} />
          <CardButtonGroup>
            <PrimaryButton_Icon
              aria-label="open-info-panel"
              colorVariant={"accent"}
              onClick={onClickInfoButton}
            >
              <InformationCircleIcon className="h-6 w-6" />
            </PrimaryButton_Icon>
            <PrimaryButton_Icon colorVariant={"accent"}>
              <ChatBubbleLeftRightIcon className="h-6 w-6" />
            </PrimaryButton_Icon>
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
            <span>{`${eps} 集`}</span>
          </CardInfoItem>
          <CardInfoItem>
            <span className="h-4 w-4">
              <ClockIcon />
            </span>
            <span>{collectionCount} 人收藏</span>
          </CardInfoItem>
        </CardInfo>
        <CardTagGroup>
          {tags.map((tag) => (
            <Badge colorVariant={"primary"} key={tag}>
              {tag}
            </Badge>
          ))}
        </CardTagGroup>
        <CardFooter>
          <div className="text-4xl font-bold text-accent-11">
            {rating.toFixed(1)}
          </div>
          <div className="flex flex-col justify-center space-y-1">
            <div>
              <Rating score={rating} />
            </div>
            <div className="text-xs text-neutral-11">{ratingCount} 人评分</div>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  ),
};

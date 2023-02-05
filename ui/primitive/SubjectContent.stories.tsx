import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import {
  SubjectContent,
  SubjectContentInfoFooter,
  SubjectContentImage,
  SubjectContentInfo,
  SubjectContentInfoBody,
  SubjectContentInfoHeader,
  SubjectContentInfoHeaderDivider,
  SubjectContentRating,
  SubjectContentTagGroup,
} from "@/ui/primitive/SubjectContent";
import { Badge } from "@/ui/primitive/Badge";
import { OutlineButton, PrimaryButton } from "@/ui/primitive/Button";
import { action } from "@storybook/addon-actions";
import {
  ChevronDownIcon,
  InboxArrowDownIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import {
  CollectionTypeSelect,
  RatingSelect,
} from "@/ui/primitive/Select.stories";
import { MoreDropdownMenu } from "@/ui/primitive/DropdownMenu.stories";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta = {
  title: "SubjectContent",
};

export default meta;

export const SubjectContent_: StoryObj<{
  imageURL: string;
  score: number;
  total: number;
  tags: { count: number; name: string }[];
  summary: string;
  onClickCollection: () => void;
  onClickRating: () => void;
}> = {
  args: {
    imageURL: "https://lain.bgm.tv/r/800/pic/cover/l/b7/58/302286_s3o3E.jpg",
    score: 8,
    total: 1768,
    tags: [
      {
        name: "2022年10月",
        count: 394,
      },
      {
        name: "死神",
        count: 367,
      },
      {
        name: "BLEACH",
        count: 350,
      },
      {
        name: "TV",
        count: 280,
      },
      {
        name: "热血",
        count: 248,
      },
      {
        name: "漫改",
        count: 224,
      },
      {
        name: "StudioPierrot",
        count: 214,
      },
      {
        name: "漫画改",
        count: 190,
      },
      {
        name: "JUMP",
        count: 168,
      },
      {
        name: "2022",
        count: 162,
      },
      {
        name: "战斗",
        count: 137,
      },
      {
        name: "爷青回",
        count: 92,
      },
      {
        name: "田口智久",
        count: 39,
      },
      {
        name: "日本动画",
        count: 34,
      },
      {
        name: "奇幻",
        count: 22,
      },
      {
        name: "久保带人",
        count: 10,
      },
      {
        name: "续作",
        count: 8,
      },
      {
        name: "2022年",
        count: 5,
      },
      {
        name: "ぴえろ",
        count: 5,
      },
      {
        name: "民工",
        count: 4,
      },
      {
        name: "TVA",
        count: 4,
      },
      {
        name: "未上映",
        count: 4,
      },
      {
        name: "续篇",
        count: 4,
      },
      {
        name: "鹭巢诗郎",
        count: 4,
      },
      {
        name: "民工漫",
        count: 4,
      },
      {
        name: "动画",
        count: 3,
      },
      {
        name: "10月",
        count: 3,
      },
      {
        name: "未确定",
        count: 3,
      },
      {
        name: "studioぴえろ",
        count: 3,
      },
      {
        name: "久保帯人",
        count: 2,
      },
    ],
    summary:
      "或是偶然，或是必然——\r\n因缘际会下得到死神力量成为《死神代理》的黑崎一护，被卷入聚集现世死亡灵魂的场所·尸魂界的动乱，在激烈的战斗中，和同伴一起得到的巨大的成长。\r\n而此时一护所在的空座町发生异变。出现了新的死神和新的敌人。还有求救的声音。一护再次拿起斩魄刀，奔赴战场。\r\n另一边，尸魂界观测到现世里的虚突然连续地消失，给引导到尸魂界的灵魂提供定居场所的流魂街发生居民们出现失踪的状况，以及死神所聚集在的灵屋·静灵庭也被敌军袭击。\r\n敌军的真正身份，是灭却师的始祖·友哈巴赫率领的《无形帝国》。\r\n《无形帝国》向死神们正式宣战。\r\n「五天后，尸魂界会被“无形帝国”消灭」\r\n跨越千年死神们所背负的因果。它的宿命罪孽和隐藏的真相终将解开。\r\n一切走向终焉。黑崎一护的最后一战开始了。",
    onClickCollection: action("onClickCollection"),
    onClickRating: action("onClickRating"),
  },
  render: ({
    imageURL,
    score,
    total,
    tags,
    summary,
    onClickCollection,
    onClickRating,
  }) => (
    <SubjectContent>
      <SubjectContentImage src={imageURL} alt="cover" />
      <SubjectContentInfo>
        <SubjectContentInfoHeader>
          <SubjectContentRating score={score} total={total} />
          <SubjectContentInfoHeaderDivider />
          <SubjectContentTagGroup>
            {tags.map(({ count, name }) => (
              <Badge colorType={"primary"} key={name} className="mr-2">
                {name}
                <span className="ml-1 text-neutral-11">{count}</span>
              </Badge>
            ))}
          </SubjectContentTagGroup>
        </SubjectContentInfoHeader>
        <SubjectContentInfoBody>
          <p className="max-w-[632px] whitespace-pre-wrap line-clamp-8">
            {summary}
          </p>
        </SubjectContentInfoBody>
        <SubjectContentInfoFooter>
          <PrimaryButton colorType={"neutral"} onClick={onClickCollection}>
            <InboxArrowDownIcon className="mr-2 h-5 w-5" />
            收藏
          </PrimaryButton>
          <OutlineButton colorType={"neutral"} onClick={onClickRating}>
            <span className="flex items-center space-x-1">
              <StarIcon className="h-5 w-5" />
              <span>评分</span>
            </span>
            <ChevronDownIcon className="ml-2 h-5 w-5" />
          </OutlineButton>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/*@ts-expect-error*/}
          {MoreDropdownMenu.render(MoreDropdownMenu.args)}
        </SubjectContentInfoFooter>
      </SubjectContentInfo>
    </SubjectContent>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const collectionButton = canvas.getByRole("button", {
      name: /收藏/i,
    });
    const ratingButton = canvas.getByRole("button", {
      name: /评分/i,
    });
    await userEvent.click(collectionButton);
    await expect(args.onClickCollection).toHaveBeenCalledTimes(1);
    await userEvent.click(ratingButton);
    await expect(args.onClickRating).toHaveBeenCalledTimes(1);
  },
};

export const SubjectContent_Auth: StoryObj<{
  imageURL: string;
  score: number;
  total: number;
  tags: { count: number; name: string }[];
  summary: string;
}> = {
  args: SubjectContent_.args,
  render: ({ imageURL, score, total, tags, summary }) => (
    <SubjectContent>
      <SubjectContentImage src={imageURL} alt="cover" />
      <SubjectContentInfo>
        <SubjectContentInfoHeader>
          <SubjectContentRating score={score} total={total} />
          <SubjectContentInfoHeaderDivider />
          <SubjectContentTagGroup>
            {tags.map(({ count, name }) => (
              <Badge colorType={"primary"} key={name} className="mr-2">
                {name}
                <span className="ml-1 text-neutral-11">{count}</span>
              </Badge>
            ))}
          </SubjectContentTagGroup>
        </SubjectContentInfoHeader>
        <SubjectContentInfoBody>
          <p className="max-w-[632px] line-clamp-8">{summary}</p>
        </SubjectContentInfoBody>
        <SubjectContentInfoFooter>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/*@ts-expect-error*/}
          {CollectionTypeSelect.render(CollectionTypeSelect.args)}
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/*@ts-expect-error*/}
          {RatingSelect.render(RatingSelect.args)}
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/*@ts-expect-error*/}
          {MoreDropdownMenu.render(MoreDropdownMenu.args)}
        </SubjectContentInfoFooter>
      </SubjectContentInfo>
    </SubjectContent>
  ),
};

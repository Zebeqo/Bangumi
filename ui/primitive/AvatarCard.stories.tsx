import type { Meta, StoryObj } from "@storybook/react";
import {
  AvatarCard,
  AvatarCardBadge,
  AvatarCardContent,
  AvatarCardImage,
  AvatarCardInfo,
  AvatarCardInfoItem,
  AvatarCardInfoItemName,
} from "./AvatarCard";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta = {
  title: "AvatarCard",
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const image = canvas.getByRole("img");
    await userEvent.click(image);
    await expect(args.onClickImage).toHaveBeenCalledTimes(1);
  },
};

export default meta;

export const CharacterCard: StoryObj<{
  commentCount: number;
  imageURL: string;
  items: { relation: string; name: string }[];
  onClickImage: () => void;
}> = {
  args: {
    commentCount: 326,
    imageURL:
      "https://lain.bgm.tv/r/400/pic/crt/l/d5/f7/304_crt_q6Bs8.jpg?r=1520696076",
    items: [
      {
        relation: "主角",
        name: "惣流·明日香·兰格雷",
      },
      {
        relation: "CV",
        name: "宮村優子",
      },
    ],
    onClickImage: action("click image"),
  },
  render: ({ commentCount, imageURL, items, onClickImage }) => (
    <AvatarCard>
      <AvatarCardBadge colorVariant={"success"}>{commentCount}</AvatarCardBadge>
      <AvatarCardContent>
        <AvatarCardImage src={imageURL} alt="Avatar" onClick={onClickImage} />
        <AvatarCardInfo>
          {items.map((item) => (
            <AvatarCardInfoItem
              key={`${item.relation}-${item.name}`}
              relation={item.relation}
            >
              <AvatarCardInfoItemName title={item.name}>
                {item.name}
              </AvatarCardInfoItemName>
            </AvatarCardInfoItem>
          ))}
        </AvatarCardInfo>
      </AvatarCardContent>
    </AvatarCard>
  ),
};

export const PersonCard: StoryObj<{
  commentCount: number;
  imageURL: string;
  items: { relation: string; name: string }[];
  onClickImage: () => void;
}> = {
  args: {
    commentCount: 175,
    imageURL:
      "https://lain.bgm.tv/r/400/pic/crt/l/19/01/94_prsn_Hp88F.jpg?r=1465131379",
    items: [
      {
        relation: "导演",
        name: "庵野秀明",
      },
    ],
    onClickImage: action("click image"),
  },
  render: CharacterCard.render,
};

export const SubjectCard: StoryObj<{
  imageURL: string;
  item: { relation: string; name: string };
  onClickImage: () => void;
}> = {
  args: {
    imageURL: "https://lain.bgm.tv/r/400/pic/cover/l/fe/45/6049_tbM7S.jpg",
    item: {
      relation: "续集",
      name: "新世纪福音战士剧场版 Air/真心为你",
    },
    onClickImage: action("click image"),
  },
  render: ({ imageURL, item, onClickImage }) => (
    <AvatarCard>
      <AvatarCardContent className="mx-2 w-40 items-center">
        <AvatarCardImage
          src={imageURL}
          alt="Avatar"
          onClick={onClickImage}
          className="h-56 w-40 rounded"
        />
        <AvatarCardInfo>
          <AvatarCardInfoItem relation={item.relation}>
            <AvatarCardInfoItemName title={item.name} className="line-clamp-2">
              {item.name}
            </AvatarCardInfoItemName>
          </AvatarCardInfoItem>
        </AvatarCardInfo>
      </AvatarCardContent>
    </AvatarCard>
  ),
};

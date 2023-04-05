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

const meta = {
  title: "AvatarCard",
} satisfies Meta;

export default meta;

export const AvatarCard_: StoryObj<{
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
      <AvatarCardBadge color="success">{commentCount}</AvatarCardBadge>
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
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const image = canvas.getByRole("img");
    await userEvent.click(image);
    await expect(args.onClickImage).toHaveBeenCalledTimes(1);
  },
};

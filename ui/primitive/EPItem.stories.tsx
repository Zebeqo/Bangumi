import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import {
  EPItem,
  EPItemComment,
  EPItemIndex,
  EPItemInfo,
  EPItemLeftContent,
  EPItemRightContent,
} from "@/ui/primitive/EPItem";
import { action } from "@storybook/addon-actions";
import { ContainerDecorator } from "@/ui/Storybook";
import { userEvent, within } from "@storybook/testing-library";

const meta = {
  title: "EPItem",
  decorators: [ContainerDecorator],
} satisfies Meta;

export default meta;

export const EPItem_: StoryObj<{
  isSelected: boolean;
  index: number;
  name: string;
  name_cn: string;
  airdate: string;
  duration: string;
  commentCount: number;
  onClickIndex: () => void;
  onClickComment: () => void;
}> = {
  args: {
    isSelected: false,
    index: 3,
    name: "THE BLOOD WARFARE",
    name_cn: "血战",
    airdate: "2022-10-10",
    duration: "00:24:07",
    commentCount: 125,
    onClickIndex: action("click index"),
    onClickComment: action("click comment"),
  },
  render: ({
    isSelected,
    index,
    name,
    name_cn,
    airdate,
    duration,
    commentCount,
    onClickIndex,
    onClickComment,
  }) => (
    <EPItem>
      <EPItemLeftContent>
        <EPItemIndex
          aria-label={`episode ${index}`}
          value={index}
          isSelected={isSelected}
          onClick={onClickIndex}
        />
        <EPItemInfo
          name={name}
          name_cn={name_cn}
          airdate={airdate}
          duration={duration}
        />
      </EPItemLeftContent>
      <EPItemRightContent>
        <EPItemComment
          aria-label="comment"
          count={commentCount}
          onClick={onClickComment}
        />
      </EPItemRightContent>
    </EPItem>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const index = canvas.getByLabelText(`episode ${args.index}`);
    await userEvent.click(index);
    await expect(args.onClickIndex).toHaveBeenCalledTimes(1);
    const comment = canvas.getByLabelText("comment");
    await userEvent.click(comment);
    await expect(args.onClickComment).toHaveBeenCalledTimes(1);
  },
};

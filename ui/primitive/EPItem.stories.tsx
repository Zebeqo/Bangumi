import type { Meta, StoryObj } from "@storybook/react";
import {
  EPItem,
  EPItemComment,
  EPItemIndex,
  EPItemInfo,
  EPItemLeftContent,
} from "@/ui/primitive/EPItem";
import { action } from "@storybook/addon-actions";
import { containerDecorator } from "@/lib/storybook";

const meta: Meta = {
  title: "EPItem",
  decorators: [containerDecorator],
};

export default meta;

export const EPItem_: StoryObj<{
  isSelected: boolean;
  index: number;
  name: string;
  name_cn: string;
  airdate: string;
  duration: string;
  commentCount: number;
}> = {
  args: {
    isSelected: false,
    index: 3,
    name: "THE BLOOD WARFARE",
    name_cn: "血战",
    airdate: "2022-10-10",
    duration: "00:24:07",
    commentCount: 125,
  },
  render: ({
    isSelected,
    index,
    name,
    name_cn,
    airdate,
    duration,
    commentCount,
  }) => (
    <EPItem>
      <EPItemLeftContent>
        <EPItemIndex
          value={index}
          isSelected={isSelected}
          onClick={action("click index")}
        />
        <EPItemInfo
          name={name}
          name_cn={name_cn}
          airdate={airdate}
          duration={duration}
        />
      </EPItemLeftContent>
      <EPItemComment count={commentCount} onClick={action("click comment")} />
    </EPItem>
  ),
};

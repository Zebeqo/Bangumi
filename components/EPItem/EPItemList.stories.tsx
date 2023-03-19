import type { Meta, StoryObj } from "@storybook/react";
import { EPItemList } from "@/components/EPItem/EPItemList";
import { ReactQueryDevtoolsDecorator } from "@/ui/StorybookDecorator";

const meta = {
  component: EPItemList,
  decorators: [ReactQueryDevtoolsDecorator],
} satisfies Meta<typeof EPItemList>;

export default meta;
type Story = StoryObj<typeof EPItemList>;

export const EPItemList_: Story = {
  args: {
    episodesData: [
      {
        id: 1069,
        ep: 17,
        name: "四人目の適格者",
        name_cn: "第四位适格者",
        comment: 41,
        duration: "24m",
        airdate: "1996-01-24",
      },
      {
        id: 1070,
        ep: 18,
        name: "命の選択を",
        name_cn: "命的选择",
        comment: 76,
        duration: "24m",
        airdate: "1996-01-31",
      },
      {
        id: 1071,
        ep: 19,
        name: "男の戦い",
        name_cn: "男人的战斗",
        comment: 55,
        duration: "24m",
        airdate: "1996-02-07",
      },
      {
        id: 1072,
        ep: 20,
        name: "こころのかたち、人のかたち",
        name_cn: "心的容貌、人的容貌",
        comment: 63,
        duration: "24m",
        airdate: "1996-02-14",
      },
      {
        id: 1073,
        ep: 21,
        name: "ネルフ、誕生",
        name_cn: "NERV、诞生",
        comment: 43,
        duration: "23m",
        airdate: "1996-02-21",
      },
      {
        id: 1074,
        ep: 22,
        name: "せめて、人間らしく",
        name_cn: "至少要像个人",
        comment: 64,
        duration: "23m",
        airdate: "1996-02-28",
      },
      {
        id: 1075,
        ep: 23,
        name: "涙",
        name_cn: "泪",
        comment: 50,
        duration: "23m",
        airdate: "1996-03-06",
      },
      {
        id: 1076,
        ep: 24,
        name: "最後のシ者",
        name_cn: "最后的死(使)者",
        comment: 64,
        duration: "23m",
        airdate: "1996-03-13",
      },
      {
        id: 1077,
        ep: 25,
        name: "終わる世界",
        name_cn: "完结的世界",
        comment: 30,
        duration: "23m",
        airdate: "1996-03-20",
      },
      {
        id: 1078,
        ep: 26,
        name: "世界の中心でアイを叫んだけもの",
        name_cn: "在世界的中心呼唤爱(的野兽)",
        comment: 87,
        duration: "23m",
        airdate: "1996-03-27",
      },
    ],
    subject_id: 265,
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { CollectionCard } from "@/components/Card/CollectionCard";
import { collectionsDataScheme } from "@/lib/api/collection";
import { PanelDecorator, ToastDecorator } from "@/ui/Storybook";

const meta = {
  component: CollectionCard,
  decorators: [PanelDecorator, ToastDecorator],
} satisfies Meta<typeof CollectionCard>;

export default meta;
type Story = StoryObj<typeof CollectionCard>;

const collectionData = {
  updated_at: "2023-03-03T17:42:47Z",
  comment: null,
  tags: ["EVA", "神作", "原创"],
  subject: {
    date: "1995-10-04",
    images: {
      small: "https://lain.bgm.tv/r/200/pic/cover/l/e5/69/265_Z5Uou.jpg",
      grid: "https://lain.bgm.tv/r/100/pic/cover/l/e5/69/265_Z5Uou.jpg",
      large: "https://lain.bgm.tv/pic/cover/l/e5/69/265_Z5Uou.jpg",
      medium: "https://lain.bgm.tv/r/800/pic/cover/l/e5/69/265_Z5Uou.jpg",
      common: "https://lain.bgm.tv/r/400/pic/cover/l/e5/69/265_Z5Uou.jpg",
    },
    name: "新世紀エヴァンゲリオン",
    name_cn: "新世纪福音战士",
    short_summary:
      "　　2000年，一个科学探险队在南极洲针对被称作“第一使徒”亚当的“光之巨人”进行探险。在对其进行接触实验时，“光之巨人”自毁，从而发生了“第二次冲击”，进而导致世界大战。最后，人类人口减半，地轴偏转、气候改变。根据对“第二次冲击”的调查，",
    tags: [
      {
        name: "EVA",
        count: 6417,
      },
      {
        name: "庵野秀明",
        count: 4779,
      },
      {
        name: "GAINAX",
        count: 3202,
      },
      {
        name: "新世纪福音战士",
        count: 2762,
      },
      {
        name: "神作",
        count: 2347,
      },
      {
        name: "科幻",
        count: 2050,
      },
      {
        name: "宗教",
        count: 1456,
      },
      {
        name: "TV",
        count: 1444,
      },
      {
        name: "心理",
        count: 1092,
      },
      {
        name: "骗钱神棍片的王者",
        count: 935,
      },
    ],
    score: 8.9,
    type: 2,
    id: 265,
    eps: 26,
    volumes: 0,
    collection_total: 31816,
    rank: 9,
  },
  subject_id: 265,
  vol_status: 0,
  ep_status: 24,
  subject_type: 2,
  type: 2,
  rate: 9,
  private: false,
};

export const CollectionCard_: Story = {
  args: {
    collection: collectionsDataScheme.parse(collectionData),
  },
};

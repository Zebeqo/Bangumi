import type { Meta, StoryObj } from "@storybook/react";
import { RelationSubjectAvatarCard } from "@/components/AvatarCard/RelationSubjectAvatarCard";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta = {
  component: RelationSubjectAvatarCard,
} satisfies Meta<typeof RelationSubjectAvatarCard>;

export default meta;
type Story = StoryObj<typeof RelationSubjectAvatarCard>;

export const RelationSubjectAvatarCard_: Story = {
  args: {
    name: "新世紀エヴァンゲリオン劇場版 Air/まごころを、君に",
    name_cn: "新世纪福音战士剧场版 Air/真心为你",
    relation: "续集",
    imageURL: "https://lain.bgm.tv/r/400/pic/cover/l/fe/45/6049_zy52O.jpg",
    onClick: action("onClick"),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.queryByText(args.name) ?? canvas.queryByText(args.name_cn)
    ).toBeInTheDocument();
    await expect(
      canvas.getByText(args.relation, { exact: false })
    ).toBeInTheDocument();

    const image = canvas.getByRole("img");
    await userEvent.click(image);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

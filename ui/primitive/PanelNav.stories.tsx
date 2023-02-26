import type { Meta, StoryObj } from "@storybook/react";
import {
  PanelNav,
  PanelNavButtonGroup,
  PanelNavLeftContent,
  PanelNavRightContent,
  PanelNavSubTitle,
  PanelNavTitle,
  PanelNavTitleGroup,
} from "@/ui/primitive/PanelNav";
import { action } from "@storybook/addon-actions";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { GhostButton_Icon } from "@/ui/primitive/Button";
import { containerDecorator } from "@/ui/storybook";

const meta: Meta = {
  title: "PanelNav",
  decorators: [containerDecorator],
};

export default meta;

export const PanelNav_: StoryObj<{ title: string; subTitle: string }> = {
  args: {
    title: "死神 千年血战篇",
    subTitle: "BLEACH 千年血戦篇",
  },
  render: ({ title, subTitle }) => (
    <PanelNav>
      <PanelNavLeftContent>
        <PanelNavButtonGroup
          onClickBack={action("click back")}
          onClickForward={action("click forward")}
        />
        <PanelNavTitleGroup>
          <PanelNavTitle>{title}</PanelNavTitle>
          <PanelNavSubTitle>{subTitle}</PanelNavSubTitle>
        </PanelNavTitleGroup>
      </PanelNavLeftContent>
      <PanelNavRightContent>
        <GhostButton_Icon
          colorVariant="neutral"
          aria-label="Close"
          onClick={action("click close")}
        >
          <XMarkIcon className="h-6 w-6" />
        </GhostButton_Icon>
      </PanelNavRightContent>
    </PanelNav>
  ),
};

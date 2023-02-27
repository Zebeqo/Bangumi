import type { Meta, StoryObj } from "@storybook/react";
import {
  Panel,
  PanelContent,
  PanelNav,
  PanelNavSubTitle,
  PanelNavTitle,
  PanelNavTitleGroup,
} from "@/ui/primitive/Panel";
import {
  SubjectContent_,
  SubjectContent_Auth,
} from "@/ui/primitive/SubjectContent.stories";
import { createStore, Provider } from "jotai";
import { panelHistoryAtom } from "@/lib/panel";

const meta: Meta = {
  title: "Panel",
};

export default meta;

const defaultStore = createStore();
defaultStore.set(panelHistoryAtom, {
  history: [{ type: "subjectList", target_id: 1 }],
  index: 0,
});

export const Panel_: StoryObj = {
  render: () => (
    <Provider store={defaultStore}>
      <Panel>
        <PanelNav>
          <PanelNavTitleGroup>
            <PanelNavTitle>死神 千年血战篇</PanelNavTitle>
            <PanelNavSubTitle>BLEACH 千年血戦篇</PanelNavSubTitle>
          </PanelNavTitleGroup>
        </PanelNav>
        <PanelContent>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/*@ts-expect-error*/}
          {SubjectContent_Auth.render(SubjectContent_.args)}
        </PanelContent>
      </Panel>
    </Provider>
  ),
};

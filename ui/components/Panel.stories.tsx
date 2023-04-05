import type { Meta, StoryObj } from "@storybook/react";
import {
  Panel,
  PanelContent,
  PanelNav,
  PanelNavSubTitle,
  PanelNavTitle,
  PanelNavTitleGroup,
} from "@/ui/components/Panel";
import {
  SubjectContent_,
  SubjectContent_Auth,
} from "@/ui/components/SubjectContent.stories";
import { Button } from "@/ui/components/Button";
import { panelHistoryAtom, panelReducer } from "@/lib/panel";
import { useReducerAtom } from "jotai/utils";
import { userEvent, within } from "@storybook/testing-library";

const meta = {
  title: "Panel",
} satisfies Meta;

export default meta;

export const Panel_: StoryObj = {
  render: () => {
    const [, dispatch] = useReducerAtom(panelHistoryAtom, panelReducer);

    return (
      <>
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
            <p className="text-neutral-12">TODO: extract other content</p>
          </PanelContent>
        </Panel>
        <Button
          variant="secondary"
          data-testid="open-panel"
          onClick={() => {
            dispatch({
              type: "push",
              value: { type: "subject", target_id: 302286 },
            });
          }}
        >
          Open panel
        </Button>
      </>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("open-panel"));
  },
};

import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { Panel } from "@/components/Panel/Panel";
import { InfoButton } from "@/components/InfoButton";
import { userEvent, within, waitFor, screen } from "@storybook/testing-library";
import {
  STORYBOOK_BROKEN_NOT_COLLECTED_SUBJECT_ID,
  STORYBOOK_BROKEN_SUBJECT_ID,
  STORYBOOK_NOT_COLLECTED_SUBJECT_ID,
  STORYBOOK_SUBJECT_ID,
} from "@/lib/constant";
import { panelDecorator, reactQueryDevtoolsDecorator } from "@/lib/storybook";

const meta: Meta<typeof Panel> = {
  title: "Panel",
  component: Panel,
  decorators: [panelDecorator, reactQueryDevtoolsDecorator],
};

export default meta;
type Story = StoryObj<typeof Panel>;

const play =
  (title: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole("button", { name: "open info panel" });
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeVisible();
    });

    const panel = await screen.findByRole("dialog");

    await waitFor(
      () => {
        expect(within(panel).getAllByText(title)[0]).toBeVisible();
      },
      { timeout: 5000, interval: 1000 }
    );

    await userEvent.click(within(panel).getByRole("button", { name: "Close" }));
  };

export const InfoPanel: Story = {
  render: () => <InfoButton subject_id={STORYBOOK_SUBJECT_ID} />,
  play: play("死神 千年血战篇"),
  parameters: {
    nextAuthMock: {
      session: {
        data: null,
        status: "unauthenticated",
      },
    },
  },
};

export const InfoPanel_Session: Story = {
  render: () => <InfoButton subject_id={STORYBOOK_SUBJECT_ID} />,
  play: play("死神 千年血战篇"),
};

export const InfoPanel_Session_Not_Collected: Story = {
  render: () => <InfoButton subject_id={STORYBOOK_NOT_COLLECTED_SUBJECT_ID} />,
  play: play("新世纪福音战士"),
};

export const InfoPanel_Broken: Story = {
  render: () => <InfoButton subject_id={STORYBOOK_BROKEN_SUBJECT_ID} />,
  parameters: {
    nextAuthMock: {
      session: {
        data: null,
        status: "unauthenticated",
      },
    },
  },
  play: play("名侦探柯南"),
};

export const InfoPanel_Broken_Session: Story = {
  render: () => <InfoButton subject_id={STORYBOOK_BROKEN_SUBJECT_ID} />,
  play: play("名侦探柯南"),
};

export const InfoPanel_Broken_Session_Not_Collected: Story = {
  render: () => (
    <InfoButton subject_id={STORYBOOK_BROKEN_NOT_COLLECTED_SUBJECT_ID} />
  ),
  play: play("海贼王"),
};

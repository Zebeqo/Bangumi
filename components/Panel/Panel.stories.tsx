import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { Panel } from "@/components/Panel/Panel";
import { InfoButton } from "@/components/Button/InfoButton";
import { userEvent, within, waitFor, screen } from "@storybook/testing-library";
import {
  STORYBOOK_BROKEN_NOT_COLLECTED_SUBJECT_ID,
  STORYBOOK_BROKEN_SUBJECT_ID,
  STORYBOOK_NOT_COLLECTED_SUBJECT_ID,
  STORYBOOK_SUBJECT_ID,
  STORYBOOK_UPCOMING_SUBJECT_ID,
} from "@/lib/constant";
import { panelDecorator, reactQueryDevtoolsDecorator } from "@/lib/storybook";

const meta: Meta<typeof Panel> = {
  title: "Dialog/Panel",
  component: Panel,
  decorators: [panelDecorator, reactQueryDevtoolsDecorator],
};

export default meta;
type Story = StoryObj<typeof Panel>;

const play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const button = await canvas.findByRole("button", { name: "open-info-panel" });
  await userEvent.click(button);

  const panel = await screen.findByRole("dialog");

  await waitFor(
    () => {
      expect(within(panel).getByTestId("title")).toHaveTextContent(/./);
    },
    { timeout: 5000, interval: 1000 }
  );

  await userEvent.click(within(panel).getByRole("button", { name: "Close" }));
  await new Promise((r) => setTimeout(r, 400));
};

export const InfoPanel: Story = {
  render: () => <InfoButton subject_id={STORYBOOK_SUBJECT_ID} />,
  play,
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
  play,
};

export const InfoPanel_Session_Not_Collected: Story = {
  render: () => <InfoButton subject_id={STORYBOOK_NOT_COLLECTED_SUBJECT_ID} />,
  play,
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
  play,
};

export const InfoPanel_Broken_Session: Story = {
  render: () => <InfoButton subject_id={STORYBOOK_BROKEN_SUBJECT_ID} />,
  play,
};

export const InfoPanel_Broken_Session_Not_Collected: Story = {
  render: () => (
    <InfoButton subject_id={STORYBOOK_BROKEN_NOT_COLLECTED_SUBJECT_ID} />
  ),
  play,
};

export const InfoPanel_Upcoming: Story = {
  render: () => <InfoButton subject_id={STORYBOOK_UPCOMING_SUBJECT_ID} />,
  play,
};

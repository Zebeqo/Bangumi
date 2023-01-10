import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { Panel } from "@/components/panel/Panel";
import { InfoButton } from "@/components/InfoButton";
import { userEvent, within, waitFor, screen } from "@storybook/testing-library";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";

const meta: Meta<typeof Panel> = {
  title: "Panel",
  component: Panel,
  decorators: [
    (Story) => {
      return (
        <>
          <Story />
          <Panel />
        </>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Panel>;

const play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const button = canvas.getByRole("button", { name: "open info panel" });
  await userEvent.click(button);

  await waitFor(() => {
    expect(screen.getByRole("dialog")).toBeVisible();
  });

  const panel = await screen.findByRole("dialog");

  await waitFor(
    () => {
      expect(within(panel).getByText("死神 千年血战篇")).toBeVisible();
    },
    { timeout: 5000, interval: 1000 }
  );

  await userEvent.click(within(panel).getByRole("button", { name: "Close" }));
};

export const InfoPanel: Story = {
  render: () => <InfoButton subject_id={STORYBOOK_SUBJECT_ID} />,
  play,
  decorators: [
    (Story) => (
      <>
        <Story />
        <ReactQueryDevtools initialIsOpen={false} panelPosition={"right"} />
      </>
    ),
  ],
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
  decorators: [
    (Story) => (
      <>
        <Story />
        <ReactQueryDevtools initialIsOpen={false} panelPosition={"right"} />
      </>
    ),
  ],
};

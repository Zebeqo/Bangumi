import type { Meta, StoryObj } from "@storybook/react";
import { Panel } from "@/components/panel/Panel";
import { InfoButton } from "@/components/InfoButton";
import { userEvent, within } from "@storybook/testing-library";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const meta: Meta<typeof Panel> = {
  title: "Panel",
  component: Panel,
  decorators: [
    (Story) => (
      <>
        <Story />
        <ReactQueryDevtools initialIsOpen={true} panelPosition={"right"} />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Panel>;

const SUBJECT_ID = 302286;

const play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");
  await userEvent.click(button);
};

export const InfoPanel: Story = {
  render: () => (
    <>
      <InfoButton id={SUBJECT_ID} />
    </>
  ),
  play,
};

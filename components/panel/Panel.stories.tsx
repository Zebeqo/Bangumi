import type { Meta, StoryObj } from "@storybook/react";
import { Panel } from "@/components/panel/Panel";
import { InfoButton } from "@/components/InfoButton";

const meta: Meta<typeof Panel> = {
  title: "Panel",
  component: Panel,
};

export default meta;
type Story = StoryObj<typeof Panel>;

const SUBJECT_ID = 302286;
export const InfoPanel: Story = {
  render: () => <InfoButton id={SUBJECT_ID} />,
};

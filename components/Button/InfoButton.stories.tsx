import type { Meta, StoryObj } from "@storybook/react";
import { InfoButton as InfoButtonComponent } from "./InfoButton";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";
import { panelDecorator } from "@/lib/storybook";

const meta: Meta = {
  title: "InfoButton",
  decorators: [panelDecorator],
};

export default meta;

type Story = StoryObj;

export const InfoButton: Story = {
  render: () => (
    <>
      <InfoButtonComponent subject_id={STORYBOOK_SUBJECT_ID} />
    </>
  ),
};

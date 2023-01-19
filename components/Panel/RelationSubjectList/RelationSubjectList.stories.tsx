import type { Meta, StoryObj } from "@storybook/react";

import { RelationSubjectList as RelationSubjectListComponent } from "@/components/Panel/RelationSubjectList/RelationSubjectList";
import { reactQueryDevtoolsDecorator } from "@/lib/storybook";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";
import { waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof RelationSubjectListComponent> = {
  title: "RelationSubjectList",
  component: RelationSubjectListComponent,
  decorators: [reactQueryDevtoolsDecorator],
};

export default meta;
type Story = StoryObj<typeof RelationSubjectListComponent>;

export const RelationSubjectList: Story = {
  args: {
    subject_id: STORYBOOK_SUBJECT_ID,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(
      async () => {
        const nameEl = canvas.getAllByTestId("subject-name");
        await expect(nameEl.length).toBeGreaterThan(0);
        for (const el of nameEl) {
          await expect(el).toHaveTextContent(/./);
        }
      },
      { timeout: 5000, interval: 1000 }
    );
  },
};

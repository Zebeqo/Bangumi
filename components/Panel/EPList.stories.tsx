import type { Meta, StoryObj } from "@storybook/react";

import { EPList as EPListComponent } from "@/components/Panel/EPList";
import { reactQueryDevtoolsDecorator } from "@/lib/storybook";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";
import { waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof EPListComponent> = {
  title: "EPList",
  component: EPListComponent,
  decorators: [reactQueryDevtoolsDecorator],
};

export default meta;
type Story = StoryObj<typeof EPListComponent>;

export const EPList: Story = {
  args: {
    subject_id: STORYBOOK_SUBJECT_ID,
    length: 6,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(
      async () => {
        const commentEls = canvas.getAllByRole("button", { name: "comment" });
        await expect(commentEls.length).toEqual(6);
        for (const el of commentEls) {
          await expect(el).toHaveTextContent(/./);
        }
      },
      { timeout: 5000, interval: 1000 }
    );
  },
};

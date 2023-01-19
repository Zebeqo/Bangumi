import type { Meta, StoryObj } from "@storybook/react";

import { EPListDynamic as EPListDynamicComponent } from "@/components/Panel/EPList/EPListDynamic";
import { reactQueryDevtoolsDecorator } from "@/lib/storybook";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";
import { waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof EPListDynamicComponent> = {
  title: "EPListDynamic",
  component: EPListDynamicComponent,
  decorators: [reactQueryDevtoolsDecorator],
};

export default meta;
type Story = StoryObj<typeof EPListDynamicComponent>;

export const EPListDynamic: Story = {
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

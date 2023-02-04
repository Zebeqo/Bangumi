import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { EpisodeButton as EpisodeButtonComponent } from "@/components/Button/EpisodeButton";
import {
  STORYBOOK_BROKEN_SUBJECT_ID,
  STORYBOOK_SUBJECT_ID,
} from "@/lib/constant";
import { reactQueryDevtoolsDecorator } from "@/ui/storybook";
import { useCollectionData } from "@/hooks/use-collection";
import { waitFor, within } from "@storybook/testing-library";

const meta: Meta<typeof EpisodeButtonComponent> = {
  title: "Button/EpisodeButton",
  component: EpisodeButtonComponent,
  decorators: [reactQueryDevtoolsDecorator],
};

export default meta;
type Story = StoryObj<typeof EpisodeButtonComponent>;

const play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const input = await canvas.getByRole<HTMLInputElement>("spinbutton");
      await expect(input.value).toBeTruthy();
    },
    { timeout: 5000, interval: 1000 }
  );
};

export const EpisodeButton: Story = {
  render: () => {
    const { data: collectionData } = useCollectionData(STORYBOOK_SUBJECT_ID);
    return (
      <>
        {collectionData && (
          <EpisodeButtonComponent
            subject_id={collectionData.subject_id}
            eps={collectionData.subject.eps}
            ep_status={collectionData.ep_status}
          />
        )}
      </>
    );
  },
  play,
};

export const EpisodeButton_Broken: Story = {
  render: () => {
    const { data: collectionData } = useCollectionData(
      STORYBOOK_BROKEN_SUBJECT_ID
    );
    return (
      <>
        {collectionData && (
          <EpisodeButtonComponent
            subject_id={collectionData.subject_id}
            eps={collectionData.subject.eps}
            ep_status={collectionData.ep_status}
          />
        )}
      </>
    );
  },
  play,
};

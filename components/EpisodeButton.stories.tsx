import type { Meta, StoryObj } from "@storybook/react";
import { EpisodeButton as EpisodeButtonComponent } from "@/components/EpisodeButton";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";
import { reactQueryDevtoolsDecorator } from "@/lib/storybook";
import { useCollectionData } from "@/hooks/use-collection";

const meta: Meta<typeof EpisodeButtonComponent> = {
  title: "EpisodeButton",
  component: EpisodeButtonComponent,
  decorators: [reactQueryDevtoolsDecorator],
};

export default meta;
type Story = StoryObj<typeof EpisodeButtonComponent>;

export const EpisodeButton = () => {
  const { data: collectionData } = useCollectionData(1600);
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
};

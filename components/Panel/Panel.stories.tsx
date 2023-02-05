import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogContent_Panel } from "@/ui/primitive/Dialog";
import { action } from "@storybook/addon-actions";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";
import { SubjectPanelSkeleton } from "@/components/Skeleton/SubjectPanelSkeleton";
import { Suspense } from "react";
import { CharacterListPanel } from "@/components/Panel/SubPanel/CharacterListPanel";
import { EPListPanel } from "@/components/Panel/SubPanel/EPListPanel";
import { PersonListPanel } from "@/components/Panel/SubPanel/PersonListPanel";
import { SubjectListPanel } from "@/components/Panel/SubPanel/SubjectListPanel";
import { SubjectPanel } from "@/components/Panel/SubPanel/SubjectPanel";
import { waitFor, within, screen } from "@storybook/testing-library";

const meta: Meta = {
  title: "Panel",
  args: {
    subject_id: STORYBOOK_SUBJECT_ID,
  },
};

export default meta;

type PanelStory = StoryObj<{ subject_id: number }>;

export const SubjectPanel_: PanelStory = {
  render: ({ subject_id }) => (
    <Dialog open={true} onOpenChange={action("trigger close")}>
      <DialogContent_Panel isOpen={true}>
        <Suspense fallback={<SubjectPanelSkeleton />}>
          <SubjectPanel subject_id={subject_id} />
        </Suspense>
      </DialogContent_Panel>
    </Dialog>
  ),
  play: async () => {
    const panel = await screen.findByRole("dialog");
    await waitFor(
      () => {
        expect(within(panel).getByText(/或是偶然，或是必然/));
      },
      { timeout: 5000, interval: 1000 }
    );
  },
};

export const CharacterListPanel_: PanelStory = {
  render: ({ subject_id }) => (
    <Dialog open={true} onOpenChange={action("trigger close")}>
      <DialogContent_Panel isOpen={true}>
        <CharacterListPanel subject_id={subject_id} />
      </DialogContent_Panel>
    </Dialog>
  ),
  play: async () => {
    const panel = await screen.findByRole("dialog");
    await waitFor(
      () => {
        expect(within(panel).getByText(/黑崎一护/));
      },
      { timeout: 5000, interval: 1000 }
    );
  },
};

export const EPListPanel_: PanelStory = {
  render: ({ subject_id }) => (
    <Dialog open={true} onOpenChange={action("trigger close")}>
      <DialogContent_Panel isOpen={true}>
        <EPListPanel subject_id={subject_id} />
      </DialogContent_Panel>
    </Dialog>
  ),
  play: async () => {
    const panel = await screen.findByRole("dialog");
    await waitFor(
      () => {
        expect(within(panel).getByText(/万物无雨 六月的真相/));
      },
      { timeout: 5000, interval: 1000 }
    );
  },
};

export const PersonListPanel_: PanelStory = {
  render: ({ subject_id }) => (
    <Dialog open={true} onOpenChange={action("trigger close")}>
      <DialogContent_Panel isOpen={true}>
        <PersonListPanel subject_id={subject_id} />
      </DialogContent_Panel>
    </Dialog>
  ),
  play: async () => {
    const panel = await screen.findByRole("dialog");
    await waitFor(
      () => {
        expect(within(panel).getAllByText(/久保带人/));
      },
      { timeout: 5000, interval: 1000 }
    );
  },
};

export const SubjectListPanel_: PanelStory = {
  render: ({ subject_id }) => (
    <Dialog open={true} onOpenChange={action("trigger close")}>
      <DialogContent_Panel isOpen={true}>
        <SubjectListPanel subject_id={subject_id} />
      </DialogContent_Panel>
    </Dialog>
  ),
  play: async () => {
    const panel = await screen.findByRole("dialog");
    await waitFor(
      () => {
        expect(within(panel).getByText(/诀别谭/));
      },
      { timeout: 5000, interval: 1000 }
    );
  },
};

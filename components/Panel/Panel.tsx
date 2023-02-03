"use client";

import { Suspense } from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai/react";
import {
  currentPanelAtom,
  isOpenPanelAtom,
  panelHistoryAtom,
} from "@/lib/panel";
import { SubjectContent } from "@/components/Panel/SubjectContent";
import { CharacterListPanel } from "@/components/Panel/SubPanel/CharacterListPanel";
import { EPListPanel } from "@/components/Panel/SubPanel/EPListPanel";
import { PersonListPanel } from "@/components/Panel/SubPanel/PersonListPanel";
import { SubjectContentSkeleton } from "@/components/Skeleton/SubjectContentSkeleton";
import { SubjectListPanel } from "@/components/Panel/SubPanel/SubjectListPanel";
import { Dialog, DialogContent_Panel } from "@/ui/primitive/Dialog";

export function Panel() {
  const panel = useAtomValue(currentPanelAtom);
  const setPanelHistory = useSetAtom(panelHistoryAtom);
  const [isOpenPanel, setIsOpenPanel] = useAtom(isOpenPanelAtom);

  return (
    <Dialog
      open={isOpenPanel}
      onOpenChange={(open) => {
        if (!open) {
          setIsOpenPanel(false);
          setTimeout(() => {
            setPanelHistory({ history: [], index: -1 });
          }, 300);
        }
      }}
    >
      <DialogContent_Panel isOpen={isOpenPanel}>
        {panel?.type === "subject" ? (
          <Suspense fallback={<SubjectContentSkeleton />}>
            <SubjectContent subject_id={panel.target_id} />
          </Suspense>
        ) : panel?.type === "characterList" ? (
          <CharacterListPanel subject_id={panel.target_id} />
        ) : panel?.type === "episodeList" ? (
          <EPListPanel subject_id={panel.target_id} />
        ) : panel?.type === "personList" ? (
          <PersonListPanel subject_id={panel.target_id} />
        ) : panel?.type === "subjectList" ? (
          <SubjectListPanel subject_id={panel.target_id} />
        ) : null}
      </DialogContent_Panel>
    </Dialog>
  );
}

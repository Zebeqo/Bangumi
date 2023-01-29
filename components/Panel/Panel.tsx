"use client";

import { Suspense } from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai/react";
import {
  currentPanelAtom,
  isOpenPanelAtom,
  panelHistoryAtom,
} from "@/lib/panel";
import { SubjectContent } from "@/components/Panel/SubjectContent";
import { CharacterListContent } from "@/components/Panel/CharacterListContent";
import { EPListContent } from "@/components/Panel/EPListContent";
import { PersonListContent } from "@/components/Panel/PersonListContent";
import { SubjectContentSkeleton } from "@/components/Skeleton/SubjectContentSkeleton";
import { RelationSubjectContent } from "@/components/Panel/RelationSubjectContent";
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
          <CharacterListContent subject_id={panel.target_id} />
        ) : panel?.type === "episodeList" ? (
          <EPListContent subject_id={panel.target_id} />
        ) : panel?.type === "personList" ? (
          <PersonListContent subject_id={panel.target_id} />
        ) : panel?.type === "subjectList" ? (
          <RelationSubjectContent subject_id={panel.target_id} />
        ) : null}
      </DialogContent_Panel>
    </Dialog>
  );
}

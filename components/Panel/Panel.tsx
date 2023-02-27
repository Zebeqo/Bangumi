"use client";

import { Suspense } from "react";
import { useAtomValue } from "jotai";
import { currentPanelAtom } from "@/lib/panel";
import { CharacterListPanel } from "@/components/Panel/SubPanel/CharacterListPanel";
import { EPListPanel } from "@/components/Panel/SubPanel/EPListPanel";
import { PersonListPanel } from "@/components/Panel/SubPanel/PersonListPanel";
import { SubjectPanelSkeleton } from "@/components/Skeleton/SubjectPanelSkeleton";
import { SubjectListPanel } from "@/components/Panel/SubPanel/SubjectListPanel";
import { Panel as PanelRoot } from "@/ui/primitive/Panel";
import { SubjectPanel } from "@/components/Panel/SubPanel/SubjectPanel";

export function Panel() {
  const panel = useAtomValue(currentPanelAtom);

  return (
    <PanelRoot>
      {panel?.type === "subject" ? (
        <Suspense fallback={<SubjectPanelSkeleton />}>
          <SubjectPanel subject_id={panel.target_id} />
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
    </PanelRoot>
  );
}

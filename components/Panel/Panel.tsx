"use client";

import { Suspense } from "react";
import { useAtomValue } from "jotai";
import { currentPanelAtom } from "@/lib/panel";
import { CharacterListPanel } from "@/components/Panel/SubPanel/CharacterListPanel";
import { EPListPanel } from "@/components/Panel/SubPanel/EPListPanel";
import { PersonListPanel } from "@/components/Panel/SubPanel/PersonListPanel";
import { SubjectPanelSkeleton } from "@/components/Skeleton/SubjectPanelSkeleton";
import { SubjectListPanel } from "@/components/Panel/SubPanel/SubjectListPanel";
import { Panel as PanelRoot } from "@/ui/components/Panel";
import { SubjectPanel } from "@/components/Panel/SubPanel/SubjectPanel";
import { usePrevious } from "ahooks";

export function Panel() {
  const panel = useAtomValue(currentPanelAtom);
  const previousPanel = usePrevious(panel);

  const activePanel = panel ?? previousPanel;

  return (
    <PanelRoot>
      {activePanel?.type === "subject" ? (
        <Suspense fallback={<SubjectPanelSkeleton />}>
          <SubjectPanel subject_id={activePanel.target_id} />
        </Suspense>
      ) : activePanel?.type === "characterList" ? (
        <CharacterListPanel subject_id={activePanel.target_id} />
      ) : activePanel?.type === "episodeList" ? (
        <EPListPanel subject_id={activePanel.target_id} />
      ) : activePanel?.type === "personList" ? (
        <PersonListPanel subject_id={activePanel.target_id} />
      ) : activePanel?.type === "subjectList" ? (
        <SubjectListPanel subject_id={activePanel.target_id} />
      ) : null}
    </PanelRoot>
  );
}

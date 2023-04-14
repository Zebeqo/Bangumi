"use client";

import { useSubjectData } from "@/hooks/use-subject";
import {
  CharacterList,
  CharacterListSkeleton,
} from "@/components/Panel/PanelList/CharacterList";
import {
  PanelNav,
  PanelNavTitleGroup,
  PanelNavSubTitle,
  PanelNavTitle,
  PanelContent,
} from "@/ui/components/Panel";
import { Suspense } from "react";

export function CharacterListPanel({ subject_id }: { subject_id: number }) {
  const { data: subjectData } = useSubjectData(subject_id);
  return (
    <>
      {subjectData && (
        <>
          <PanelNav>
            <PanelNavTitleGroup>
              <PanelNavTitle>
                {subjectData.name_cn || subjectData.name}
              </PanelNavTitle>
              <PanelNavSubTitle>{subjectData.name}</PanelNavSubTitle>
            </PanelNavTitleGroup>
          </PanelNav>
          <PanelContent>
            <Suspense fallback={<CharacterListSkeleton />}>
              <CharacterList subject_id={subject_id} />
            </Suspense>
          </PanelContent>
        </>
      )}
    </>
  );
}

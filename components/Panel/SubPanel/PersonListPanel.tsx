"use client";

import {
  PanelContent,
  PanelNav,
  PanelNavSubTitle,
  PanelNavTitle,
  PanelNavTitleGroup,
} from "@/ui/components/Panel";
import { useSubjectData } from "@/hooks/use-subject";
import {
  PersonList,
  PersonListSkeleton,
} from "@/components/Panel/PanelList/PersonList";
import { Suspense } from "react";

export function PersonListPanel({ subject_id }: { subject_id: number }) {
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
            <Suspense fallback={<PersonListSkeleton />}>
              <PersonList subject_id={subject_id} />
            </Suspense>
          </PanelContent>
        </>
      )}
    </>
  );
}

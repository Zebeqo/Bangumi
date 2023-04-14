"use client";

import { useSubjectData } from "@/hooks/use-subject";
import { EPListFull } from "@/components/Panel/PanelList/EPListFull";
import { Suspense } from "react";
import {
  PanelContent,
  PanelNav,
  PanelNavSubTitle,
  PanelNavTitle,
  PanelNavTitleGroup,
} from "@/ui/components/Panel";
import { EPListDynamicSkeleton } from "@/components/Panel/PanelList/EPListDynamic";

export function EPListPanel({ subject_id }: { subject_id: number }) {
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
            <Suspense fallback={<EPListDynamicSkeleton />}>
              <EPListFull subject_id={subject_id} />
            </Suspense>
          </PanelContent>
        </>
      )}
    </>
  );
}

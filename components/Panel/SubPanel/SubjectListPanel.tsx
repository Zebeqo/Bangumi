"use client";

import {
  PanelContent,
  PanelNav,
  PanelNavSubTitle,
  PanelNavTitle,
  PanelNavTitleGroup,
} from "@/ui/components/Panel";
import { useSubjectData } from "@/hooks/use-subject";
import { SubjectList } from "@/components/Panel/PanelList/SubjectList";

export function SubjectListPanel({ subject_id }: { subject_id: number }) {
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
            <SubjectList subject_id={subject_id} />
          </PanelContent>
        </>
      )}
    </>
  );
}

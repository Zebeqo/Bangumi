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
import { useCollectionData } from "@/hooks/use-collection";
import { CharacterList } from "@/components/Panel/PanelList/CharacterList";
import { EPListDynamic } from "@/components/Panel/PanelList/EPListDynamic";
import { PersonList } from "@/components/Panel/PanelList/PersonList";
import { SubjectContent } from "@/components/SubjectContent/SubjectContent";

export function SubjectPanel({ subject_id }: { subject_id: number }) {
  const { isSuccess: isCollectionDataSuccess } = useCollectionData(subject_id);
  const { data: subjectData, isSuccess: isSubjectDataSuccess } =
    useSubjectData(subject_id);
  return (
    <>
      {subjectData && isSubjectDataSuccess && isCollectionDataSuccess && (
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
            <SubjectContent subject_id={subjectData.id} />
            {/*SubjectContent.CharacterList*/}
            <CharacterList subject_id={subjectData.id} length={10} />
            {/*SubjectContent.EPListDynamic*/}
            <EPListDynamic subject_id={subjectData.id} length={10} />
            {/*SubjectContent.PersonList*/}
            <PersonList subject_id={subjectData.id} length={5} />
            {/*SubjectContent.SubjectList*/}
            <SubjectList subject_id={subjectData.id} length={8} />
          </PanelContent>
        </>
      )}
    </>
  );
}

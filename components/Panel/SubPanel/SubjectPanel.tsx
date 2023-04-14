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
  SubjectList,
  SubjectListSkeleton,
} from "@/components/Panel/PanelList/SubjectList";
import { useCollectionData } from "@/hooks/use-collection";
import {
  CharacterList,
  CharacterListSkeleton,
} from "@/components/Panel/PanelList/CharacterList";
import {
  EPListDynamic,
  EPListDynamicSkeleton,
} from "@/components/Panel/PanelList/EPListDynamic";
import {
  PersonList,
  PersonListSkeleton,
} from "@/components/Panel/PanelList/PersonList";
import { SubjectContent } from "@/components/SubjectContent/SubjectContent";
import { Suspense } from "react";

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
            <Suspense fallback={<CharacterListSkeleton />}>
              <CharacterList subject_id={subjectData.id} length={10} />
            </Suspense>
            <Suspense fallback={<EPListDynamicSkeleton />}>
              <EPListDynamic subject_id={subjectData.id} length={10} />
            </Suspense>
            <Suspense fallback={<PersonListSkeleton />}>
              <PersonList subject_id={subjectData.id} length={5} />
            </Suspense>
            <Suspense fallback={<SubjectListSkeleton />}>
              <SubjectList subject_id={subjectData.id} length={8} />
            </Suspense>
          </PanelContent>
        </>
      )}
    </>
  );
}

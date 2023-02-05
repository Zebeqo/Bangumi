"use client";

import { PanelNav } from "@/components/Panel/PanelNav";
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
          <PanelNav
            title={{ name: subjectData.name, name_cn: subjectData.name_cn }}
          />
          <div className="flex flex-col space-y-2 px-8">
            <SubjectContent subject_id={subjectData.id} />
            {/*SubjectContent.CharacterList*/}
            <CharacterList subject_id={subjectData.id} length={10} />
            {/*SubjectContent.EPListDynamic*/}
            <EPListDynamic subject_id={subjectData.id} length={10} />
            {/*SubjectContent.PersonList*/}
            <PersonList subject_id={subjectData.id} length={5} />
            {/*SubjectContent.SubjectList*/}
            <SubjectList subject_id={subjectData.id} length={8} />
          </div>
        </>
      )}
    </>
  );
}

"use client";

import { PanelNav } from "@/components/Panel/PanelNav";
import { useSubjectData } from "@/hooks/use-subject";
import { EPListFull } from "@/components/Panel/EPList/EPListFull";

export function EPListContent({ subject_id }: { subject_id: number }) {
  const { data: subjectData } = useSubjectData(subject_id);
  return (
    <>
      <PanelNav
        title={{ name: subjectData?.name, name_cn: subjectData?.name_cn }}
      />
      <div className="px-8">
        <EPListFull subject_id={subject_id} />
      </div>
    </>
  );
}

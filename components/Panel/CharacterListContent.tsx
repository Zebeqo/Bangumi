import { PanelNav } from "@/components/Panel/PanelNav";
import { useSubjectData } from "@/hooks/use-subject";
import { CharacterList } from "@/components/Panel/CharacterList";

export function CharacterListContent({ subject_id }: { subject_id: number }) {
  const { data: subjectData } = useSubjectData(subject_id);
  return (
    <>
      <PanelNav
        title={{ name: subjectData?.name, name_cn: subjectData?.name_cn }}
      />
      <div className="px-8">
        <CharacterList subject_id={subject_id} />
      </div>
    </>
  );
}

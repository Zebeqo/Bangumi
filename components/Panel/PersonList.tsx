"use client";

import { ListHeader } from "@/components/Panel/ListHeader";
import { useSubjectPersonsData } from "@/hooks/use-person";
import { PersonAvatarCard } from "@/components/Panel/PersonAvatarCard";

export function PersonList({ subject_id }: { subject_id: number }) {
  const { data: subjectPersonsData } = useSubjectPersonsData(subject_id);

  const directorData =
    subjectPersonsData?.filter(
      (personData) => personData.relation === "导演"
    ) ?? [];
  const originalCreatorData =
    subjectPersonsData?.filter(
      (personData) => personData.relation === "原作"
    ) ?? [];
  const animationProductionData =
    subjectPersonsData?.filter(
      (personData) => personData.relation === "动画制作"
    ) ?? [];
  const characterSettingData =
    subjectPersonsData?.filter(
      (personData) => personData.relation === "人物设定"
    ) ?? [];
  const musicProducerData =
    subjectPersonsData?.filter(
      (personData) => personData.relation === "音乐"
    ) ?? [];

  // An array include above arrays data in order
  const listData = [
    ...directorData,
    ...originalCreatorData,
    ...animationProductionData,
    ...characterSettingData,
    ...musicProducerData,
  ];

  return (
    <>
      <div className="flex flex-col space-y-2 p-2">
        {subjectPersonsData && (
          <>
            <ListHeader title={"制作人员"} />
            <div className="grid grid-cols-5 gap-4 px-8 py-2">
              {listData.slice(0, 5).map((personData) => {
                return (
                  <PersonAvatarCard
                    key={personData.id}
                    id={personData.id}
                    relation={personData.relation}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

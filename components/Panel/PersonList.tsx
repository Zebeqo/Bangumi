"use client";

import { ListHeader } from "@/components/Panel/ListHeader";
import { useSubjectPersonsData } from "@/hooks/use-person";
import { PersonAvatarCard } from "@/components/Panel/PersonAvatarCard";
import { personRelationEnum, personRelationScheme } from "@/lib/person";

export function PersonList({ subject_id }: { subject_id: number }) {
  const { data: subjectPersonsData } = useSubjectPersonsData(subject_id);

  const sortedListData = subjectPersonsData?.sort((a, b) => {
    const personRelationA = personRelationScheme.parse(
      // @ts-expect-error zod will catch it
      personRelationEnum[a.relation]
    );
    const personRelationB = personRelationScheme.parse(
      // @ts-expect-error zod will catch it
      personRelationEnum[b.relation]
    );

    return personRelationB - personRelationA;
  });

  return (
    <>
      {sortedListData?.length ? (
        <div className="flex flex-col space-y-2 p-2">
          <ListHeader title={"制作人员"} onClickAction={() => null} />
          <div className="grid grid-cols-5 gap-4 px-8 py-2">
            {sortedListData.slice(0, 5).map((personData) => {
              return (
                <PersonAvatarCard
                  key={personData.id}
                  id={personData.id}
                  relation={personData.relation}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
}
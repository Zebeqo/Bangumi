"use client";

import { ListHeader } from "@/ui/Panel/ListHeader";
import { useSubjectPersonsData } from "@/hooks/use-person";
import { PersonAvatarCard } from "@/components/Panel/PersonList/PersonAvatarCard";
import { personRelationEnum, personRelationScheme } from "@/lib/person";
import { useReducerAtom } from "jotai/react/utils";
import { panelHistoryAtom, panelReducer } from "@/lib/panel";

export function PersonList({
  subject_id,
  length,
}: {
  subject_id: number;
  length?: number;
}) {
  const [, dispatch] = useReducerAtom(panelHistoryAtom, panelReducer);
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
      {subjectPersonsData && sortedListData?.length ? (
        <div className="flex flex-col space-y-2 p-2">
          <ListHeader
            title={"制作人员"}
            showAction={length ? subjectPersonsData.length > length : false}
            onClickAction={() =>
              dispatch({
                type: "push",
                value: { target_id: subject_id, type: "personList" },
              })
            }
          />
          <div className="grid grid-cols-5 gap-4 px-8 py-2">
            {length
              ? sortedListData.slice(0, length).map((personData) => {
                  return (
                    <PersonAvatarCard
                      key={personData.id}
                      id={personData.id}
                      relation={personData.relation}
                    />
                  );
                })
              : sortedListData.map((personData) => {
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
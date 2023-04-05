"use client";

import { ListHeader } from "@/components/Panel/PanelList/ListHeader";
import { useSubjectPersonsData } from "@/hooks/use-person";
import { PersonAvatarCard } from "@/components/AvatarCard/PersonAvatarCard";
import {
  personRelationRankEnum,
  personRelationRankScheme,
} from "@/lib/api/person";
import { useReducerAtom } from "jotai/utils";
import { panelHistoryAtom, panelReducer } from "@/lib/panel";
import { Suspense } from "react";
import { AvatarCardSkeleton } from "@/components/Skeleton/AvatarCardSkeleton";
import { ListSkeletonWrapper } from "@/components/Skeleton/ListSkeletonWrapper";

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
    const personRelationA = personRelationRankScheme.parse(
      // @ts-expect-error zod will catch it
      personRelationRankEnum[a.relation]
    );
    const personRelationB = personRelationRankScheme.parse(
      // @ts-expect-error zod will catch it
      personRelationRankEnum[b.relation]
    );

    return personRelationB - personRelationA;
  });

  return (
    <Suspense
      fallback={
        <ListSkeletonWrapper>
          <div className="grid grid-cols-5 gap-4 px-8 py-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <AvatarCardSkeleton key={i} />
            ))}
          </div>
        </ListSkeletonWrapper>
      }
    >
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
    </Suspense>
  );
}

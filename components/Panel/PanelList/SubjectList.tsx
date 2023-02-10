"use client";

import { ListHeader } from "@/components/Panel/PanelList/ListHeader";
import { useSubjectRelationsData } from "@/hooks/use-relation";
import { subjectRelationEnum, subjectRelationScheme } from "@/lib/api/relation";
import { RelationSubjectAvatarCard } from "@/components/AvatarCard/RelationSubjectAvatarCard";
import { useReducerAtom } from "jotai/utils";
import { panelHistoryAtom, panelReducer } from "@/lib/panel";
import { panelScrollToTop } from "@/lib/utils";
import { Suspense } from "react";
import { RelationSubjectSkeleton } from "@/components/Skeleton/RelationSubjectSkeleton";
import { ListSkeletonWrapper } from "@/components/Skeleton/ListSkeletonWrapper";

export function SubjectList({
  subject_id,
  length,
}: {
  subject_id: number;
  length?: number;
}) {
  const [, dispatch] = useReducerAtom(panelHistoryAtom, panelReducer);
  const { data: subjectRelationsData } = useSubjectRelationsData(subject_id);

  const sortedListData = subjectRelationsData?.sort((a, b) => {
    const subjectRelationA = subjectRelationScheme.parse(
      // @ts-expect-error zod will catch it
      subjectRelationEnum[a.relation]
    );
    const subjectRelationB = subjectRelationScheme.parse(
      // @ts-expect-error zod will catch it
      subjectRelationEnum[b.relation]
    );

    return subjectRelationB - subjectRelationA;
  });

  return (
    <Suspense
      fallback={
        <ListSkeletonWrapper className="h-12">
          <div className="grid grid-cols-4 gap-4 px-8 py-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <RelationSubjectSkeleton key={i} />
            ))}
          </div>
        </ListSkeletonWrapper>
      }
    >
      {subjectRelationsData && sortedListData?.length ? (
        <div className="flex flex-col space-y-2 p-2">
          <ListHeader
            title={"相关条目"}
            showAction={length ? subjectRelationsData.length > length : false}
            onClickAction={() =>
              dispatch({
                type: "push",
                value: { target_id: subject_id, type: "subjectList" },
              })
            }
          />
          <div className="grid grid-cols-4 gap-4 px-8 py-2">
            {length
              ? sortedListData.slice(0, length).map((subjectData) => {
                  return (
                    <RelationSubjectAvatarCard
                      key={subjectData.id}
                      name={subjectData.name}
                      name_cn={subjectData.name_cn}
                      relation={subjectData.relation}
                      imageURL={subjectData.images.common}
                      onClick={() => {
                        dispatch({
                          type: "push",
                          value: { target_id: subjectData.id, type: "subject" },
                        });
                        panelScrollToTop();
                      }}
                    />
                  );
                })
              : sortedListData.map((subjectData) => {
                  return (
                    <RelationSubjectAvatarCard
                      key={subjectData.id}
                      name={subjectData.name}
                      name_cn={subjectData.name_cn}
                      relation={subjectData.relation}
                      imageURL={subjectData.images.common}
                      onClick={() => {
                        dispatch({
                          type: "push",
                          value: { target_id: subjectData.id, type: "subject" },
                        });
                        panelScrollToTop();
                      }}
                    />
                  );
                })}
          </div>
        </div>
      ) : null}
    </Suspense>
  );
}

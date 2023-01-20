"use client";

import { ListHeader } from "@/ui/Panel/ListHeader";
import { useSubjectRelationsData } from "@/hooks/use-relation";
import { subjectRelationEnum, subjectRelationScheme } from "@/lib/relation";
import { RelationSubjectAvatarCard } from "@/components/Panel/RelationSubjectList/RelationSubjectAvatarCard";
import { useReducerAtom } from "jotai/react/utils";
import { panelHistoryAtom, panelReducer } from "@/lib/panel";

export function RelationSubjectList({
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
    <>
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
                        document
                          .querySelector("#panel-overlay")
                          ?.scrollTo({ top: 0, behavior: "smooth" });
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
                        document
                          .querySelector("#panel-overlay")
                          ?.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    />
                  );
                })}
          </div>
        </div>
      ) : null}
    </>
  );
}

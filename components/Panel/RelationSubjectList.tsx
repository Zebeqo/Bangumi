"use client";

import { ListHeader } from "@/components/Panel/ListHeader";
import { useSubjectRelationsData } from "@/hooks/use_relation";
import { subjectRelationEnum, subjectRelationScheme } from "@/lib/relation";
import { RelationSubjectAvatarCard } from "@/components/Panel/RelationSubjectAvatarCard";

export function RelationSubjectList({ subject_id }: { subject_id: number }) {
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
      <div className="flex flex-col space-y-2 p-2">
        {sortedListData && (
          <>
            <ListHeader title={"相关条目"} />
            <div className="grid grid-cols-4 gap-4 px-8 py-2">
              {sortedListData.slice(0, 8).map((subjectData) => {
                return (
                  <RelationSubjectAvatarCard
                    key={subjectData.id}
                    name={subjectData.name}
                    name_cn={subjectData.name_cn}
                    relation={subjectData.relation}
                    imageURL={subjectData.images.common}
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

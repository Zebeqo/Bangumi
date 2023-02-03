"use client";

import { PanelNav } from "@/components/Panel/PanelNav";
import { useSubjectData } from "@/hooks/use-subject";
import { EPListFull } from "@/components/Panel/EPList/EPListFull";
import { Suspense } from "react";
import { EPItemSkeleton } from "@/components/Skeleton/EPItemSkeleton";
import { ListSkeletonWrapper } from "@/components/Skeleton/ListSkeletonWrapper";

export function EPListContent({ subject_id }: { subject_id: number }) {
  const { data: subjectData } = useSubjectData(subject_id);
  return (
    <>
      <PanelNav
        title={{ name: subjectData?.name, name_cn: subjectData?.name_cn }}
      />
      <div className="px-8">
        <Suspense
          fallback={
            <ListSkeletonWrapper>
              <div className="flex flex-col space-y-2 py-2">
                {Array.from({ length: 10 }).map((_, i) => (
                  <EPItemSkeleton key={i} />
                ))}
              </div>
            </ListSkeletonWrapper>
          }
        >
          <EPListFull subject_id={subject_id} />
        </Suspense>
      </div>
    </>
  );
}

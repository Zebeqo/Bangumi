"use client";

import { PanelNav } from "@/components/Panel/PanelNav";
import { useSubjectData } from "@/hooks/use-subject";
import { EPListFull } from "@/components/Panel/EPList/EPListFull";
import { Suspense } from "react";
import { EPItemSkeleton } from "@/components/Skeleton/EPItemSkeleton";

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
            <div className="flex flex-col space-y-2 p-2">
              <div className="h-[60px] w-full" />
              <div className="flex flex-col space-y-2 py-2">
                {Array.from({ length: 10 }).map((_, i) => (
                  <EPItemSkeleton key={i} />
                ))}
              </div>
            </div>
          }
        >
          <EPListFull subject_id={subject_id} />
        </Suspense>
      </div>
    </>
  );
}

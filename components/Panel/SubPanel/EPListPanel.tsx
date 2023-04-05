"use client";

import { useSubjectData } from "@/hooks/use-subject";
import { EPListFull } from "@/components/Panel/PanelList/EPListFull";
import { Suspense } from "react";
import { EPItemSkeleton } from "@/components/Skeleton/EPItemSkeleton";
import { ListSkeletonWrapper } from "@/components/Skeleton/ListSkeletonWrapper";
import {
  PanelContent,
  PanelNav,
  PanelNavSubTitle,
  PanelNavTitle,
  PanelNavTitleGroup,
} from "@/ui/components/Panel";

export function EPListPanel({ subject_id }: { subject_id: number }) {
  const { data: subjectData } = useSubjectData(subject_id);
  return (
    <>
      {subjectData && (
        <>
          <PanelNav>
            <PanelNavTitleGroup>
              <PanelNavTitle>
                {subjectData.name_cn || subjectData.name}
              </PanelNavTitle>
              <PanelNavSubTitle>{subjectData.name}</PanelNavSubTitle>
            </PanelNavTitleGroup>
          </PanelNav>
          <PanelContent>
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
          </PanelContent>
        </>
      )}
    </>
  );
}

import { AvatarCardSkeleton } from "@/components/Skeleton/AvatarCardSkeleton";
import { EPItemSkeleton } from "@/components/Skeleton/EPItemSkeleton";
import { RelationSubjectSkeleton } from "@/components/Skeleton/RelationSubjectSkeleton";
import { ListSkeletonWrapper } from "@/components/Skeleton/ListSkeletonWrapper";
import { SubjectContentSkeleton } from "@/components/Skeleton/SubjectContentSkeleton";
import { PanelNavSkeleton } from "@/components/Skeleton/PanelNavSkeleton";

export function SubjectPanelSkeleton() {
  return (
    <div className="w-[1040.62px]">
      {/*PanelNav.Skeleton*/}
      <PanelNavSkeleton />
      <div className="flex flex-col space-y-2 px-8">
        {/*SubjectContent.Info*/}
        <SubjectContentSkeleton />
        {/*SubjectContent.CharacterList*/}
        <ListSkeletonWrapper>
          <div className="grid grid-cols-5 gap-4 px-8 py-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <AvatarCardSkeleton key={i} />
            ))}
          </div>
        </ListSkeletonWrapper>
        {/*SubjectContent.EPListDynamic*/}
        <ListSkeletonWrapper>
          <div className="flex flex-col space-y-2 py-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <EPItemSkeleton key={i} />
            ))}
          </div>
        </ListSkeletonWrapper>
        {/*SubjectContent.PersonList*/}
        <ListSkeletonWrapper>
          <div className="grid grid-cols-5 gap-4 px-8 py-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <AvatarCardSkeleton key={i} />
            ))}
          </div>
        </ListSkeletonWrapper>
        {/*SubjectContent.SubjectList*/}
        <ListSkeletonWrapper className="h-12">
          <div className="grid grid-cols-4 gap-4 px-8 py-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <RelationSubjectSkeleton key={i} />
            ))}
          </div>
        </ListSkeletonWrapper>
      </div>
    </div>
  );
}

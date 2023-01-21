import { AvatarCardSkeleton } from "@/components/AvatarCardSkeleton";
import { EPItemSkeleton } from "@/components/Panel/EPList/EPItemSkeleton";
import { RelationSubjectSkeleton } from "@/components/Panel/RelationSubjectList/RelationSubjectSkeleton";

export function SubjectContentSkeleton() {
  return (
    <div className="w-[1040.62px]">
      {/*PanelNav.Skeleton*/}
      <div className="flex h-[76px] animate-pulse items-center px-8 py-4">
        <div className="h-8 w-[360px] rounded-full bg-neutral-6" />
      </div>
      <div className="flex flex-col space-y-2 px-8">
        {/*SubjectContent.Info*/}
        <div className="flex min-h-[384px] animate-pulse space-x-4">
          {/*SubjectContent.InfoImage*/}
          {/*ImageSkeleton*/}
          <div className="flex flex-shrink-0 items-center justify-center">
            <div className={"h-[402px] w-[288px] rounded-xl bg-neutral-6"} />
          </div>

          {/*SubjectContent.InfoContent*/}
          <div className="flex h-[420px] w-full flex-col space-y-2">
            {/*SubjectContent.InfoContentHeader*/}
            <div className="flex space-x-2 p-2">
              {/*SubjectContent.Rating*/}
              {/*RatingSkeleton*/}
              <div className="h-20 w-20 flex-shrink-0 rounded-full bg-neutral-6" />
              {/*SubjectContent.InfoContentDivider*/}
              <div className="h-full w-0 bg-neutral-6"></div>
              {/*SubjectContent.TagGroup*/}
              <div className="flex h-[192px] w-full flex-col justify-between">
                <div className="h-8 w-5/6 rounded-full bg-neutral-6" />
                <div className="h-8 w-full rounded-full bg-neutral-6" />
                <div className="h-8 w-4/5 rounded-full bg-neutral-6" />
                <div className="h-8 w-4/6 rounded-full bg-neutral-6" />
              </div>
            </div>
            {/*SubjectContent.InfoContentBody*/}
            <div className="flex h-full flex-col justify-between px-4 py-2 pr-12 ">
              <div className="h-8 w-5/6 rounded-full bg-neutral-6" />
              <div className="h-8 w-full rounded-full bg-neutral-6" />
              <div className="h-8 w-4/5 rounded-full bg-neutral-6" />
              <div className="h-8 w-4/6 rounded-full bg-neutral-6" />
              <div className="h-8 w-1/3 rounded-full bg-neutral-6" />
            </div>
          </div>
        </div>
        {/*SubjectContent.CharacterList*/}
        <div className="flex animate-pulse flex-col space-y-2 p-2">
          <div className="h-[60px] w-full" />
          <div className="grid grid-cols-5 gap-4 px-8 py-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <AvatarCardSkeleton key={i} />
            ))}
          </div>
        </div>
        {/*SubjectContent.EPListDynamic*/}
        <div className="flex animate-pulse flex-col space-y-2 p-2">
          <div className="h-[60px] w-full" />
          <div className="flex flex-col space-y-2 py-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <EPItemSkeleton key={i} />
            ))}
          </div>
        </div>
        {/*SubjectContent.PersonList*/}
        <div className="flex animate-pulse flex-col space-y-2 p-2">
          <div className="h-[60px] w-full" />
          <div className="grid grid-cols-5 gap-4 px-8 py-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <AvatarCardSkeleton key={i} />
            ))}
          </div>
        </div>
        {/*SubjectContent.SubjectList*/}
        <div className="flex animate-pulse flex-col space-y-2 p-2">
          <div className="h-12 w-full" />
          <div className="grid grid-cols-4 gap-4 px-8 py-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <RelationSubjectSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

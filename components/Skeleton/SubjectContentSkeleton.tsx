export function SubjectContentSkeleton() {
  return (
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
  );
}

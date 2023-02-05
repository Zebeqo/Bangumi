export function AvatarCardSkeleton() {
  return (
    <div className="h-[228px] w-[166.521ox] animate-pulse rounded-md bg-neutral-3">
      <div className="flex flex-col space-y-4 px-4 py-6">
        <div className="relative h-32 w-32 self-center overflow-hidden rounded-full bg-neutral-6" />
        <div className="flex flex-col space-y-1">
          <div className="h-4 w-20 rounded-full bg-neutral-6" />
          <div className="h-4 w-16 rounded-full bg-neutral-6" />
        </div>
      </div>
    </div>
  );
}

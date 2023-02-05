export function CardSkeleton() {
  return (
    <div className="flex h-[201.59px] w-[30rem] animate-pulse">
      <div className="aspect-[75/106] h-full rounded-2xl rounded-2xl bg-neutral-6" />
      <div className="flex w-full flex-col px-2 py-4">
        <div className="h-6 w-52 rounded-full bg-neutral-6 py-2" />
        <div className="mt-2 flex h-6 w-full items-center justify-between py-2">
          <div className="h-4 w-20 rounded-full bg-neutral-6" />
          <div className="h-4 w-20 rounded-full bg-neutral-6" />
          <div className="h-4 w-20 rounded-full bg-neutral-6" />
        </div>
        <div className="mt-1 flex h-16 w-full flex-col justify-center space-y-3">
          <div className="h-4 w-full rounded-full bg-neutral-6" />
          <div className="h-4 w-full rounded-full bg-neutral-6" />
        </div>
        <div className="flex flex-grow flex-col justify-center space-y-2">
          <div className="h-4 w-44 rounded-full bg-neutral-6" />
          <div className="h-4 w-32 rounded-full bg-neutral-6" />
        </div>
      </div>
    </div>
  );
}

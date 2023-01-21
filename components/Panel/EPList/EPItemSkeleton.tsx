export function EPItemSkeleton() {
  return (
    <div className="flex h-16 items-center justify-between px-2">
      <div className="flex items-center space-x-4 p-2">
        <div className="w-6" />
        <div className="flex flex-col space-y-1">
          <div className="flex items-center">
            <span className="h-6 w-[386px] rounded-full bg-neutral-6" />
          </div>
          <div className="flex space-x-2">
            <div className="flex justify-center space-x-1">
              <span className="h-4 w-20 rounded-full bg-neutral-6" />
            </div>
            <div className="flex justify-center space-x-1">
              <span className="h-4 w-20 rounded-full bg-neutral-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-4 w-16 rounded-full bg-neutral-6" />
    </div>
  );
}

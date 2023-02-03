import { cn } from "@/lib/utils";

export const ListSkeletonWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col space-y-2 p-2">
    <div className={cn("h-[60px] w-full", className)} />
    {children}
  </div>
);

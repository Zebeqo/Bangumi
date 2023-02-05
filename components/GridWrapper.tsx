import { cn } from "@/lib/utils";

export function GridWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mt-8 grid grid-cols-1 justify-items-center gap-12 px-12 xl:grid-cols-2 min-[1800px]:grid-cols-3 min-[2400px]:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  );
}

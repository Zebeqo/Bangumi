import { cn } from "@/lib/utils";
import { Button } from "@/ui/Button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useInView } from "react-intersection-observer";

export function PanelNav({
  title,
}: {
  title: { name?: string; name_cn?: string };
}) {
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "-1px",
  });
  return (
    <>
      {/*SubjectContent.Nav*/}
      <div
        className={cn(
          "sticky top-0 z-50 flex justify-between py-4 px-8",
          !inView && "border-b border-neutral-6 bg-neutral-1"
        )}
        ref={ref}
      >
        {/*SubjectContent.NavLeft*/}
        <div className="flex items-center space-x-8">
          {/*SubjectContent.NavButtonGroup*/}
          <div className="flex space-x-2">
            <Button
              colorType="neutral"
              type="outline"
              icon={<ChevronLeftIcon />}
            />
            <Button
              colorType="neutral"
              type="outline"
              icon={<ChevronRightIcon />}
            />
          </div>
          {/*SubjectContent.TitleGroup*/}
          <div className="flex flex-col">
            <DialogPrimitive.Title
              data-testid="title"
              className="text-lg font-bold text-neutral-12"
            >
              {title.name_cn}
            </DialogPrimitive.Title>
            <span className="text-xs font-medium text-neutral-11">
              {title.name}
            </span>
          </div>
        </div>
        {/*SubjectContent.NavRight*/}
        <div>
          <DialogPrimitive.Close>
            <Button
              colorType="neutral"
              type={"ghost"}
              icon={<XMarkIcon />}
              aria-label="Close"
            />
          </DialogPrimitive.Close>
        </div>
      </div>
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogContentHeader,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/ui/components/Dialog";

export function CardComment({ comment }: { comment: string }) {
  const [isClamped, setIsClamped] = useState(false);
  const commentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (commentRef.current) {
      setIsClamped(
        commentRef.current.scrollHeight > commentRef.current.clientHeight + 1
      );
    }
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          ref={commentRef}
          className={cn(
            "whitespace-pre-wrap text-xs font-medium italic text-accent-12 line-clamp-1",
            isClamped && "hover:cursor-pointer hover:not-italic"
          )}
        >
          “ {comment} ”
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogContentHeader>
          <DialogTitle>评论</DialogTitle>
        </DialogContentHeader>
        <DialogDescription>{comment}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

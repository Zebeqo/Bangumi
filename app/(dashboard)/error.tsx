"use client"; // Error components must be Client components

import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Error({ error }: { error: Error; reset: () => void }) {
  const toast = useToast();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    toast({
      type: "error",
      title: "出现了意外错误！",
      description: "请尝试刷新或更换其他页面",
      action: {
        label: "反馈信息",
        onClick: () => {
          window.open("https://github.com/Zebeqo/Bangumi/issues/new", "_blank");
        },
      },
    });
  }, [error, toast]);

  return null;
}

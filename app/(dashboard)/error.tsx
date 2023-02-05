"use client"; // Error components must be Client components

import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const openToast = useToast();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    openToast({
      type: "error",
      title: "该页API 暂不能使用！",
      description: "请尝试更换其他页面",
      action: {
        label: "重试",
        onClick: reset,
      },
    });
  }, [error]);

  return null;
}

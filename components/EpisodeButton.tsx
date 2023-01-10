import { Button } from "@/ui/Button";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

export function EpisodeButton({
  subject_id,
  eps,
  ep_status,
}: {
  subject_id: number;
  eps: number;
  ep_status: number;
}) {
  const [value, setValue] = useState<number>(ep_status);
  const inputRef = useRef<HTMLInputElement>(null);
  const openToast = useToast();

  const episodeScheme = z
    .number()
    .min(0)
    .max(eps || 2000)
    .int();

  return (
    <Button
      colorType={"neutral"}
      type={"outline"}
      className="bg-neutral-1 hover:bg-neutral-1 active:bg-neutral-1"
      icon={
        <PlusCircleIcon
          onClick={(e) => {
            e.stopPropagation();
            const newValue = value + 1;
            if (inputRef.current) {
              inputRef.current.value = (value + 1).toString();
            }
            const epResult = episodeScheme.safeParse(newValue);

            if (epResult.success) {
              setValue(newValue);
              if (inputRef.current) {
                inputRef.current.value = (value + 1).toString();
              }
              openToast({
                type: "success",
                title: "更新成功！",
                description: `进度已更新至第 ${newValue} 集。`,
                action: {
                  label: "跳转至评论页",
                  onClick: () => {
                    return;
                  },
                },
              });
            } else {
              if (inputRef.current) {
                inputRef.current.value = value.toString();
              }
              openToast({
                type: "error",
                title: "更新失败！",
                description: `进度更新失败，请输入 0-${eps || "max"} 的整数。`,
              });
            }
          }}
        />
      }
      onClick={() => {
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.select();
        }
      }}
      label={
        <span>
          进度:{" "}
          <input
            type={"number"}
            defaultValue={ep_status}
            ref={inputRef}
            onBlur={(e) => {
              if (Number(e.target.value) === value) {
                return;
              }
              const epResult = episodeScheme.safeParse(Number(e.target.value));

              if (epResult.success) {
                setValue(Number(e.target.value));
                openToast({
                  type: "success",
                  title: "更新成功！",
                  description: `进度已更新至第 ${e.target.value} 集。`,
                  action: {
                    label: "跳转至评论页",
                    onClick: () => {
                      return;
                    },
                  },
                });
              } else {
                e.target.value = value.toString();
                openToast({
                  type: "error",
                  title: "更新失败！",
                  description: `进度更新失败，请输入 0-${
                    eps || "max"
                  } 的整数。`,
                });
              }
            }}
            className="w-8 appearance-none bg-neutral-1 text-center outline-none selection:bg-neutral-9 selection:text-neutral-1 hover:pointer-events-auto"
          />
          / 13
        </span>
      }
      revert
    />
  );
}

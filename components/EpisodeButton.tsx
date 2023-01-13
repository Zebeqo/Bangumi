"use client";

import { Button } from "@/ui/Button";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useEpisodeMutation } from "@/hooks/use-episode";

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
  const [prevValue, setPrevValue] = useState<number>(ep_status);
  const inputRef = useRef<HTMLInputElement>(null);
  const openToast = useToast();
  const mutateEpisode = useEpisodeMutation();

  useEffect(() => {
    setValue(ep_status);
    setPrevValue(ep_status);
  }, [ep_status]);

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
            const epResult = episodeScheme.safeParse(newValue);

            if (epResult.success) {
              setValue(newValue);
              setPrevValue(value);
              mutateEpisode.mutate({
                subject_id,
                currentEp: ep_status,
                targetEp: newValue,
              });
            } else {
              openToast({
                type: "error",
                title: "修改收藏进度失败！",
                description: `请输入 0-${eps || "max"} 之间的整数。`,
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
            min={0}
            max={eps || undefined}
            onChange={(e) => {
              setValue(Number(e.target.value));
            }}
            value={value}
            ref={inputRef}
            onKeyDown={(e) => {
              e.stopPropagation();
              if (e.key === "Enter") {
                inputRef.current?.blur();
              } else if (e.key === "Escape") {
                inputRef.current?.blur();
              }
            }}
            onBlur={() => {
              if (value === prevValue) {
                return;
              }
              const epResult = episodeScheme.safeParse(value);

              if (epResult.success) {
                if (value - prevValue > 100) {
                  openToast({
                    type: "error",
                    title: "修改收藏进度失败！",
                    description: "单次最多更新 100 集。建议前往主站更新",
                    action: {
                      label: "前往主站",
                      onClick: () => {
                        window.open(
                          `https://bgm.tv/subject/${subject_id}`,
                          "_blank"
                        );
                      },
                    },
                  });
                  setValue(prevValue);
                  return;
                }

                setPrevValue(value);
                mutateEpisode.mutate({
                  subject_id,
                  currentEp: ep_status,
                  targetEp: value,
                });
              } else {
                setValue(prevValue);
                openToast({
                  type: "error",
                  title: "修改收藏进度失败！",
                  description: `请输入 0-${eps || "max"} 之间的整数。`,
                });
              }
            }}
            className="w-8 appearance-none bg-neutral-1 text-center outline-none selection:bg-neutral-9 selection:text-neutral-1 hover:pointer-events-auto"
          />
          / {eps}
        </span>
      }
      revert
    />
  );
}

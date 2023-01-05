"use client";

import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Fragment, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai/react";
import { panelAtom } from "@/lib/panel";
import { Button } from "@/ui/Button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Badges } from "@/ui/Badget";
import { subjectScheme } from "@/lib/subject";
import { useIsFetching, useQuery } from "@tanstack/react-query";
import { ChevronDownIcon, InboxArrowDownIcon } from "@heroicons/react/20/solid";
import { atom } from "jotai/vanilla";
import { collectionScheme, collectionTypeMap } from "@/lib/collection";
import { useSession } from "next-auth/react";
import { errorScheme } from "@/lib/error";
import { useErrorToast } from "@/hooks/useErrorToast";

export const showFullInfoAtom = atom(false);
export function Panel() {
  const [panel, setPanel] = useAtom(panelAtom);
  const [showFullInfo, setShowFullInfo] = useAtom(showFullInfoAtom);
  const [isClamped, setIsClamped] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const isFetching = useIsFetching();
  const { data: session } = useSession();
  const openErrorToast = useErrorToast();

  const { data: subjectData } = useQuery({
    queryKey: ["subject", panel?.id],
    queryFn: async () => {
      if (!panel?.id) {
        return null;
      }
      try {
        const response = await fetch(
          `https://api.bgm.tv/v0/subjects/${panel.id}`
        );
        return subjectScheme.parse(await response.json());
      } catch (e) {
        if (e instanceof Error) {
          const message = e.message;
          openErrorToast("获取条目信息失败", message);
        }
      }
    },
    keepPreviousData: true,
  });

  const { data: collectionData } = useQuery({
    queryKey: ["collection", panel?.id, session?.user.id],
    queryFn: async () => {
      if (!panel?.id || !session?.user.id) {
        return null;
      }
      try {
        const response = await fetch(
          `https://api.bgm.tv/v0/users/${session.user.id}/collections/${panel.id}`
        );
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data = await response.json();
        const collectionResult = collectionScheme.safeParse(data);
        if (!collectionResult.success) {
          const errorResult = errorScheme.safeParse(data);
          if (errorResult.success) {
            return null;
          } else {
            throw new Error(
              `FROM ERROR:\n${errorResult.error.message}\n\nFROM COLLECTION:\n${collectionResult.error.message}`
            );
          }
        } else {
          return collectionResult.data;
        }
      } catch (e) {
        if (e instanceof Error) {
          const message = e.message;
          openErrorToast("获取收藏信息失败", message);
        }
      }
    },
  });

  return (
    <DialogPrimitive.Root
      open={panel !== null}
      onOpenChange={(open) => {
        if (!open) {
          setPanel(null);
          setIsClamped(false);
        }
      }}
    >
      <DialogPrimitive.Portal forceMount>
        <Transition.Root show={panel !== null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPrimitive.Overlay
              forceMount
              className="fixed inset-0 z-20 bg-black/50"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {subjectData && !isFetching ? (
              <DialogPrimitive.Content
                forceMount
                className="fixed top-[50%] left-[50%] z-40 flex w-[1040.62px] -translate-x-[50%] -translate-y-[50%] flex-col space-y-4 rounded-lg bg-neutral-1 px-8 py-6 shadow-lg outline-none"
              >
                {/*InfoPanel.Nav*/}
                <div className="flex justify-between p-2">
                  {/*InfoPanel.NavLeft*/}
                  <div className="flex items-center space-x-8">
                    {/*InfoPanel.NavButtonGroup*/}
                    <div className="flex space-x-2">
                      <Button
                        color="neutral"
                        type="outline"
                        icon={<ChevronLeftIcon />}
                      />
                      <Button
                        color="neutral"
                        type="outline"
                        icon={<ChevronRightIcon />}
                      />
                    </div>
                    {/*InfoPanel.TitleGroup*/}
                    <div className="flex flex-col">
                      <DialogPrimitive.Title className="text-lg font-bold text-neutral-12">
                        {subjectData.name_cn}
                      </DialogPrimitive.Title>
                      <span className="text-xs font-medium text-neutral-11">
                        {subjectData.name}
                      </span>
                    </div>
                  </div>
                  {/*InfoPanel.NavRight*/}
                  <div>
                    <DialogPrimitive.Close>
                      <Button
                        color="neutral"
                        type={"ghost"}
                        icon={<XMarkIcon />}
                      />
                    </DialogPrimitive.Close>
                  </div>
                </div>
                {/*InfoPanel.Info*/}
                <div className="flex min-h-[384px] space-x-4">
                  {/*InfoPanel.InfoImage*/}
                  <Image
                    src={subjectData.images.large}
                    className="min-h-[384px] flex-shrink-0 self-center overflow-hidden rounded-xl object-cover"
                    alt=""
                    width={288}
                    height={100}
                  />

                  {/*InfoPanel.InfoContent*/}
                  <div className="flex flex-col space-y-2">
                    {/*InfoPanel.InfoContentHeader*/}
                    <div className="flex space-x-2 p-2">
                      {/*InfoPanel.Rating*/}
                      <div className="flex flex-col items-center space-y-2 p-2">
                        <Button
                          color="accent"
                          type={"secondary"}
                          label="评分"
                        />
                        <span className="text-4xl font-bold text-accent-11">
                          {subjectData.rating.score}
                        </span>
                        <span className="text-xs text-neutral-11">
                          {subjectData.rating.total} 人评分
                        </span>
                      </div>
                      {/*InfoPanel.InfoContentDivider*/}
                      <div className="h-full w-px bg-neutral-6"></div>
                      {/*InfoPanel.TagGroup*/}
                      <div className="max-w-[564px] leading-loose">
                        {subjectData.tags.map(({ count, name }, index) => (
                          <Badges key={index} label={name} count={count} />
                        ))}
                      </div>
                    </div>
                    {/*InfoPanel.InfoContentBody*/}
                    <div className=" flex-grow whitespace-pre-wrap px-4 text-sm text-neutral-12  ">
                      <DialogPrimitive.Description
                        ref={descriptionRef}
                        onMouseEnter={() => {
                          if (descriptionRef.current) {
                            setIsClamped(
                              descriptionRef.current.scrollHeight >
                                descriptionRef.current.clientHeight
                            );
                          }
                        }}
                        onClick={() => {
                          isClamped && setShowFullInfo(true);
                        }}
                        className={cn(
                          "line-clamp-8",
                          showFullInfo
                            ? "line-clamp-none"
                            : isClamped &&
                                "hover:cursor-pointer hover:font-medium"
                        )}
                      >
                        {subjectData.summary}
                      </DialogPrimitive.Description>
                    </div>
                    {/*InfoPanel.InfoContentFooter*/}
                    <div className="flex space-x-2 p-2">
                      {collectionData?.type ? (
                        <Button
                          color={"accent"}
                          type={"outline"}
                          icon={<ChevronDownIcon />}
                          label={
                            collectionTypeMap[
                              collectionData.type as keyof typeof collectionTypeMap
                            ]
                          }
                          revert
                        />
                      ) : (
                        <Button
                          color={"neutral"}
                          type={"primary"}
                          icon={<InboxArrowDownIcon />}
                          label="收藏"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </DialogPrimitive.Content>
            ) : (
              <DialogPrimitive.Content
                forceMount
                className={cn(
                  "fixed z-50",
                  "w-full max-w-md rounded-lg",
                  "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
                  "border border-neutral-6 bg-neutral-1 outline-none",
                  "flex flex-col space-y-4 px-8 py-6"
                )}
              >
                is fetching
              </DialogPrimitive.Content>
            )}
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

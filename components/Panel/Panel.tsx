"use client";

import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Fragment, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useAtom, useAtomValue } from "jotai/react";
import { isOpenPanelAtom, panelAtom } from "@/lib/panel";
import { Button } from "@/ui/Button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { TagBadge } from "@/ui/TagBadge";
import {
  ChevronDownIcon,
  InboxArrowDownIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { atom } from "jotai/vanilla";
import { useSubjectData } from "@/hooks/use-subject";
import { useCollectionData } from "@/hooks/use-collection";
import { useToast } from "@/hooks/use-toast";
import { createIssueToast } from "@/lib/toast";
import { CollectionTypeSelect } from "@/components/Panel/InfoPanel/CollectionTypeSelect";
import { RatingSelect } from "@/components/Panel/InfoPanel/RatingSelect";
import { EpisodeButton as EpisodeButtonComponent } from "@/components/EpisodeButton";
import { signIn, useSession } from "next-auth/react";
import { MoreDropdownMenu } from "@/components/Panel/InfoPanel/MoreDropdownMenu";
import { AvatarCardList } from "@/components/Panel/AvatarCardList";
import { useInView } from "react-intersection-observer";
import { ListHeader } from "@/components/Panel/ListHeader";

export const showFullInfoAtom = atom(false);
export function Panel() {
  const panel = useAtomValue(panelAtom);
  const [showFullInfo, setShowFullInfo] = useAtom(showFullInfoAtom);
  const [isClamped, setIsClamped] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [isOpenPanel, setIsOpenPanel] = useAtom(isOpenPanelAtom);
  const { data: subjectData, isSuccess: isSubjectDataSuccess } = useSubjectData(
    panel?.subject_id
  );
  const { data: collectionData, isSuccess: isCollectionDataSuccess } =
    useCollectionData(panel?.subject_id);
  const openToast = useToast();
  const { data: session } = useSession();
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "-1px",
  });

  return (
    <DialogPrimitive.Root
      open={isOpenPanel}
      onOpenChange={(open) => {
        if (!open) {
          setIsOpenPanel(false);
          setIsClamped(false);
        }
      }}
    >
      <DialogPrimitive.Portal forceMount>
        <Transition.Root show={isOpenPanel}>
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
              className="fixed inset-0 z-40 grid place-items-center overflow-y-auto bg-blackA-9 pb-16"
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {subjectData &&
                isSubjectDataSuccess &&
                isCollectionDataSuccess ? (
                  <DialogPrimitive.Content
                    forceMount
                    className="z-40 mt-16 flex w-[1040.62px] flex-col space-y-4 rounded-lg bg-neutral-1 py-6 shadow-lg outline-none"
                    onPointerDownOutside={(e) => {
                      if (
                        e.detail.originalEvent.which === 2 ||
                        e.detail.originalEvent.button === 4
                      ) {
                        e.preventDefault();
                      }

                      // https://github.com/radix-ui/primitives/issues/1280#issuecomment-1198248523
                      const currentTarget = e.currentTarget as HTMLElement;

                      if (
                        e.detail.originalEvent.offsetX >
                        currentTarget.clientWidth
                      ) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {/*InfoPanel.Nav*/}
                    <div
                      className={cn(
                        "sticky top-0 z-50 flex justify-between p-2 px-8",
                        !inView && "border-b border-neutral-6 bg-neutral-1"
                      )}
                      ref={ref}
                    >
                      {/*InfoPanel.NavLeft*/}
                      <div className="flex items-center space-x-8">
                        {/*InfoPanel.NavButtonGroup*/}
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
                            colorType="neutral"
                            type={"ghost"}
                            icon={<XMarkIcon />}
                            aria-label="Close"
                          />
                        </DialogPrimitive.Close>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-4 px-8">
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
                                colorType="accent"
                                type={"secondary"}
                                label="评分"
                              />
                              <span className="text-4xl font-bold text-accent-11">
                                {subjectData.rating.score.toFixed(1)}
                              </span>
                              <span className="whitespace-nowrap text-xs text-neutral-11">
                                {subjectData.rating.total} 人评分
                              </span>
                            </div>
                            {/*InfoPanel.InfoContentDivider*/}
                            <div className="h-full w-px bg-neutral-6"></div>
                            {/*InfoPanel.TagGroup*/}
                            <div className="max-w-[564px] leading-loose">
                              {subjectData.tags.map(
                                ({ count, name }, index) => (
                                  <TagBadge
                                    key={index}
                                    label={name}
                                    count={count}
                                  />
                                )
                              )}
                            </div>
                          </div>
                          {/*InfoPanel.InfoContentBody*/}
                          <div className="flex-grow whitespace-pre-wrap px-4 text-sm text-neutral-12">
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
                            {collectionData ? (
                              <>
                                <CollectionTypeSelect
                                  subject_id={collectionData.subject_id}
                                />
                                <RatingSelect
                                  subject_id={collectionData.subject_id}
                                />
                                <EpisodeButtonComponent
                                  subject_id={collectionData.subject_id}
                                  eps={collectionData.subject.eps}
                                  ep_status={collectionData.ep_status}
                                />
                                <MoreDropdownMenu
                                  subject_id={collectionData.subject_id}
                                  hasCollectionData={true}
                                />
                              </>
                            ) : (
                              <>
                                <Button
                                  colorType={"neutral"}
                                  type={"primary"}
                                  icon={<InboxArrowDownIcon />}
                                  label="收藏"
                                  onClick={() => {
                                    if (session) {
                                      openToast(
                                        createIssueToast(42, "需要相关 api")
                                      );
                                    } else {
                                      void signIn("bangumi", {
                                        redirect: false,
                                      });
                                    }
                                  }}
                                />
                                <Button
                                  colorType={"neutral"}
                                  type={"outline"}
                                  icon={<ChevronDownIcon />}
                                  label={
                                    <span className="flex items-center space-x-1">
                                      <StarIcon className="h-5 w-5" />
                                      <span>评分</span>
                                    </span>
                                  }
                                  onClick={() => {
                                    if (session) {
                                      openToast(
                                        createIssueToast(42, "需要相关 api")
                                      );
                                    } else {
                                      void signIn("bangumi", {
                                        redirect: false,
                                      });
                                    }
                                  }}
                                  revert
                                />
                                <MoreDropdownMenu subject_id={subjectData.id} />
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      {/*InfoPanel.CharacterInfo*/}
                      <div className="flex flex-col space-y-2 p-2">
                        {/*InfoPanel.Header*/}
                        <ListHeader title={"角色"} />
                        {/*InfoPanel.CharacterCards*/}
                        <AvatarCardList subject_id={subjectData.id} />
                        <div className="h-60"></div>
                      </div>
                      {/*InfoPanel.EPInfo*/}
                      <div className="flex flex-col space-y-2 p-2">
                        {/*InfoPanel.Header*/}
                        <ListHeader title={"剧集"} />
                        {/*InfoPanel.EPList*/}
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
                      "flex flex-col space-y-4 px-8 py-6 text-neutral-12"
                    )}
                  >
                    is fetching
                  </DialogPrimitive.Content>
                )}
              </Transition.Child>
            </DialogPrimitive.Overlay>
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

const Header = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-between px-6 py-2">
      <span className="text-3xl font-medium text-neutral-12">{title}</span>
      <span className="font-medium text-neutral-11">显示全部</span>
    </div>
  );
};

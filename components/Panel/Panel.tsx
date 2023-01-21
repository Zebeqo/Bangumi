"use client";

import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Fragment, Suspense } from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai/react";
import {
  currentPanelAtom,
  isOpenPanelAtom,
  panelHistoryAtom,
} from "@/lib/panel";
import { SubjectContent } from "@/components/Panel/SubjectContent";
import { CharacterListContent } from "@/components/Panel/CharacterListContent";
import { EPListContent } from "@/components/Panel/EPListContent";
import { PersonListContent } from "@/components/Panel/PersonListContent";
import { RelationSubjectList } from "@/components/Panel/RelationSubjectList/RelationSubjectList";
import { SubjectContentSkeleton } from "@/components/SubjectContentSkeleton";

export function Panel() {
  const panel = useAtomValue(currentPanelAtom);
  const setPanelHistory = useSetAtom(panelHistoryAtom);
  const [isOpenPanel, setIsOpenPanel] = useAtom(isOpenPanelAtom);

  // jotai-devtools 暂时用不了，拿 useEffect 凑合一下 debug
  // const panelHistory = useAtomValue(panelHistoryAtom);
  // useEffect(() => {
  //   console.log("panelHistory:", panelHistory);
  // }, [panelHistory]);

  return (
    <DialogPrimitive.Root
      open={isOpenPanel}
      onOpenChange={(open) => {
        if (!open) {
          setIsOpenPanel(false);
          setTimeout(() => {
            setPanelHistory({ history: [], index: -1 });
          }, 300);
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
              id="panel-overlay"
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
                <DialogPrimitive.Content
                  forceMount
                  className="z-40 mt-16 flex w-[1040.62px] flex-col rounded-lg bg-neutral-1 pt-4 pb-6 shadow-lg outline-none"
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
                      e.detail.originalEvent.offsetX > currentTarget.clientWidth
                    ) {
                      e.preventDefault();
                    }
                  }}
                >
                  {panel?.type === "subject" ? (
                    <Suspense fallback={<SubjectContentSkeleton />}>
                      <SubjectContent subject_id={panel.target_id} />
                    </Suspense>
                  ) : panel?.type === "characterList" ? (
                    <CharacterListContent subject_id={panel.target_id} />
                  ) : panel?.type === "episodeList" ? (
                    <EPListContent subject_id={panel.target_id} />
                  ) : panel?.type === "personList" ? (
                    <PersonListContent subject_id={panel.target_id} />
                  ) : panel?.type === "subjectList" ? (
                    <RelationSubjectList subject_id={panel.target_id} />
                  ) : null}
                </DialogPrimitive.Content>
              </Transition.Child>
            </DialogPrimitive.Overlay>
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

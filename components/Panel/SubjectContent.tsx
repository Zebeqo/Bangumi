import Image from "next/image";
import { TagBadge } from "@/ui/TagBadge";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { CollectionTypeSelect } from "@/components/Select/CollectionTypeSelect";
import { RatingSelect } from "@/components/Select/RatingSelect";
import { EpisodeButton as EpisodeButtonComponent } from "@/components/Button/EpisodeButton";
import { MoreDropdownMenu } from "@/components/DropdownMenu/MoreDropdownMenu";
import { Button } from "@/ui/Button";
import {
  ChevronDownIcon,
  InboxArrowDownIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { createIssueToast } from "@/lib/toast";
import { signIn, useSession } from "next-auth/react";
import { CharacterList } from "@/components/Panel/CharacterList/CharacterList";
import { EPListDynamic } from "@/components/Panel/EPList/EPListDynamic";
import { PersonList } from "@/components/Panel/PersonList/PersonList";
import { RelationSubjectList } from "@/components/Panel/RelationSubjectList/RelationSubjectList";
import { Suspense, useRef, useState } from "react";
import { useCollectionData } from "@/hooks/use-collection";
import { useToast } from "@/hooks/use-toast";
import { useSubjectData } from "@/hooks/use-subject";
import { PanelNav } from "@/components/Panel/PanelNav";

export function SubjectContent({ subject_id }: { subject_id: number }) {
  const [showFullInfo, setShowFullInfo] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const { data: collectionData, isSuccess: isCollectionDataSuccess } =
    useCollectionData(subject_id);
  const openToast = useToast();
  const { data: session } = useSession();
  const { data: subjectData, isSuccess: isSubjectDataSuccess } =
    useSubjectData(subject_id);

  return (
    <>
      {subjectData && isSubjectDataSuccess && isCollectionDataSuccess && (
        <>
          <PanelNav
            title={{ name: subjectData.name, name_cn: subjectData.name_cn }}
          />
          <div className="flex flex-col space-y-2 px-8">
            {/*SubjectContent.Info*/}
            <Suspense
              fallback={
                <div className="flex min-h-[384px] animate-pulse space-x-4">
                  {/*SubjectContent.InfoImage*/}
                  {/*ImageSkeleton*/}
                  <div className="flex flex-shrink-0 items-center justify-center">
                    <div
                      className={"h-[402px] w-[288px] rounded-xl bg-neutral-6"}
                    />
                  </div>

                  {/*SubjectContent.InfoContent*/}
                  <div className="flex h-[420px] w-full flex-col space-y-2">
                    {/*SubjectContent.InfoContentHeader*/}
                    <div className="flex space-x-2 p-2">
                      {/*SubjectContent.Rating*/}
                      {/*RatingSkeleton*/}
                      <div className="h-20 w-20 flex-shrink-0 rounded-full bg-neutral-6" />
                      {/*SubjectContent.InfoContentDivider*/}
                      <div className="h-full w-0 bg-neutral-6"></div>
                      {/*SubjectContent.TagGroup*/}
                      <div className="flex h-[192px] w-full flex-col justify-between">
                        <div className="h-8 w-5/6 rounded-full bg-neutral-6" />
                        <div className="h-8 w-full rounded-full bg-neutral-6" />
                        <div className="h-8 w-4/5 rounded-full bg-neutral-6" />
                        <div className="h-8 w-4/6 rounded-full bg-neutral-6" />
                      </div>
                    </div>
                    {/*SubjectContent.InfoContentBody*/}
                    <div className="flex h-full flex-col justify-between px-4 py-2 pr-12 ">
                      <div className="h-8 w-5/6 rounded-full bg-neutral-6" />
                      <div className="h-8 w-full rounded-full bg-neutral-6" />
                      <div className="h-8 w-4/5 rounded-full bg-neutral-6" />
                      <div className="h-8 w-4/6 rounded-full bg-neutral-6" />
                      <div className="h-8 w-1/3 rounded-full bg-neutral-6" />
                    </div>
                  </div>
                </div>
              }
            >
              <div className="flex min-h-[384px] space-x-4">
                {/*SubjectContent.InfoImage*/}
                <Image
                  src={subjectData.images.medium}
                  className="min-h-[384px] flex-shrink-0 self-center overflow-hidden rounded-xl object-cover"
                  alt=""
                  width={288}
                  height={1}
                  unoptimized={true}
                />

                {/*SubjectContent.InfoContent*/}
                <div className="flex flex-col space-y-2">
                  {/*SubjectContent.InfoContentHeader*/}
                  <div className="flex space-x-2 p-2">
                    {/*SubjectContent.Rating*/}
                    <div className="flex flex-col items-center space-y-2 p-2">
                      <TagBadge
                        label={"评分"}
                        color={"accent"}
                        className="mr-0 w-full text-base"
                      />
                      <span className="text-4xl font-bold text-accent-11">
                        {subjectData.rating.score.toFixed(1)}
                      </span>
                      <span className="whitespace-nowrap text-xs text-neutral-11">
                        {subjectData.rating.total} 人评分
                      </span>
                    </div>
                    {/*SubjectContent.InfoContentDivider*/}
                    <div className="h-full w-px bg-neutral-6"></div>
                    {/*SubjectContent.TagGroup*/}
                    <div className="max-w-[564px] leading-loose">
                      {subjectData.tags.map(({ count, name }, index) => (
                        <TagBadge key={index} label={name} count={count} />
                      ))}
                    </div>
                  </div>
                  {/*SubjectContent.InfoContentBody*/}
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
                  {/*SubjectContent.InfoContentFooter*/}
                  <div className="flex space-x-2 p-2">
                    {collectionData ? (
                      <>
                        <CollectionTypeSelect
                          subject_id={collectionData.subject_id}
                        />
                        <RatingSelect subject_id={collectionData.subject_id} />
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
                              openToast({
                                type: "info",
                                title: "收藏条目失败",
                                description:
                                  "收藏 api 暂未开放，请先自行前往主站收藏。",
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
                              openToast({
                                type: "info",
                                title: "请先收藏该条目",
                              });
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
            </Suspense>
            {/*SubjectContent.CharacterList*/}
            <CharacterList subject_id={subjectData.id} length={10} />
            {/*SubjectContent.EPListDynamic*/}
            <EPListDynamic subject_id={subjectData.id} length={10} />
            {/*SubjectContent.PersonList*/}
            <PersonList subject_id={subjectData.id} length={5} />
            {/*SubjectContent.SubjectList*/}
            <RelationSubjectList subject_id={subjectData.id} length={8} />
          </div>
        </>
      )}
    </>
  );
}

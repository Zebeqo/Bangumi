"use client";

import { useSubjectData } from "@/hooks/use-subject";
import { Suspense, useRef, useState } from "react";
import { useCollectionData } from "@/hooks/use-collection";
import { useToast } from "@/hooks/use-toast";
import { signIn, useSession } from "next-auth/react";
import { SubjectContentSkeleton } from "@/components/Skeleton/SubjectContentSkeleton";
import {
  SubjectContent as SubjectContentRoot,
  SubjectContentImage,
  SubjectContentInfo,
  SubjectContentInfoBody,
  SubjectContentInfoFooter,
  SubjectContentInfoHeader,
  SubjectContentInfoHeaderDivider,
  SubjectContentRating,
  SubjectContentTagGroup,
} from "@/ui/primitive/SubjectContent";
import { Badge } from "@/ui/primitive/Badge";
import { cn } from "@/lib/utils";
import { CollectionTypeSelect } from "@/components/Select/CollectionTypeSelect";
import { RatingSelect } from "@/components/Select/RatingSelect";
import { EpisodeButton as EpisodeButtonComponent } from "@/components/Button/EpisodeButton";
import { MoreDropdownMenu } from "@/components/DropdownMenu/MoreDropdownMenu";
import { OutlineButton, PrimaryButton } from "@/ui/primitive/Button";
import {
  ChevronDownIcon,
  InboxArrowDownIcon,
  StarIcon,
} from "@heroicons/react/20/solid";

export function SubjectContent({ subject_id }: { subject_id: number }) {
  const [showFullInfo, setShowFullInfo] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const { data: collectionData, isSuccess: isCollectionDataSuccess } =
    useCollectionData(subject_id);
  const toast = useToast();
  const { data: session } = useSession();
  const { data: subjectData, isSuccess: isSubjectDataSuccess } =
    useSubjectData(subject_id);
  return (
    <>
      {subjectData && isSubjectDataSuccess && isCollectionDataSuccess && (
        <Suspense fallback={<SubjectContentSkeleton />}>
          <SubjectContentRoot>
            <SubjectContentImage src={subjectData.images.medium} alt="cover" />
            <SubjectContentInfo>
              <SubjectContentInfoHeader>
                <SubjectContentRating
                  score={subjectData.rating.score}
                  total={subjectData.rating.total}
                />
                <SubjectContentInfoHeaderDivider />
                <SubjectContentTagGroup>
                  {subjectData.tags.map(({ count, name }) => (
                    <Badge colorVariant={"primary"} key={name} className="mr-2">
                      {name}
                      <span className="ml-1 text-neutral-11">{count}</span>
                    </Badge>
                  ))}
                </SubjectContentTagGroup>
              </SubjectContentInfoHeader>
              <SubjectContentInfoBody>
                <p
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
                      : isClamped && "hover:cursor-pointer hover:font-medium"
                  )}
                >
                  {subjectData.summary}
                </p>
              </SubjectContentInfoBody>
              <SubjectContentInfoFooter>
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
                    <PrimaryButton
                      colorVariant={"neutral"}
                      onClick={() => {
                        if (session) {
                          toast({
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
                    >
                      <InboxArrowDownIcon className="mr-2 h-5 w-5" />
                      收藏
                    </PrimaryButton>
                    <OutlineButton
                      colorVariant={"neutral"}
                      onClick={() => {
                        if (session) {
                          toast({
                            type: "info",
                            title: "请先收藏该条目",
                          });
                        } else {
                          void signIn("bangumi", {
                            redirect: false,
                          });
                        }
                      }}
                    >
                      <span className="flex items-center space-x-1">
                        <StarIcon className="h-5 w-5" />
                        <span>评分</span>
                      </span>
                      <ChevronDownIcon className="ml-2 h-5 w-5" />
                    </OutlineButton>
                    <MoreDropdownMenu subject_id={subjectData.id} />
                  </>
                )}
              </SubjectContentInfoFooter>
            </SubjectContentInfo>
          </SubjectContentRoot>
        </Suspense>
      )}
    </>
  );
}

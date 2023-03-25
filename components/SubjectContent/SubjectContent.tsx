"use client";

import { useSubjectData } from "@/hooks/use-subject";
import { Suspense } from "react";
import {
  useCollectionData,
  useCollectionMutation,
} from "@/hooks/use-collection";
import { useToast } from "@/hooks/use-toast";
import { signIn, useSession } from "next-auth/react";
import { SubjectContentSkeleton } from "@/components/Skeleton/SubjectContentSkeleton";
import {
  SubjectContent as SubjectContentRoot,
  SubjectContentImage,
  SubjectContentInfo,
  SubjectContentInfoFooter,
  SubjectContentInfoHeader,
  SubjectContentInfoHeaderDivider,
  SubjectContentInfoText,
  SubjectContentRating,
  SubjectContentTagGroup,
} from "@/ui/primitive/SubjectContent";
import { Badge } from "@/ui/primitive/Badge";
import { CollectionTypeSelect } from "@/components/Select/CollectionTypeSelect";
import { RatingSelect } from "@/components/Select/RatingSelect";
import { EpisodeButton } from "@/components/Button/EpisodeButton";
import { MoreMenu } from "@/components/DropdownMenu/MoreMenu";
import { Button } from "@/ui/primitive/Button";
import {
  ChevronDownIcon,
  InboxArrowDownIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import {
  collectionTypeEnum,
  collectionTypeValueToKeySchema,
  collectionTypeEnumKeySchema,
} from "@/lib/enum/collectionTypeEnum";
import {
  ratingEnum,
  ratingValueToKeyScheme,
  ratingEnumKeySchema,
} from "@/lib/enum/ratingEnum";

export function SubjectContent({ subject_id }: { subject_id: number }) {
  const toast = useToast();

  const { data: collectionData } = useCollectionData(subject_id);
  const { data: session } = useSession();
  const { data: subjectData } = useSubjectData(subject_id);

  const mutateCollection = useCollectionMutation();

  return (
    <>
      {subjectData && (
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
                    <Badge variant={{ color: "primary" }} key={name}>
                      {name}
                      <span className="ml-1 text-neutral-11">{count}</span>
                    </Badge>
                  ))}
                </SubjectContentTagGroup>
              </SubjectContentInfoHeader>
              <SubjectContentInfoText text={subjectData.summary} />
              <SubjectContentInfoFooter>
                {collectionData ? (
                  <>
                    <CollectionTypeSelect
                      defaultValue={collectionTypeValueToKeySchema.parse(
                        collectionData.type
                      )}
                      onValueChange={(value: string) => {
                        const collection_type =
                          collectionTypeEnumKeySchema.parse(value);
                        mutateCollection.mutate({
                          mutateCollection: {
                            type: collectionTypeEnum[collection_type].value,
                          },
                          subject_id: subject_id,
                          subject_type: collectionData.subject.type,
                          collection_type: collectionData.type,
                          description: `已将条目的收藏类型修改为 ${collectionTypeEnum[collection_type].label}`,
                        });
                      }}
                    />
                    <RatingSelect
                      defaultValue={ratingValueToKeyScheme.parse(
                        collectionData.rate
                      )}
                      onValueChange={(value: string) => {
                        const rating = ratingEnumKeySchema.parse(value);
                        mutateCollection.mutate({
                          mutateCollection: {
                            rate: ratingEnum[rating],
                          },
                          subject_id: subject_id,
                          subject_type: collectionData.subject.type,
                          collection_type: collectionData.type,
                          description: `已将条目的评分修改为 ${rating}`,
                        });
                      }}
                    />
                    <EpisodeButton
                      subject_id={collectionData.subject_id}
                      eps={collectionData.subject.eps}
                      ep_status={collectionData.ep_status}
                    />
                    <MoreMenu
                      subject_id={collectionData.subject_id}
                      hasCollectionData={true}
                    />
                  </>
                ) : (
                  <>
                    <Button
                      variant={{
                        type: "primary",
                      }}
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
                    </Button>
                    <Button
                      variant={{
                        type: "outline",
                      }}
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
                    </Button>
                    <MoreMenu subject_id={subjectData.id} />
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

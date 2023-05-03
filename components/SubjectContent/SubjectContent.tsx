"use client";

import { useSubjectData } from "@/hooks/use-subject";
import {
  useCollectionData,
  useCollectionMutation,
} from "@/hooks/use-collection";
import { useToast } from "@/hooks/use-toast";
import { signIn, useSession } from "next-auth/react";
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
} from "@/ui/components/SubjectContent";
import { Badge } from "@/ui/components/Badge";
import { CollectionTypeSelect } from "@/components/Select/CollectionTypeSelect";
import { RatingSelect } from "@/components/Select/RatingSelect";
import { EpisodeButton } from "@/components/Button/EpisodeButton";
import { MoreMenu } from "@/components/DropdownMenu/MoreMenu";
import { Button } from "@/ui/components/Button";
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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoadingSpinner } from "@/ui/icon/24/LoadingSpinner";

export function SubjectContent({ subject_id }: { subject_id: number }) {
  const toast = useToast();

  const { data: collectionData } = useCollectionData(subject_id);
  const { data: session } = useSession();
  const { data: subjectData } = useSubjectData(subject_id);

  const mutateCollection = useCollectionMutation();

  const queryClient = useQueryClient();
  const addCollection = useMutation({
    mutationFn: (subject_id: number) =>
      fetch(`https://api.bgm.tv/v0/users/-/collections/${subject_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.accessToken ?? ""}`,
        },
        body: JSON.stringify({
          type: 1,
        }),
      }),
    onMutate: () =>
      toast({
        type: "info",
        title: "正在添加收藏...",
      }),
    onSuccess: async () => {
      await queryClient.refetchQueries([
        "collection",
        subject_id,
        session?.user.name,
      ]);

      toast({
        type: "success",
        title: "添加收藏成功",
      });
    },
  });

  return (
    <>
      {subjectData && (
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
                  <Badge color="primary" key={name}>
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
                    variant="primary"
                    onClick={() => {
                      if (session) {
                        addCollection.mutate(subject_id);
                      } else {
                        void signIn("bangumi", {
                          redirect: false,
                        });
                      }
                    }}
                  >
                    {addCollection.isLoading ? (
                      <LoadingSpinner className="mr-2 h-5 w-5" />
                    ) : (
                      <InboxArrowDownIcon className="mr-2 h-5 w-5" />
                    )}
                    收藏
                  </Button>
                  <Button
                    variant="outline"
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
      )}
    </>
  );
}

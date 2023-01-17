"use client";

import { useCollectionsPageData } from "@/hooks/use-collection";
import { useInView } from "react-intersection-observer";
import { Fragment, useEffect } from "react";
import Image from "next/image";
import { InfoButton } from "@/components/InfoButton";
import { Button } from "@/ui/Button";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import {
  CalendarDaysIcon,
  ClockIcon,
  TableCellsIcon,
} from "@heroicons/react/20/solid";
import { TagBadge } from "@/ui/TagBadge";
import { Rating } from "@/ui/Rating";
import { LoadMoreIndicator } from "@/ui/LoadMoreIndicator";
import { useAtomValue } from "jotai/react";
import { personalViewModeAtom } from "@/components/personalViewSwitch";

export function CollectionCardList({
  subject_type,
  collection_type,
}: {
  subject_type: number;
  collection_type: number;
}) {
  const {
    data: episodesData,
    fetchNextPage,
    hasNextPage,
  } = useCollectionsPageData(subject_type, collection_type);
  const pvMode = useAtomValue(personalViewModeAtom);

  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      void (async () => {
        await fetchNextPage();
      })();
    }
  }, [inView]);

  return (
    <>
      <div className="relative grid grid-cols-1 justify-items-center gap-12 py-8 px-12 xl:grid-cols-2 min-[1800px]:grid-cols-3 min-[2400px]:grid-cols-4">
        {episodesData?.pages.map((page) => (
          <Fragment key={page?.offset}>
            {page?.data.map((collection) => (
              <div
                key={collection.subject.id}
                className="group flex w-[30rem] cursor-pointer select-none overflow-hidden rounded-2xl bg-neutral-2 ring-1 ring-neutral-6"
              >
                {/*Card.Image*/}
                <div className="relative aspect-[75/106] h-full">
                  <Image
                    className="object-cover"
                    src={collection.subject.images.common}
                    alt="card-image"
                    fill={true}
                    unoptimized={true}
                  />
                </div>
                {/*Card.Content*/}
                <div className="w-full px-4 py-2">
                  {/*Card.Header*/}
                  <div className="flex justify-between">
                    {/*Card.Title*/}
                    <div className="w-52">
                      <div className="truncate text-xl font-bold text-neutral-12">
                        {collection.subject.name_cn || collection.subject.name}
                      </div>
                      <div className="truncate text-xs font-medium text-neutral-11">
                        {collection.subject.name}
                      </div>
                    </div>
                    {/*Card.HoverButton*/}
                    <div className="hidden space-x-1 group-hover:flex">
                      <InfoButton subject_id={collection.subject.id} />
                      <Button
                        colorType="accent"
                        type="primary"
                        icon={<ChatBubbleLeftRightIcon />}
                      />
                    </div>
                  </div>
                  {/*Card.Info*/}
                  <div className="mt-1 flex justify-between py-1">
                    {/*Card.InfoItem*/}
                    <div className="flex items-center space-x-2 text-xs font-medium text-neutral-11">
                      <span className="h-4 w-4">
                        <CalendarDaysIcon />
                      </span>
                      <span>{collection.subject.date || "未知"}</span>
                    </div>
                    {/*Card.InfoItem*/}
                    <div className="flex items-center space-x-2 text-xs font-medium text-neutral-11">
                      <span className="h-4 w-4">
                        <TableCellsIcon />
                      </span>
                      <span>
                        {collection.subject.eps
                          ? `${collection.subject.eps} 集`
                          : "未知"}
                      </span>
                    </div>
                    {/*Card.InfoItem*/}
                    <div className="flex items-center space-x-2 text-xs font-medium text-neutral-11">
                      <span className="h-4 w-4">
                        <ClockIcon />
                      </span>
                      <span>{collection.subject.collection_total} 人收藏</span>
                    </div>
                  </div>
                  {/*Card.TagGroup*/}
                  <div className="h-[4.6rem] overflow-hidden py-1 leading-loose">
                    {pvMode
                      ? collection.tags.map((tag, index) => (
                          <TagBadge key={index} color="primary" label={tag} />
                        ))
                      : collection.subject.tags.map((tag, index) => (
                          <TagBadge
                            key={index}
                            color="primary"
                            label={tag.name}
                          />
                        ))}
                  </div>
                  {/*Card.Footer*/}
                  <div className="flex justify-between">
                    {/*Card.Rating*/}
                    <div className="flex space-x-3">
                      {/*Card.RatingPoint*/}
                      <div className="text-4xl font-bold text-accent-11">
                        {pvMode
                          ? collection.rate
                          : collection.subject.score.toFixed(1)}
                      </div>
                      <div className="flex flex-col justify-center space-y-1">
                        {/*Card.RatingStar*/}
                        <div>
                          <Rating point={collection.subject.score} />
                        </div>
                        {/*Rating.RatingDescription*/}
                        {collection.comment ? (
                          <div className="text-xs font-medium italic text-accent-12 line-clamp-1">
                            “ {collection.comment} ”
                          </div>
                        ) : (
                          <span className="text-xs text-neutral-11">
                            暂无评论
                          </span>
                        )}
                      </div>
                    </div>
                    {/*Card.Status*/}
                    <div></div>
                  </div>
                </div>
              </div>
            ))}
          </Fragment>
        ))}
        <div className="absolute inset-x-0 -bottom-4 flex w-full items-center justify-center">
          <LoadMoreIndicator ref={ref} hasMore={hasNextPage} />
        </div>
      </div>
    </>
  );
}

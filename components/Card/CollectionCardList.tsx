"use client";

import { useCollectionsPageData } from "@/hooks/use-collection";
import { useInView } from "react-intersection-observer";
import { Fragment, useEffect } from "react";
import { LoadMore } from "@/ui/LoadMore";
import { CollectionCard } from "@/components/Card/CollectionCard";

export function CollectionCardList({
  subject_type,
  collection_type,
}: {
  subject_type: number;
  collection_type: number;
}) {
  const {
    data: collectionsPageData,
    fetchNextPage,
    hasNextPage,
  } = useCollectionsPageData(subject_type, collection_type);

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
      {collectionsPageData?.pages.map((group, i) => (
        <Fragment key={i}>
          {group?.data.map((collection) => (
            <CollectionCard
              collection={collection}
              key={collection.subject.id}
            />
          ))}
        </Fragment>
      ))}
      <div className="absolute inset-x-0 -bottom-12 flex w-full items-center justify-center">
        <LoadMore ref={ref} hasMore={hasNextPage} />
      </div>
    </>
  );
}

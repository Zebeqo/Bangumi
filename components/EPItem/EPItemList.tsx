"use client";

import type { z } from "zod";
import type { episodesPageScheme } from "@/lib/api/episode";
import { useCollectionData } from "@/hooks/use-collection";
import { useEpisodeMutation } from "@/hooks/use-episode";
import { useToast } from "@/hooks/use-toast";
import {
  EPItem,
  EPItemComment,
  EPItemIndex,
  EPItemInfo,
  EPItemLeftContent,
  EPItemRightContent,
} from "@/ui/components/EPItem";

export function EPItemList({
  episodesData,
  subject_id,
}: {
  episodesData?: z.infer<typeof episodesPageScheme>["data"];
  subject_id: number;
}) {
  const { data: collectionData } = useCollectionData(subject_id);
  const mutateEpisode = useEpisodeMutation();
  const toast = useToast();

  return (
    <>
      {episodesData?.map((episodeData) => (
        <EPItem key={episodeData.ep}>
          <EPItemLeftContent>
            <EPItemIndex
              variant={
                collectionData
                  ? episodeData.ep <= collectionData.ep_status
                    ? "selected"
                    : "ghost"
                  : "ghost"
              }
              onClick={() => {
                if (collectionData) {
                  collectionData.ep_status === episodeData.ep
                    ? mutateEpisode.mutate({
                        subject_id,
                        currentEp: collectionData.ep_status,
                        targetEp: episodeData.ep - 1,
                        subject_type: collectionData.subject.type,
                        collection_type: collectionData.type,
                      })
                    : mutateEpisode.mutate({
                        subject_id,
                        currentEp: collectionData.ep_status,
                        targetEp: episodeData.ep,
                        subject_type: collectionData.subject.type,
                        collection_type: collectionData.type,
                      });
                } else {
                  toast({
                    type: "info",
                    title: "请先收藏该条目",
                  });
                }
              }}
            >
              {episodeData.ep}
            </EPItemIndex>
            <EPItemInfo
              name={episodeData.name || "未知"}
              name_cn={episodeData.name === "" ? "" : episodeData.name_cn}
              airdate={episodeData.airdate}
              duration={episodeData.duration}
            />
          </EPItemLeftContent>
          <EPItemRightContent>
            <EPItemComment
              count={episodeData.comment}
              onClick={() => {
                window.open(`https://bgm.tv/ep/${episodeData.id}`, "_blank");
              }}
            />
          </EPItemRightContent>
        </EPItem>
      ))}
    </>
  );
}

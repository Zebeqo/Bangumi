"use client";

import { CharacterAvatarCard } from "@/components/AvatarCard/CharacterAvatarCard";
import {
  useCharactersData,
  useSubjectCharactersData,
} from "@/hooks/use-character";
import { ListHeader } from "@/components/Panel/PanelList/ListHeader";
import { panelHistoryAtom, panelReducer } from "@/lib/panel";
import { useReducerAtom } from "jotai/utils";
import { AvatarCardSkeleton } from "@/components/Skeleton/AvatarCardSkeleton";
import { ListSkeletonWrapper } from "@/components/Skeleton/ListSkeletonWrapper";

export const CharacterListSkeleton = () => (
  <ListSkeletonWrapper>
    <div className="grid grid-cols-5 gap-4 px-8 py-2">
      {Array.from({ length: 10 }).map((_, i) => (
        <AvatarCardSkeleton key={i} />
      ))}
    </div>
  </ListSkeletonWrapper>
);

export function CharacterList({
  subject_id,
  length,
}: {
  subject_id: number;
  length?: number;
}) {
  const [, dispatch] = useReducerAtom(panelHistoryAtom, panelReducer);
  const { data: subjectCharactersData } = useSubjectCharactersData(subject_id);

  const characterResults = useCharactersData(
    subjectCharactersData?.map(
      (subjectCharacterData) => subjectCharacterData.id
    ) ?? [],
    length
  );

  return (
    <>
      {subjectCharactersData?.length ? (
        <div className="flex flex-col space-y-2 p-2">
          <ListHeader
            title={"角色"}
            showAction={length ? subjectCharactersData.length > length : false}
            onClickAction={() => {
              dispatch({
                type: "push",
                value: { target_id: subject_id, type: "characterList" },
              });
            }}
          />
          <div className="grid grid-cols-5 gap-4 px-8 py-2">
            {length
              ? subjectCharactersData
                  .slice(0, length)
                  .map((subjectCharacterData, index) => {
                    const characterData = characterResults.at(index)?.data;
                    if (!characterData) return null;

                    return (
                      <CharacterAvatarCard
                        key={subjectCharacterData.id}
                        subjectCharacterData={subjectCharacterData}
                        characterData={characterData}
                      />
                    );
                  })
              : subjectCharactersData.map((subjectCharacterData, index) => {
                  const characterData = characterResults.at(index)?.data;
                  if (!characterData) return null;

                  return (
                    <CharacterAvatarCard
                      key={subjectCharacterData.id}
                      subjectCharacterData={subjectCharacterData}
                      characterData={characterData}
                    />
                  );
                })}
          </div>
        </div>
      ) : null}
    </>
  );
}

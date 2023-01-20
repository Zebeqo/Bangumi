"use client";

import { CharacterAvatarCard } from "@/components/Panel/CharacterList/CharacterAvatarCard";
import { useSubjectCharactersData } from "@/hooks/use-character";
import { ListHeader } from "@/ui/Panel/ListHeader";
import { panelHistoryAtom, panelReducer } from "@/lib/panel";
import { useReducerAtom } from "jotai/react/utils";

export function CharacterList({
  subject_id,
  length,
}: {
  subject_id: number;
  length?: number;
}) {
  const [, dispatch] = useReducerAtom(panelHistoryAtom, panelReducer);
  const { data: subjectCharactersData } = useSubjectCharactersData(subject_id);
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
              ? subjectCharactersData.slice(0, length).map((characterData) => {
                  return (
                    <CharacterAvatarCard
                      key={characterData.id}
                      character_id={characterData.id}
                      character_relation={characterData.relation}
                      actors={characterData.actors}
                      onClick={() => {
                        window.open(
                          `https://bgm.tv/character/${characterData.id}`,
                          "_blank"
                        );
                      }}
                    />
                  );
                })
              : subjectCharactersData.map((characterData) => {
                  return (
                    <CharacterAvatarCard
                      key={characterData.id}
                      character_id={characterData.id}
                      character_relation={characterData.relation}
                      actors={characterData.actors}
                      onClick={() => {
                        window.open(
                          `https://bgm.tv/character/${characterData.id}`,
                          "_blank"
                        );
                      }}
                    />
                  );
                })}
          </div>
        </div>
      ) : null}
    </>
  );
}

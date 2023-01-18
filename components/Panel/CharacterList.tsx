"use client";

import { CharacterAvatarCard } from "@/components/Panel/CharacterAvatarCard";
import { useSubjectCharactersData } from "@/hooks/use-character";
import { ListHeader } from "@/components/Panel/ListHeader";
import { useSetAtom } from "jotai/react";
import { panelAtom } from "@/lib/panel";

export function CharacterList({
  subject_id,
  length,
}: {
  subject_id: number;
  length?: number;
}) {
  const setPanel = useSetAtom(panelAtom);
  const { data: subjectCharactersData } = useSubjectCharactersData(subject_id);
  return (
    <>
      {subjectCharactersData?.length ? (
        <div className="flex flex-col space-y-2 p-2">
          <ListHeader
            title={"角色"}
            onClickAction={() => {
              setPanel({ target_id: subject_id, type: "characterList" });
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
                      actor_names={characterData.actors.map(
                        (actor) => actor.name
                      )}
                    />
                  );
                })
              : subjectCharactersData.map((characterData) => {
                  return (
                    <CharacterAvatarCard
                      key={characterData.id}
                      character_id={characterData.id}
                      character_relation={characterData.relation}
                      actor_names={characterData.actors.map(
                        (actor) => actor.name
                      )}
                    />
                  );
                })}
          </div>
        </div>
      ) : null}
    </>
  );
}

"use client";

import { CharacterAvatarCard } from "@/components/Panel/CharacterAvatarCard";
import { useSubjectCharactersData } from "@/hooks/use-character";
import { ListHeader } from "@/components/Panel/ListHeader";

export function CharacterList({ subject_id }: { subject_id: number }) {
  const { data: subjectCharactersData } = useSubjectCharactersData(subject_id);
  return (
    <>
      {subjectCharactersData?.length ? (
        <div className="flex flex-col space-y-2 p-2">
          <ListHeader title={"角色"} />
          <div className="grid grid-cols-5 gap-4 px-8 py-2">
            {subjectCharactersData.slice(0, 10).map((characterData) => {
              return (
                <CharacterAvatarCard
                  key={characterData.id}
                  character_id={characterData.id}
                  character_relation={characterData.relation}
                  actor_names={characterData.actors.map((actor) => actor.name)}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
}

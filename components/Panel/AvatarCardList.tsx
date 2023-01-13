"use client";

import { AvatarCard } from "@/components/Panel/AvatarCard";
import { useSubjectCharactersData } from "@/hooks/use-character";

export function AvatarCardList({ subject_id }: { subject_id: number }) {
  const { data: subjectCharactersData } = useSubjectCharactersData(subject_id);
  return (
    <>
      {subjectCharactersData && (
        <div className="grid grid-cols-5 gap-4 px-8 py-2">
          {subjectCharactersData.slice(0, 10).map((characterData) => {
            return (
              <AvatarCard
                key={characterData.id}
                character_id={characterData.id}
                character_relation={characterData.relation}
                actor_names={characterData.actors.map((actor) => actor.name)}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

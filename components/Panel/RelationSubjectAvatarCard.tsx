"use client";

import Image from "next/image";

export function RelationSubjectAvatarCard({
  name,
  name_cn,
  relation,
  imageURL,
}: {
  name: string;
  name_cn: string;
  relation: string;
  imageURL: string;
}) {
  return (
    <>
      {
        <div className="relative rounded-md bg-neutral-3 px-4 py-6 hover:bg-neutral-5">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-56 w-40 overflow-hidden rounded-xl">
              <Image
                className="cursor-pointer object-cover"
                src={
                  imageURL || "https://avatars.githubusercontent.com/u/7521082"
                }
                alt="Avatar"
                fill={true}
                unoptimized={true}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex space-x-1">
                <span className="whitespace-nowrap text-xs text-neutral-11">
                  {relation}:
                </span>
                <span
                  className="truncate text-xs font-medium text-neutral-12 "
                  title={name_cn}
                >
                  {name_cn || name}
                </span>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

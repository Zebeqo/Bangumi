import Image from "next/image";

export function RelationSubjectAvatarCard({
  name,
  name_cn,
  relation,
  imageURL,
  onClick,
}: {
  name: string;
  name_cn: string;
  relation: string;
  imageURL: string;
  onClick: () => void;
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
                onClick={onClick}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex space-x-1">
                <span className="whitespace-nowrap text-xs text-neutral-11">
                  {relation}:
                </span>
                <span
                  className="overflow-hidden text-ellipsis text-xs font-medium text-neutral-12 "
                  title={name_cn}
                  data-testid="subject-name"
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

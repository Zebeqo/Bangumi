import {
  AvatarCard,
  AvatarCardContent,
  AvatarCardImage,
  AvatarCardInfo,
  AvatarCardInfoItem,
  AvatarCardInfoItemName,
} from "@/ui/primitive/AvatarCard";

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
    <AvatarCard>
      <AvatarCardContent className="mx-2 w-40 items-center">
        <AvatarCardImage
          src={imageURL}
          alt="Avatar"
          onClick={onClick}
          className="h-56 w-40 rounded-md"
        />
        <AvatarCardInfo>
          <AvatarCardInfoItem relation={relation}>
            <AvatarCardInfoItemName title={name_cn} className="line-clamp-2">
              {name_cn || name}
            </AvatarCardInfoItemName>
          </AvatarCardInfoItem>
        </AvatarCardInfo>
      </AvatarCardContent>
    </AvatarCard>
  );
}

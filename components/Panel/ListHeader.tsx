export const ListHeader = ({
  title,
  onClickAction,
}: {
  title: string;
  onClickAction?: () => void;
}) => {
  return (
    <div className="flex items-center justify-between px-6 py-3">
      <span className="text-3xl font-medium text-neutral-12">{title}</span>
      <span
        className="cursor-pointer font-medium text-neutral-11"
        onClick={onClickAction}
      >
        显示全部
      </span>
    </div>
  );
};

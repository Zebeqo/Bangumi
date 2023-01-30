import { panelScrollToTop } from "@/lib/utils";

export const ListHeader = ({
  title,
  showAction = true,
  onClickAction,
}: {
  title: string;
  showAction?: boolean;
  onClickAction: () => void;
}) => {
  return (
    <div className="flex items-center justify-between px-6 py-3">
      <span className="text-3xl font-medium text-neutral-12">{title}</span>
      {showAction && (
        <span
          className="cursor-pointer font-medium text-neutral-11"
          onClick={() => {
            onClickAction();
            panelScrollToTop();
          }}
        >
          显示全部
        </span>
      )}
    </div>
  );
};
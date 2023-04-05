import { panelScrollToTop } from "@/lib/utils";
import { Button } from "@/ui/components/Button";

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
        <Button
          variant="ghost"
          aria-label={`显示全部${title}`}
          className="hover:bg-transparent active:bg-transparent"
          onClick={() => {
            onClickAction();
            panelScrollToTop();
          }}
        >
          显示全部
        </Button>
      )}
    </div>
  );
};

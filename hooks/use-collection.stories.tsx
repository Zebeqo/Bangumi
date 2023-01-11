import type { Meta } from "@storybook/react";
import { useEpisodesData } from "@/hooks/use-episode";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";
import { Button } from "@/ui/Button";
import { reactQueryDevtoolsDecorator } from "@/lib/storybook";

const meta: Meta = {
  title: "use-collection",
  decorators: [reactQueryDevtoolsDecorator],
};

export default meta;

export const EpisodesDataHook = () => {
  const {
    data: episodesData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isSuccess,
  } = useEpisodesData(STORYBOOK_SUBJECT_ID, 2);
  return (
    <>
      {isSuccess ? (
        <div className="relative">
          <Button
            colorType={"accent"}
            type={"secondary"}
            className="absolute right-0 bottom-0 select-none"
            label={
              isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                ? "Load More"
                : "Nothing more to load"
            }
            onClick={() => {
              void (async () => {
                await fetchNextPage();
              })();
            }}
          />
          <div>
            <pre className="text-xs">
              data: {JSON.stringify(episodesData, null, 2)}
            </pre>
          </div>
        </div>
      ) : (
        "loading"
      )}
    </>
  );
};

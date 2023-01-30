import type { Meta } from "@storybook/react";
import { useEpisodesPageData } from "@/hooks/use-episode";
import { STORYBOOK_SUBJECT_ID } from "@/lib/constant";
import { reactQueryDevtoolsDecorator } from "@/lib/storybook";
import { SecondaryButton } from "@/ui/primitive/Button";

const meta: Meta = {
  title: "use-episode",
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
  } = useEpisodesPageData(STORYBOOK_SUBJECT_ID, 2);
  return (
    <>
      {isSuccess ? (
        <div className="relative">
          <SecondaryButton
            colorType={"accent"}
            className="absolute right-0 bottom-0 select-none"
            onClick={() => {
              void (async () => {
                await fetchNextPage();
              })();
            }}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
          </SecondaryButton>
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

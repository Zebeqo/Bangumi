import type { Meta } from "@storybook/react";
import { useCollectionsPageData } from "@/hooks/use-collection";
import { reactQueryDevtoolsDecorator } from "@/lib/storybook";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const meta: Meta = {
  title: "use-collection",
  decorators: [reactQueryDevtoolsDecorator],
};

export default meta;

export const CollectionsDataHook = () => {
  const {
    data: episodesData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isSuccess,
  } = useCollectionsPageData(2, 2);

  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      void (async () => {
        await fetchNextPage();
      })();
    }
  }, [inView]);

  return (
    <>
      {isSuccess ? (
        <div className="relative">
          <div>
            <pre className="text-xs">
              data: {JSON.stringify(episodesData, null, 2)}
            </pre>
          </div>
          <div ref={ref}>
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
          </div>
        </div>
      ) : (
        "loading"
      )}
    </>
  );
};

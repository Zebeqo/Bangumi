import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { Meta } from "@storybook/react";

export const reactQueryDevtoolsDecorators = () => {
  const meta: Meta = {
    decorators: [
      (Story) => {
        return (
          <>
            <ReactQueryDevtools initialIsOpen={false} panelPosition={"right"} />
            <Story />
          </>
        );
      },
    ],
  };
  return meta;
};

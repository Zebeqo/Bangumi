import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Panel } from "@/components/panel/Panel";

export const reactQueryDevtoolsDecorator = (Story: React.ComponentType) => {
  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} panelPosition={"right"} />
      <Story />
    </>
  );
};

export const panelDecorator = (Story: React.ComponentType) => {
  return (
    <>
      <Panel />
      <Story />
    </>
  );
};

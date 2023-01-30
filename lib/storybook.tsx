import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Panel } from "@/components/Panel/Panel";

export const reactQueryDevtoolsDecorator = (Story: React.ComponentType) => {
  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} panelPosition={"left"} />
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

export const headerMarginDecorator = (Story: React.ComponentType) => {
  return <div className="mt-16">{<Story />}</div>;
};

export const rowDecorator = (Story: React.ComponentType) => {
  return <div className="grid grid-cols-4 gap-4">{<Story />}</div>;
};

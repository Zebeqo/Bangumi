import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Panel } from "@/components/Panel/Panel";

export const ReactQueryDevtoolsDecorator = (Story: React.ComponentType) => {
  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} panelPosition={"left"} />
      <Story />
    </>
  );
};

export const PanelDecorator = (Story: React.ComponentType) => {
  return (
    <>
      <Panel />
      <Story />
    </>
  );
};

export const HeaderMarginDecorator = (Story: React.ComponentType) => {
  return <div className="mt-16">{<Story />}</div>;
};

export const RowDecorator = (Story: React.ComponentType) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      {<Story />}
    </div>
  );
};

export const ContainerDecorator = (Story: React.ComponentType) => {
  return <div className="container w-screen">{<Story />}</div>;
};
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Panel } from "@/components/Panel/Panel";
import { colorArray } from "@/ui/color";

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
  return (
    <div className="flex items-center justify-center space-x-4">
      {<Story />}
    </div>
  );
};

export const colorArgTypes = {
  colorType: {
    control: {
      type: "radio",
    },
    options: colorArray,
  },
};

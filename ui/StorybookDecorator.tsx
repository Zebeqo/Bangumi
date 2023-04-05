import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Panel } from "@/components/Panel/Panel";
import { Dialog } from "@/components/Dialog/Dialog";
import { Toast } from "@/components/Toast/Toast";
import QueryProvider from "@/components/Provider/QueryProvider";
import { TooltipProvider } from "@/ui/components/Tooltip";
import { Provider } from "jotai";

export const RootDecorator = (Story: React.ComponentType) => {
  return (
    <div style={{ fontFamily: "Noto Sans SC" }}>
      <QueryProvider>
        <Provider>
          <TooltipProvider delayDuration={300}>
            <Story />
          </TooltipProvider>
        </Provider>
      </QueryProvider>
    </div>
  );
};

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
  return (
    <div className="mt-16">
      <Story />
    </div>
  );
};

export const RowDecorator = (Story: React.ComponentType) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <Story />
    </div>
  );
};

export const ContainerDecorator = (Story: React.ComponentType) => {
  return (
    <div className="container w-screen">
      <Story />
    </div>
  );
};

export const DialogDecorator = (Story: React.ComponentType) => {
  return (
    <>
      <Dialog />
      <Story />
    </>
  );
};

export const ToastDecorator = (Story: React.ComponentType) => {
  return (
    <>
      <Toast />
      <Story />
    </>
  );
};

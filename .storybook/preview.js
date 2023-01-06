import "@/styles/globals.css";
import ToastProvider from "../components/provider/ToastProvider";
import { StateProvider } from "../components/provider/StateProvider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextjs: {
    appDirectory: true,
  },
  darkMode: {
    darkClass: "dark",
    lightClass: "light",
    stylePreview: true,
  },
};

const Provider = (Story) => {
  return (
    <StateProvider>
      <ToastProvider swipeDirection="right" duration={3000}>
        <Story />
      </ToastProvider>
    </StateProvider>
  );
};
export const decorators = [Provider];

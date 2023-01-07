import "@/styles/globals.css";
import ToastProvider from "../components/provider/ToastProvider";
import { StateProvider } from "../components/provider/StateProvider";
import { Toast } from "../ui/Toast";
import { Dialog } from "../ui/Dialog";
import SessionProvider from "../components/provider/SessionProvider";
import { Panel } from "../components/panel/Panel";

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
    <div className="font-['Noto_Sans_SC']">
      <StateProvider noDevtools>
        <SessionProvider
          session={JSON.parse(process.env.STORYBOOK_TEST_SESSION)}
        >
          <ToastProvider swipeDirection="right" duration={3000}>
            <Story />
            <Toast />
            <Dialog />
            <Panel />
          </ToastProvider>
        </SessionProvider>
      </StateProvider>
    </div>
  );
};
export const decorators = [Provider];

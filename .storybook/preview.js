import "@/styles/globals.css";
import ToastProvider from "../components/Provider/ToastProvider";
import { StateProvider } from "../components/Provider/StateProvider";
import { MainToast } from "../components/Toast/MainToast";
import { Dialog } from "../components/Dialog/Dialog";

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
  nextAuthMock: {
    session: {
      data: JSON.parse(process.env.STORYBOOK_MOCK_SESSION),
      status: "authenticated",
    },
  },
  layout: "centered",
};

const Provider = (Story) => {
  return (
    <div className="font-['Noto_Sans_SC']">
      <StateProvider noDevtools>
        <ToastProvider swipeDirection="right" duration={3000}>
          <Story />
          <MainToast />
          <Dialog />
        </ToastProvider>
      </StateProvider>
    </div>
  );
};
export const decorators = [Provider];

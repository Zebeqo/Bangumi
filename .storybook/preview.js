import "@/styles/globals.css";
import ToastProvider from "../components/Provider/ToastProvider";
import { StateProvider } from "../components/Provider/StateProvider";
import { Toast } from "../components/Toast/Toast";

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
    session:
      process.env.STORYBOOK_MOCK_SESSION === ""
        ? {
            data: null,
            status: "unauthenticated",
          }
        : {
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
        <Story />
      </StateProvider>
    </div>
  );
};
export const decorators = [Provider];

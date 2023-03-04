import "@/styles/globals.css";
import JotaiProvider from "../components/Provider/JotaiProvider";
import QueryProvider from "../components/Provider/QueryProvider";

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
    <div style={{ fontFamily: "Noto Sans SC" }}>
      <QueryProvider>
        <JotaiProvider>
          <Story />
        </JotaiProvider>
      </QueryProvider>
    </div>
  );
};
export const decorators = [Provider];

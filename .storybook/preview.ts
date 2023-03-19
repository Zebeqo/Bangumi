import "@/styles/globals.css";
import type { Preview } from "@storybook/react";
import { RootDecorator } from "@/ui/StorybookDecorator";

const preview: Preview = {
  parameters: {
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
      session: process.env.STORYBOOK_MOCK_SESSION
        ? {
            data: JSON.parse(process.env.STORYBOOK_MOCK_SESSION),
            status: "authenticated",
          }
        : {
            data: null,
            status: "unauthenticated",
          },
    },
    layout: "centered",
  },
  decorators: [RootDecorator],
};

export default preview;

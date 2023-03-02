import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { SecondaryButton } from "@/ui/primitive/Button";
import { useDialog } from "@/hooks/use-dialog";
import { screen, userEvent, within } from "@storybook/testing-library";
import { action } from "@storybook/addon-actions";
import { DialogDecorator } from "@/ui/Storybook";

const meta: Meta = {
  title: "Dialog",
  decorators: [DialogDecorator],
};

export default meta;

export const Dialog_: StoryObj<{
  title: string;
  description: string;
  actionLabel: string;
  handleAction: () => void;
}> = {
  args: {
    title: "问题报告",
    description:
      "Warning: forwardRef requires a render function but was given object.\n" +
      "    at forwardRef\n" +
      "    at renderContextProvider (C:\\Users\\z7155\\WebstormProjects\\dev\\bangumi-dashboard\\node_modules\\.pnpm\\next@13.2.3_7xlrwlvvs7cv2obrs6a5y6oxxq\\node_modules\\next\\dist\\compiled\\react-dom\\cjs\\react-dom-server.browser.development.js:8245:3)\n" +
      "    at Lazy\n" +
      "    at div\n" +
      "    at Provider (webpack-internal:///(sc_client)/./node_modules/.pnpm/@radix-ui+react-context@1.0.0_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.js:47:28)\n" +
      "    at Provider (webpack-internal:///(sc_client)/./node_modules/.pnpm/@radix-ui+react-context@1.0.0_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.js:47:28)\n" +
      "    at CollectionProvider (webpack-internal:///(sc_client)/./node_modules/.pnpm/@radix-ui+react-collection@1.0.1_biqbaboplfbrettd7655fr4n2y/node_modules/@radix-ui/react-collection/dist/index.js:34:24)\n" +
      "    at $9208a85b3e79d33f$export$f5d03d415824e0e (webpack-internal:///(sc_client)/./node_modules/.pnpm/@radix-ui+react-toast@1.1.2_biqbaboplfbrettd7655fr4n2y/node_modules/@radix-ui/react-toast/dist/index.js:63:27)\n" +
      "    at Lazy\n" +
      "    at ScrollAndFocusHandler (webpack-internal:///(sc_client)/./node_modules/.pnpm/next@13.2.3_7xlrwlvvs7cv2obrs6a5y6oxxq/node_modules/next/dist/client/components/layout-router.js:145:1)\n" +
      "    at InnerLayoutRouter (webpack-internal:///(sc_client)/./node_modules/.pnpm/next@13.2.3_7xlrwlvvs7cv2obrs6a5y6oxxq/node_modules/next/dist/client/components/layout-router.js:186:30)\n" +
      "    at RedirectErrorBoundary (webpack-internal:///(sc_client)/./node_modules/.pnpm/next@13.2.3_7xlrwlvvs7cv2obrs6a5y6oxxq/node_modules/next/dist/client/components/layout-router.js:343:9)\n" +
      "    at RedirectBoundary (webpack-internal:///(sc_client)/./node_modules/.pnpm/next@13.2.3_7xlrwlvvs7cv2obrs6a5y6oxxq/node_modules/next/dist/client/components/layout-router.js:349:29)\n" +
      "    at NotFoundErrorBoundary (webpack-internal:///(sc_client)/./node_modules/.pnpm/next@13.2.3_7xlrwlvvs7cv2obrs6a5y6oxxq/node_modules/next/dist/client/components/layout-router.js:375:9)\n" +
      "    at NotFoundBoundary (webpack-internal:///(sc_client)/./node_modules/.pnpm/next@13.2.3_7xlrwlvvs7cv2obrs6a5y6oxxq/node_modules/next/dist/client/components/layout-router.js:381:29)\n" +
      "    at LoadingBoundary (webpack-internal:///(sc_client)/./node_modules/.pnpm/next@13.2.3_7xlrwlvvs7cv2obrs6a5y6oxxq/node_modules/next/dist/client/components/layout-router.js:304:32)\n" +
      "    at ErrorBoundary (webpack-internal:///(sc_client)/./node_modules/.pnpm/next@13.2.3_7xlrwlvvs7cv2obrs6a5y6oxxq/node_modules/next/dist/client/components/error-boundary.js:69:26)\n" +
      "    at RenderFromTemplateContext (webpack-internal:///(sc_client)/./node_modules/.pnpm/next@13.2.3_7xlrwlvvs7cv2obrs6a5y6oxxq/node_modules/next/dist/client/components/render-from-template-context.js:10:34)\n" +
      "    at Lazy\n" +
      "    at OuterLayoutRouter (webpack-internal:///(sc_client)/./node_modules/.pnpm/next@13.2.3_7xlrwlvvs7cv2obrs6a5y6oxxq/node_modules/next/dist/client/components/layout-router.js:21:30)\n" +
      "    at Lazy\n" +
      "    at SessionProvider (webpack-internal:///(sc_client)/./node_modules/.pnpm/next-auth@4.19.2_nvzgbose6yf6w7ijjprgspqefi/node_modules/next-auth/react/index.js:453:24)\n" +
      "    at Lazy\n" +
      "    at Provider (webpack-internal:///(sc_client)/./node_modules/.pnpm/jotai@2.0.2_react@18.2.0/node_modules/jotai/esm/react.mjs:20:3)\n" +
      "    at QueryClientProvider (webpack-internal:///(sc_client)/./node_modules/.pnpm/@tanstack+react-query@4.24.10_biqbaboplfbrettd7655fr4n2y/node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs:47:3)\n" +
      "    at StateProvider (webpack-internal:///(sc_client)/./components/Provider/StateProvider.tsx:26:26)\n" +
      "    at Lazy\n" +
      "    at m (webpack-internal:///(sc_client)/./node_modules/.pnpm/next-themes@0.2.1_nvzgbose6yf6w7ijjprgspqefi/node_modules/next-themes/dist/index.js:1:335)\n" +
      "    at exports.ThemeProvider (webpack-internal:///(sc_client)/./node_modules/.pnpm/next-themes@0.2.1_nvzgbose6yf6w7ijjprgspqefi/node_modules/next-themes/dist/index.js:1:3636)\n" +
      "    at ThemeProvider (webpack-internal:///(sc_client)/./components/Provider/ThemeProvider.tsx:10:26)\n" +
      "    at Lazy\n" +
      "    at body\n" +
      "    at html\n" +
      "    at ReactDevOverlay (webpack-internal:///(sc_client)/./node_modules/.pnpm/next@13.2.3_7xlrwlvvs7cv2obrs6a5y6oxxq/node_modules/next/dist/client/components/react-dev-overlay/internal/ReactDevOverlay.js:61:9)\n" +
      "    at HotReload (webpack-internal:///(sc_client)/./node_modules/.pnpm/next@13.2.3_7xlrwlvvs7cv2obrs6a5y6oxxq/node_modules/next/dist/client/components/react-dev-overlay/hot-reloader-client.js:19:22)\n" +
      "    at Router (webpack-internal:///(sc_client)/./node_modules/.pnpm/next@13.2.3_7xlrwlvvs7cv2obrs6a5y6oxxq/node_modules/next/dist/client/components/app-router.js:45:23)\n" +
      "    at ErrorBoundaryHandler (webpack-internal:///(sc_client)/./node_modules/.pnpm/next@13.2.3_7xlrwlvvs7cv2obrs6a5y6oxxq/node_modules/next/dist/client/components/error-boundary.js:57:9)\n" +
      "    at ErrorBoundary (webpack-internal:///(sc_client)/./node_modules/.pnpm/next@13.2.3_7xlrwlvvs7cv2obrs6a5y6oxxq/node_modules/next/dist/client/components/error-boundary.js:69:26)\n" +
      "    at AppRouter (webpack-internal:///(sc_client)/./node_modules/.pnpm/next@13.2.3_7xlrwlvvs7cv2obrs6a5y6oxxq/node_modules/next/dist/client/components/app-router.js:23:13)\n" +
      "    at Lazy\n" +
      "    at Lazy",
    actionLabel: "提交 issue",
    handleAction: action("action"),
  },

  render: ({ title, description, actionLabel, handleAction }) => {
    const dialog = useDialog();
    return (
      <SecondaryButton
        onClick={() =>
          dialog({
            title: title,
            description: description,
            action: {
              label: actionLabel,
              onClick: handleAction,
            },
          })
        }
      >
        Open Dialog
      </SecondaryButton>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Open Dialog" }));

    const dialog = await screen.findByRole("dialog");
    const dialogContent = within(dialog);
    expect(dialogContent.getByText(args.title));
    expect(dialogContent.getByText(args.actionLabel));

    await userEvent.click(
      dialogContent.getByRole("button", { name: args.actionLabel })
    );

    expect(args.handleAction).toHaveBeenCalledTimes(1);
  },
};

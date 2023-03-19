import "@/styles/globals.css";
import SessionProvider from "@/components/Provider/SessionProvider";
import ThemeProvider from "@/components/Provider/ThemeProvider";
import QueryProvider, {
  ReactQueryDevtools,
} from "@/components/Provider/QueryProvider";
import JotaiProvider, {
  JotaiDevTools,
} from "@/components/Provider/JotaiProvider";
import Analytics from "@/components/Analytics";
import { TooltipProvider } from "@/ui/primitive/Tooltip";
import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";

// use in production
// https://github.com/vercel/next.js/issues/45080
const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

// use in development
// const notoSansSC = { variable: "font-['Noto_Sans_SC']" };

export const metadata: Metadata = {
  title: {
    default: "番组计划",
    template: `%s | 番组计划`,
  },
  description: "一个开源的 bgm.tv 客户端",
  keywords: [
    "Bangumi",
    "番组计划",
    "Anime",
    "Next.js",
    "React",
    "Tailwind CSS",
  ],
  authors: [
    {
      name: "zebeqo",
      // TODO: My Blog URL
    },
  ],
  creator: "zebeqo",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.bangumi.app/",
    title: "番组计划",
    description: "一个开源的 bgm.tv 客户端",
    siteName: "Bangumi App",
    // TODO: OG Image
  },
  icons: {
    icon: "/bangumi-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let JotaiDevToolsComponent: React.ReactNode = null;
  if (process.env.NODE_ENV === "development") {
    JotaiDevToolsComponent = <JotaiDevTools />; // put your debug store here, or remove store prop to debug global store
  }

  return (
    // https://github.com/pacocoursey/next-themes/issues/152#issuecomment-1364280564
    <html lang="zh" className={notoSansSC.variable} suppressHydrationWarning>
      <body className="bg-white dark:bg-neutral-1">
        <ThemeProvider attribute="class" enableSystem={false}>
          <QueryProvider>
            <JotaiProvider>
              {JotaiDevToolsComponent}
              <SessionProvider>
                <TooltipProvider delayDuration={300}>
                  {children}
                </TooltipProvider>
              </SessionProvider>
            </JotaiProvider>
            <ReactQueryDevtools
              initialIsOpen={false}
              position={"bottom-right"}
            />
          </QueryProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

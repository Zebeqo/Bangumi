import "@/styles/globals.css";
import SessionProvider from "@/components/Provider/SessionProvider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { Noto_Sans_SC } from "next/font/google";
import ThemeProvider from "@/components/Provider/ThemeProvider";
import QueryProvider, {
  ReactQueryDevtools,
} from "@/components/Provider/QueryProvider";
import JotaiProvider, {
  JotaiDevTools,
} from "@/components/Provider/JotaiProvider";
import Analytics from "@/components/Analytics";

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "auto",
  preload: false,
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    // https://github.com/pacocoursey/next-themes/issues/152#issuecomment-1364280564
    <html lang="en" className={notoSansSC.variable} suppressHydrationWarning>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="bg-white dark:bg-neutral-1">
        <ThemeProvider attribute="class" enableSystem={false}>
          <QueryProvider>
            <JotaiProvider>
              <JotaiDevTools />
              <SessionProvider session={session}>{children}</SessionProvider>
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

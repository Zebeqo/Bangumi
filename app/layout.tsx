import "@/styles/globals.css";
import SessionProvider from "@/components/Provider/SessionProvider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { Noto_Sans_SC } from "@next/font/google";
import { ThemeProvider } from "@/components/Provider/ThemeProvider";
import { StateProvider } from "@/components/Provider/StateProvider";
import { AnalyticsWrapper } from "@/components/analytics";

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "auto",
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

      <body className="bg-neutral-1">
        <ThemeProvider>
          <StateProvider>
            <SessionProvider session={session}>{children}</SessionProvider>
          </StateProvider>
        </ThemeProvider>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}

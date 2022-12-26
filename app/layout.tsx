import "@/styles/globals.css";
import SessionProvider from "@/components/provider/SessionProvider";
import JotaiProvider from "@/components/provider/JotaiProvider";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { Noto_Sans_SC } from "@next/font/google";

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  weight: ["400", "500"],
  subsets: ["chinese-simplified", "latin"],
  display: "auto",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession(authOptions);

  return (
    <html lang="en" className={notoSansSC.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="bg-neutral-1">
        <JotaiProvider>
          <SessionProvider session={session}>{children}</SessionProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}

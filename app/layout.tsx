import "@/styles/globals.css";
import SessionProvider from "@/components/provider/SessionProvider";
import JotaiProvider from "@/components/provider/JotaiProvider";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession(authOptions);

  return (
    <html lang="en">
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

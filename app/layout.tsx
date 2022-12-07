import "@/styles/globals.css";
import { ClientSessionProvider } from "./SessionProvider";
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
      <body>
        <ClientSessionProvider session={session}>
          {children}
        </ClientSessionProvider>
      </body>
    </html>
  );
}

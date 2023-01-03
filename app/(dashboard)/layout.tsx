import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Panel } from "@/components/panel/Panel";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <Header />
      <div className="flex flex-row ">
        <Sidebar />
        <div className="ml-52 w-full px-8 py-6">{children}</div>
      </div>
      <Panel />
    </div>
  );
}

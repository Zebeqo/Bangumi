import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Panel } from "@/components/Panel/Panel";
import { Toast } from "@/components/Toast/Toast";
import { Dialog } from "@/components/Dialog/Dialog";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="flex flex-row ">
        <Sidebar />
        <div className="ml-52 w-full px-8 pt-4 pb-12">{children}</div>
      </div>
      <Panel />
      <Toast />
      <Dialog />
    </div>
  );
}

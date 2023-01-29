import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Panel } from "@/components/Panel/Panel";
import ToastProvider from "@/components/Provider/ToastProvider";
import { MainToast } from "@/components/Toast/MainToast";
import { MainDialog } from "@/components/Dialog/MainDialog";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider swipeDirection="right" duration={3000}>
      <div>
        {/* @ts-expect-error Server Component */}
        <Header />
        <div className="flex flex-row ">
          <Sidebar />
          <div className="ml-52 w-full px-8 pt-4 pb-12">{children}</div>
        </div>
        <Panel />
        <MainToast />
        <MainDialog />
      </div>
    </ToastProvider>
  );
}

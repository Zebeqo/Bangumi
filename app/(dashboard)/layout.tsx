import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Panel } from "@/components/panel/Panel";
import ToastProvider from "@/components/provider/ToastProvider";
import { Toast } from "@/ui/Toast";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider swipeDirection="right" duration={5000}>
      <div>
        {/* @ts-expect-error Server Component */}
        <Header />
        <div className="flex flex-row ">
          <Sidebar />
          <div className="ml-52 w-full px-8 py-6">{children}</div>
        </div>
        <Panel />
        <Toast />
      </div>
    </ToastProvider>
  );
}

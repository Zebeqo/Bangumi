import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <Header />
      <div className="flex flex-row ">
        <Sidebar />
        <div className="ml-52 w-full">{children}</div>
      </div>
    </div>
  );
}

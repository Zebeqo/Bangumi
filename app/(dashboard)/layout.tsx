import { Header } from "@/components/Header";

export default function Layout() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <Header />
      <div className="h-[1px] w-full bg-primary-6"></div>
    </div>
  );
}

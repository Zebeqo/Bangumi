import { Subnav } from "@/components/Subnav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Subnav />
      <div className="mt-8 grid grid-cols-1 justify-items-center gap-12 px-12 xl:grid-cols-2 min-[1800px]:grid-cols-3 min-[2400px]:grid-cols-4">
        {children}
      </div>
    </>
  );
}

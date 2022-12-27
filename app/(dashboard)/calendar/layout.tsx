import { Subnav } from "@/components/Subnav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Subnav />
      {children}
    </>
  );
}

import { CategoryNavbar } from "@/components/Navbar/CategoryNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center justify-between px-16">
        <CategoryNavbar basePath="/hot" />
      </div>
      {children}
    </>
  );
}

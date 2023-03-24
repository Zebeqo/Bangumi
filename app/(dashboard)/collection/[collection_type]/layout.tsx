import { PersonalViewSwitch } from "@/components/Switch/personalViewSwitch";
import { CategoryNavbar } from "@/components/Navbar/CategoryNavbar";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { collection_type: string };
}) {
  return (
    <>
      <div className="flex items-center justify-between px-16">
        <CategoryNavbar basePath={`/collection/${params.collection_type}`} />
        <PersonalViewSwitch />
      </div>
      {children}
    </>
  );
}

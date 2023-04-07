import { objectKeys } from "@/lib/utils";
import { subjectTypeEnum } from "@/lib/enum/subjectTypeEnum";
import { Navbar, NavbarItem } from "@/ui/components/Navbar";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { type: string };
}) {
  return (
    <>
      <div className="flex items-center justify-between px-16">
        <Navbar value={`/hot/${params.type}`}>
          {objectKeys(subjectTypeEnum).map((subject_type, index) => (
            <NavbarItem
              value={`/hot/${subject_type}`}
              key={`${subject_type}-${index}`}
            >
              {subjectTypeEnum[subject_type].label}
            </NavbarItem>
          ))}
        </Navbar>
      </div>
      {children}
    </>
  );
}

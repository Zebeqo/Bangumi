import { PersonalViewSwitch } from "@/components/Switch/personalViewSwitch";
import { Navbar as NavbarRoot, NavbarItem } from "@/ui/components/Navbar";
import { objectKeys } from "@/lib/utils";
import { subjectTypeEnum } from "@/lib/enum/subjectTypeEnum";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { collection_type: string; subject_type: string };
}) {
  return (
    <>
      <div className="flex items-center justify-between px-16">
        <NavbarRoot
          value={`/collection/${params.collection_type}/${params.subject_type}`}
        >
          {objectKeys(subjectTypeEnum).map((subject_type, index) => (
            <NavbarItem
              value={`/collection/${params.collection_type}/${subject_type}`}
              key={`${subject_type}-${index}`}
            >
              {subjectTypeEnum[subject_type].label}
            </NavbarItem>
          ))}
        </NavbarRoot>
        <PersonalViewSwitch />
      </div>
      {children}
    </>
  );
}

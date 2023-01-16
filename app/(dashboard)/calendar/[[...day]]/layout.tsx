// export const dynamicParams = false;

import { Subnav } from "@/components/Subnav";
import { SortDropdownMenu } from "@/components/Panel/InfoPanel/SortDropdownMenu";

const navItems = [
  {
    name: "monday",
    value: "周一",
    href: "/calendar/monday",
  },
  {
    name: "tuesday",
    value: "周二",
    href: "/calendar/tuesday",
  },
  {
    name: "wednesday",
    value: "周三",
    href: "/calendar/wednesday",
  },
  {
    name: "thursday",
    value: "周四",
    href: "/calendar/thursday",
  },
  {
    name: "friday",
    value: "周五",
    href: "/calendar/friday",
  },
  {
    name: "saturday",
    value: "周六",
    href: "/calendar/saturday",
  },
  {
    name: "sunday",
    value: "周日",
    href: "/calendar/sunday",
  },
];

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { day?: undefined } | { day: string[] };
}) {
  const selectedItem = params.day
    ? params.day[0]
    : navItems[new Date().getDay() - 1].name;

  return (
    <>
      <Subnav navItems={navItems} selectedItemName={selectedItem}>
        <SortDropdownMenu />
      </Subnav>
      <div className="mt-8 grid grid-cols-1 justify-items-center gap-12 px-12 xl:grid-cols-2 min-[1800px]:grid-cols-3 min-[2400px]:grid-cols-4">
        {children}
      </div>
    </>
  );
}

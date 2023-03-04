// export const dynamicParams = false;

import { Subnav } from "@/components/Subnav";
import { SortMenu } from "@/components/DropdownMenu/SortMenu";

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
    : navItems[(new Date().getDay() === 0 ? 7 : new Date().getDay()) - 1].name;

  return (
    <>
      <Subnav navItems={navItems} selectedItemName={selectedItem}>
        <SortMenu />
      </Subnav>
      {children}
    </>
  );
}

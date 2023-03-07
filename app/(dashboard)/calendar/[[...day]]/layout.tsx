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

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata({
  params,
}: {
  params: { day?: string[] };
}) {
  const dayValue =
    params.day?.at(0) === "monday"
      ? "周一"
      : params.day?.at(0) === "tuesday"
      ? "周二"
      : params.day?.at(0) === "wednesday"
      ? "周三"
      : params.day?.at(0) === "thursday"
      ? "周四"
      : params.day?.at(0) === "friday"
      ? "周五"
      : params.day?.at(0) === "saturday"
      ? "周六"
      : params.day?.at(0) === "sunday"
      ? "周日"
      : "今日";

  return {
    title: `${dayValue}放送`,
  };
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { day?: string[] };
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

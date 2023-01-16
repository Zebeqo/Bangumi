import { Subnav } from "@/components/Subnav";

const navItems = [
  {
    name: "do",
    value: "在看",
    href: "/collection/do",
  },
  {
    name: "wish",
    value: "想看",
    href: "/collection/wish",
  },
  {
    name: "collect",
    value: "看过",
    href: "/collection/collect",
  },
  {
    name: "on_hold",
    value: "搁置",
    href: "/collection/on_hold",
  },
  {
    name: "dropped",
    value: "抛弃",
    href: "/collection/dropped",
  },
];

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { type?: undefined } | { type: string[] };
}) {
  const selectedItem = params.type ? params.type[0] : "do";

  return (
    <>
      <Subnav navItems={navItems} selectedItemName={selectedItem} />
      <div className="mt-8 grid grid-cols-1 justify-items-center gap-12 px-12 xl:grid-cols-2 min-[1800px]:grid-cols-3 min-[2400px]:grid-cols-4">
        {children}
      </div>
    </>
  );
}

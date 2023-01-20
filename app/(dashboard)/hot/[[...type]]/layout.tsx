import { Subnav } from "@/components/Subnav";

const navItems = [
  {
    name: "anime",
    value: "动画",
    href: "/hot/anime",
  },
  {
    name: "book",
    value: "书籍",
    href: "/hot/book",
  },
  {
    name: "music",
    value: "音乐",
    href: "/hot/music",
  },
  {
    name: "game",
    value: "游戏",
    href: "/hot/game",
  },
  {
    name: "real",
    value: "三次元",
    href: "/hot/real",
  },
];

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { type?: undefined } | { type: string[] };
}) {
  const selectedItem = params.type ? params.type.at(0) ?? "anime" : "anime";

  return (
    <>
      <Subnav navItems={navItems} selectedItemName={selectedItem} />
      <div className="mt-8 grid grid-cols-1 justify-items-center gap-12 px-12 xl:grid-cols-2 min-[1800px]:grid-cols-3 min-[2400px]:grid-cols-4">
        {children}
      </div>
    </>
  );
}

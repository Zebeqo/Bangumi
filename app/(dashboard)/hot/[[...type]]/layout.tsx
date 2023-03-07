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
  params: { type?: string[] };
}) {
  const selectedItem = params.type ? params.type.at(0) ?? "anime" : "anime";

  return (
    <>
      <Subnav navItems={navItems} selectedItemName={selectedItem} />
      {children}
    </>
  );
}

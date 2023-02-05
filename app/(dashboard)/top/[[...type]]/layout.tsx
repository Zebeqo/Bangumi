import { Subnav } from "@/components/Subnav";

const navItems = [
  {
    name: "anime",
    value: "动画",
    href: "/top/anime",
  },
  {
    name: "book",
    value: "书籍",
    href: "/top/book",
  },
  {
    name: "music",
    value: "音乐",
    href: "/top/music",
  },
  {
    name: "game",
    value: "游戏",
    href: "/top/game",
  },
  {
    name: "real",
    value: "三次元",
    href: "/top/real",
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
      {children}
    </>
  );
}

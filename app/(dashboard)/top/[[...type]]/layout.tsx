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

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata({
  params,
}: {
  params: { type?: string[] };
}) {
  const typeValue =
    params.type?.at(0) === "anime"
      ? "动画"
      : params.type?.at(0) === "book"
      ? "书籍"
      : params.type?.at(0) === "music"
      ? "音乐"
      : params.type?.at(0) === "game"
      ? "游戏"
      : params.type?.at(0) === "real"
      ? "三次元"
      : "动漫";

  return {
    title: `${typeValue}排行`,
  };
}

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

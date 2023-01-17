import { Subnav } from "@/components/Subnav";
import { PersonalViewSwitch } from "@/components/personalViewSwitch";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { type?: undefined } | { type: string[] };
}) {
  const selectedItem = params.type?.at(1) ?? "anime";
  const collectionType = params.type?.at(0) ?? "do";

  const navItems = [
    {
      name: "anime",
      value: "动画",
      href: `/collection/${collectionType}/anime`,
    },
    {
      name: "book",
      value: "书籍",
      href: `/collection/${collectionType}/book`,
    },
    {
      name: "music",
      value: "音乐",
      href: `/collection/${collectionType}/music`,
    },
    {
      name: "game",
      value: "游戏",
      href: `/collection/${collectionType}/game`,
    },
    {
      name: "real",
      value: "三次元",
      href: `/collection/${collectionType}/real`,
    },
  ];

  return (
    <>
      <Subnav navItems={navItems} selectedItemName={selectedItem}>
        <div className="flex items-center space-x-3">
          <span className="font-medium text-neutral-11">
            个人视角<span className="text-xs font-normal ">（按 p 切换）</span>
          </span>
          <PersonalViewSwitch />
        </div>
      </Subnav>
      {children}
    </>
  );
}

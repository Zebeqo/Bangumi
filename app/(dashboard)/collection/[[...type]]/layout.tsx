import { PersonalViewSwitch } from "@/components/Switch/personalViewSwitch";
import { CategoryNavbar } from "@/components/Navbar/CategoryNavbar";

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata({
  params,
}: {
  params: { type?: string[] };
}) {
  const selectedTypeValue =
    params.type?.at(0) === "do"
      ? "在看"
      : params.type?.at(0) === "wish"
      ? "想看"
      : params.type?.at(0) === "collect"
      ? "看过"
      : params.type?.at(0) === "on_hold"
      ? "搁置"
      : params.type?.at(0) === "dropped"
      ? "抛弃"
      : "在看";

  const collectionTypeValue =
    params.type?.at(1) === "anime"
      ? "动画"
      : params.type?.at(1) === "book"
      ? "书籍"
      : params.type?.at(1) === "music"
      ? "音乐"
      : params.type?.at(1) === "game"
      ? "游戏"
      : params.type?.at(1) === "real"
      ? "三次元"
      : "动漫";

  return {
    title: `${collectionTypeValue} | ${selectedTypeValue}`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center justify-between px-16">
        <CategoryNavbar />
        <PersonalViewSwitch />
      </div>
      {children}
    </>
  );
}

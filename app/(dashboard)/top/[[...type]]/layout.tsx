import { CategoryNavbar } from "@/components/Navbar/CategoryNavbar";

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
}: {
  children: React.ReactNode;
  params: { type?: string[] };
}) {
  return (
    <>
      <div className="flex items-center justify-between px-16">
        <CategoryNavbar />
      </div>
      {children}
    </>
  );
}

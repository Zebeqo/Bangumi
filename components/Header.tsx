import { BangumiLogo } from "@/ui/icon/BangumiLogo";
import { ThemeButton } from "@/components/Button/ThemeButton";
import { GithubButton } from "@/components/Button/GithubButton";
import { AvatarMenu } from "@/components/DropdownMenu/AvatarMenu";

export function Header() {
  return (
    <div className="sticky top-0 z-10 flex h-16 w-full items-center justify-between border-b border-primary-6 bg-white px-6 dark:bg-neutral-1">
      <BangumiLogo />
      <div className="flex items-center justify-center space-x-4 py-2 px-2">
        <div>
          <span className="mr-1">
            <ThemeButton />
          </span>
          <GithubButton />
        </div>
        <div className="h-8 w-[1px] bg-neutral-6"></div>
        <AvatarMenu />
      </div>
    </div>
  );
}

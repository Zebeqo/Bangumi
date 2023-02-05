import { BangumiLogo } from "@/ui/icon/BangumiLogo";
import { ThemeButton } from "@/components/Button/ThemeButton";
import { GithubButton } from "@/components/Button/GithubButton";
import { AvatarDropdownMenu } from "@/components/DropdownMenu/AvatarDropdownMenu";
import { LoginButton } from "@/components/Button/LoginButton";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function Header() {
  const session = await unstable_getServerSession(authOptions);
  return (
    <div className="sticky top-0 z-10 flex h-16 w-full items-center justify-between border-b border-primary-6 bg-neutral-1 px-6">
      <BangumiLogo />
      <div className="flex items-center justify-center space-x-4 py-2 px-2">
        <div>
          <span className="mr-1">
            <ThemeButton />
          </span>
          <GithubButton />
        </div>
        <div className="h-8 w-[1px] bg-neutral-6"></div>
        {session ? (
          <AvatarDropdownMenu imageURL={session.user.image} />
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
}

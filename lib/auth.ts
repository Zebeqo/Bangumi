import type { NextAuthOptions } from "next-auth";
import { z } from "zod";
import * as process from "process";
import { FALLBACK_IMAGE } from "@/lib/constant";

const userScheme = z.object({
  id: z.number().transform((value) => value.toString()),
  username: z.string(),
  nickname: z.string(),
  avatar: z.object({
    large: z.string().url().catch(FALLBACK_IMAGE),
  }),
});

export type UserInfo = z.infer<typeof userScheme>;

export const authOptions: NextAuthOptions = {
  providers: [
    // custom provider of Bangumi
    {
      id: "bangumi",
      name: "Bangumi",
      type: "oauth",
      authorization: "https://bgm.tv/oauth/authorize",
      token: "https://bgm.tv/oauth/access_token",
      userinfo: "https://api.bgm.tv/v0/me",
      profile(profile) {
        const userInfo = userScheme.parse(profile);
        return {
          id: userInfo.id,
          name: userInfo.username,
          nickname: userInfo.nickname,
          image: userInfo.avatar.large,
        };
      },
      clientId: process.env.BANGUMI_ID,
      clientSecret: process.env.BANGUMI_SECRET,
    },
  ],
  callbacks: {
    jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token ?? "";
      }
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.picture = user.image;
        token.nickname = user.nickname;
      }
      return token;
    },
    session({ token, session }) {
      session.accessToken = token.accessToken;
      session.user.image = token.picture;
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.nickname = token.nickname;

      return session;
    },
  },
};

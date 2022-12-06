import type { NextAuthOptions } from "next-auth";
import { z } from "zod";
import * as process from "process";

const profileScheme = z.object({
  id: z.number().transform((value) => value.toString()),
  username: z.string(),
  nickname: z.string(),
  avatar: z.object({
    large: z.string().url(),
  }),
});

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
        return profileScheme.parse(profile);
      },
      clientId: process.env.BANGUMI_ID,
      clientSecret: process.env.BANGUMI_SECRET,
    },
  ],
};

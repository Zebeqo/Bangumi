// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    nickname: string;
    image: string;
    name: string;
  }
  interface Session {
    accessToken: string;
    user: User;
    image: string;
    name: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    nickname: string;
    accessToken: string;
    picture: string;
    name: string;
  }
}

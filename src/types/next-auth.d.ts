import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      isAdmin?: boolean;
      username?: string;
    };
  }

  interface User {
    user: User;
    id: string;
    email: string;
    isAdmin?: boolean;
  }
}
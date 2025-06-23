import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./prisma";
import { compare } from "bcryptjs";
import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) return null;

        const isValid = await compare(credentials.password, user.password);
        if (!isValid) return null;

        return {
          user: {
            id: user.id,
            email: user.email,
            username: user.username,
            isAdmin: user.isAdmin,
          },
          id: user.id,
          email: user.email,
          username: user.username,
          isAdmin: user.isAdmin,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      // Add isAdmin to the token at login
      if (user) {
        token.isAdmin = (user as any).isAdmin;
        token.username = (user as any).username;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      // Add isAdmin to the session
      if (session.user) {
        session.user.id = token.sub ?? "";
        session.user.isAdmin = token.isAdmin as boolean;
        session.user.username = token.username as string | undefined;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
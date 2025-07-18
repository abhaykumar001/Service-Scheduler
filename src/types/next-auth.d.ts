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
    id: string;
    email: string;
    isAdmin?: boolean;
    username?: string;
  }
}

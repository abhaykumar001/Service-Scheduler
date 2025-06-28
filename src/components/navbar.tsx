"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { LogoutButton } from "./LogoutButton";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="fixed w-full mt-15 flex justify-between items-center p-4 shadow-lg bg-cover bg-center backdrop-blur-md">
      <Link href="/" className="text-xl font-bold text-blue-700 hover:text-blue-900">
        Service Scheduler
      </Link>
      <div className="flex gap-4 items-center">
        {!session?.user ? (
          <>
            <Link href="/login" className="text-sm text-blue-600 hover:underline">
              Login
            </Link>
            <Link href="/register" className="text-sm text-blue-600 hover:underline">
              Register
            </Link>
          </>
        ) : (
          <>
            {/* Show username */}
            <span className="text-sm text-gray-700 font-medium">
              Welcome {session.user.username} !
            </span>
            <Link href="/request" className="text-sm text-blue-600 hover:underline">
              Dashboard
            </Link>
            {/* Show admin link if user is admin */}
            {session.user.isAdmin && (
              <Link href="/admin" className="text-sm text-red-600 font-semibold hover:underline">
                Admin
              </Link>
            )}
            <LogoutButton />
          </>
        )}
      </div>
    </nav>
  );
}
"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import { useSession, SessionProvider } from "next-auth/react";

export default function HomePage() {
  return (
    <SessionProvider>
      <HomeContent />
    </SessionProvider>
  );
}

function HomeContent() {
  const { data: session } = useSession();

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Service Scheduler</h1>
          <p className="text-lg text-gray-600 mb-6">
            Schedule maintenance and repair services with ease. Trusted professionals, reliable timing.
          </p>

          {session?.user ? (
            <Link href="/request">
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Go to Dashboard
              </button>
            </Link>
          ) : (
            <div className="flex justify-center gap-4">
              <Link href="/register">
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                  Get Started
                </button>
              </Link>
              <Link href="/login">
                <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
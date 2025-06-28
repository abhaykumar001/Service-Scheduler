import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';



const HeroComponent = () => {
    const { data: session } = useSession();
  return (
    <div className=" bg-[url('/tech.webp')] h-screen lg:h-[800px] w-screen bg-cover bg-center -mt-15">
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-bold mb-4">Small Business Web Hosting</h1>
          <p className="text-lg text-gray-600 mb-6">Every website starts with a web host you can trust</p>
            
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
    </div>
  )
}

export default HeroComponent

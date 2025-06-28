"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import HeroComponent from "@/components/HeroComponent";
import { SessionProvider } from "next-auth/react";
import CardComponent from "@/components/CardComponent";

export default function HomePage() {
  return (
    <SessionProvider>
      <HomeContent />
    </SessionProvider>
  );
}

function HomeContent() {
  return (
    <>
      <Navbar />
      <HeroComponent />
      <CardComponent />
      <Footer />
    </>
  );
}
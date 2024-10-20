"use client";
import Image from "next/image";
import Header from "@/components/header/header";
import HeroBanner from "@/components/hero-banner/hero-banner";
import BgPattern from "../public/images/hero-banner-background-pattern.svg";
import DarkBgPattern from "../public/images/hero-banner-background-pattern-dark.svg";
import { useContext } from "react";
import { ThemeContext } from "@/components/context/theme-context";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full font-inter overflow-y-hidden dark:text-white text-black bg-website_light dark:bg-website_dark mx-auto items-center justify-items-center gap-16`}
    >
      <Header />
      <main className="flex flex-col w-full gap-8">
        <>
          <section className="relative h-full w-full">
            <Image
              className={`absolute transition-all duration-500 ease-in-out top-0 left-0 w-full h-full z-0 cursor-pointer animate-in`}
              src={theme === "light" ? BgPattern : DarkBgPattern}
              alt="Background pattern"
              width={1600}
              height={800}
              priority
            />
            <HeroBanner />
          </section>
        </>
      </main>
    </div>
  );
}

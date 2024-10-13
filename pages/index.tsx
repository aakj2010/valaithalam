"use client";
import Image from "next/image";
import Header from "@/components/header/header";
import HeroBanner from "@/components/hero-banner/hero-banner";
import BgPattern from "../public/images/hero-banner-background-pattern.svg";


export default function Home() {

  return (
    <div
      className={`min-h-screen font-inter overflow-y-hidden dark:text-white text-black bg-website_light dark:bg-website_dark mx-auto items-center justify-items-center gap-16 font-[family-name:var(--font-geist-sans)]`}
    >
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <>
          <section className="relative lg:!max-h-[768px] w-full -mt-20">
            <Image
              className="dark:invert absolute top-0 left-0 w-full z-0 cursor-pointer"
              src={BgPattern}
              alt="Valaithalam-Logo"
              width={120}
              height={32}
              priority
            />
            <HeroBanner />
          </section>
        </>
      </main>
    </div>
  );
}

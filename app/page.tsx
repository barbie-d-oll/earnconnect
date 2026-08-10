import Navbar from "@/app/components/layout/Navbar";
import Hero from "@/app/components/sections/Hero";
import Stats from "@/app/components/sections/Stats";
import HowItWorks from "@/app/components/sections/HowItWorks";
import Opportunities from "./components/sections/Opportunities";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Opportunities />

        <section
          id="how-it-works"
          className="bg-white px-6 py-24 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-black text-[#050505]">
              How EarnConnect works
            </h2>

            <p className="mt-3 max-w-xl text-[#65676B]">
              A simple way to discover opportunities, complete tasks, and
              earn.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
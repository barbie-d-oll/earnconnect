import Navbar from "@/app/components/layout/Navbar";
import Hero from "@/app/components/sections/Hero";
import Stats from "@/app/components/sections/Stats";
import HowItWorks from "@/app/components/sections/HowItWorks";
import Opportunities from "@/app/components/sections/Opportunities";
import CTA from "@/app/components/sections/CTA";
import Footer from "@/app/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Opportunities />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
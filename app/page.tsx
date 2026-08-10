import Link from "next/link";
import Navbar from "@/app/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-10">
          <div>
            <p className="mb-4 font-semibold text-[#1877F2]">
              Welcome to EarnConnect
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-[#050505] sm:text-6xl lg:text-7xl">
              Find opportunities.
              <br />
              <span className="text-[#1877F2]">Connect.</span> Earn.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#65676B]">
              Discover tasks, connect with opportunities, and build your
              income through EarnConnect.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/register"
                className="rounded-lg bg-[#1877F2] px-7 py-3.5 text-center font-semibold text-white hover:bg-[#166FE5]"
              >
                Get Started
              </Link>

              <Link
                href="#how-it-works"
                className="rounded-lg border border-slate-300 bg-white px-7 py-3.5 text-center font-semibold text-[#050505] hover:bg-[#F0F2F5]"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
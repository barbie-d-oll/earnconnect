import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl bg-[#1877F2] px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-16">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-100">
            Get started today
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">
            Ready to turn your skills into income?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-blue-100">
            Create your EarnConnect account and start discovering
            opportunities that match what you can do.
          </p>

          <Link
            href="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 font-semibold text-[#1877F2] transition hover:bg-[#E7F3FF]"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}